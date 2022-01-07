---
title: Session Tokens
---

# FxA Session Tokens

_This is a bit of a braindump, but here we are._

Initially, session tokens were just stored in MySQL with everything else. As part of some work to enable the device manager, we added columns for parsed user-agent info and last-access time, along with a new stored procedure to update a token:

* https://github.com/mozilla/fxa-auth-db-mysql/pull/65
* https://github.com/mozilla/fxa-auth-server/pull/997

However, when we turned it on in prod it caused a significant increase in write IOPS and it had to be backed out:

* https://github.com/mozilla/fxa-auth-server/pull/1169
* https://github.com/mozilla/fxa-auth-server/pull/1171

So, the decision was taken to move just the new properties into Redis and then aggregate tokens from the two data stores when reading them out:

* https://github.com/mozilla/fxa-auth-server/pull/1968

Later, the size of our Redis instance became a growing concern and we did some work to reduce it by removing property keys and by pruning old tokens:

* https://github.com/mozilla/fxa-auth-server/pull/2254
* https://github.com/mozilla/fxa-auth-server/pull/2257

The latter of those two changes mirrored work that we previously did to prune old session tokens from MySQL:

* https://github.com/mozilla/fxa-auth-server/pull/1996
* https://github.com/mozilla/fxa-auth-db-mysql/pull/282

Session tokens in MySQL can be associated with a device record. “Device” is a misleading name here because it really means “Firefox instance”. A true device record would require some kind of reliable fingerprinting mechanism so we could recognise common devices between instances of the browser. When we started tracking metrics for how many devices a user connected, we tried to make accommodations for this by taking into account the operating system details. But in most places in the code, bear in mind that device === browser.

A session token that has a device record will never be pruned, because that would break Sync. So we only prune tokens if there’s no corresponding device in the db. And we only prune them if they’re more than 4 weeks old.

Pruning from MySQL happens in one of our regular versioned stored procedures, at the time of writing it’s called `prune_7`:

* packages/fxa-auth-db-mysql/lib/db/schema/patch-068-069.sql

There are properties in config that control this called enablePruning, pruneEvery and pruneTokensMaxAge. The code that uses them is near the top of `lib/db/mysql.js` in the `fxa-auth-db-mysql` package.

Pruning from Redis happens opportunistically whenever session tokens are read by calling `db.pruneSessionTokens`. This method is called automatically on every endpoint that is authenticated by session token, via code inside `makeCredentialFn` in `lib/server.js` in the `fxa-auth-server` package. I just noticed it’s also explicitly called by `db.sessions` in `lib/db.js`, which seems unnecessary. Perhaps that is an artifact of some older arrangement, I can’t remember now. We may be able to get rid of it.

There are also explicit calls to `db.deleteSessionTokenFromRedis` in all of the places it makes sense to do so. That includes `db.createSessionToken`, to handle any occurrences where a session token id gets reused and the old session token still had data in Redis.
