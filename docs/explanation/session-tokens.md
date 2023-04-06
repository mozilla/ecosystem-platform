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


## Session Token Maximums and Token Pruning


This an update on session tokens and pruning. The previous section will remain intact for historical record.


In 2022, we discovered that some accounts had ended up with extremely large numbers of devices. This can be a bit of liability from a data perspective and we have decided to start applying limits to the number of sessions an account can reference. As mentioned above there is a relationship between devices and sessions, so this effectively also limits the number of devices an account can support (i.e. have signed in) at any given time. At the time of writing we are limiting accounts to 1000 active sessions.


We enforce these limits in a few ways. First we only allow N sessions to be held per account in redis. Second, we limit on sql queries to N sessions, and finally we actively remove, aka prune, sessions for accounts with more than 1000 sessions.


Previously the prune would happen opportunistically and randomly in a fire and forget to call in the server. It would occur when a user accessed their account at random (i.e. not every access would result in a prune). At one point this fire and forget operation was unintentionally disabled during a refactor. This led to extremely high session counts, and we actually encountered some OOM errors in code due to unbound sql queries returning too many sessions. These sql queries have all been bounded, and we decided to move the pruning operation to a cron job, so the operation could be applied regularly and be monitored.


The script that prunes tokens, and tokens of all kinds is called (prune-tokens.ts)[https://github.com/mozilla/fxa/blob/main/packages/fxa-auth-server/scripts/prune-tokens.ts]. It has multiple arguments, and is sort of complicated in its own right and will be documented here.


### Prune Tokens Script


The script itself goes through the following stages.


1. Locates accounts with more than N sessions. (Where N is the maximum number of allowed sessions.)
2. Targets the accounts with the most sessions first and begins deleting these sessions.
3. Targets all tokens older than N number of days (Where N is the max number of days.)
4. Delete these tokens excluding any session token associated with a device.
5. Targets all codes older than N number of days (Where N is the max number of days.)
6. Deletes these codes.




_(Steps 3-6 are the legacy process described at the start of this document.)_




Help for the script can be viewed by running `NODE_ENV=dev node prune-tokens.js --help`:


```
NODE_ENV=dev node prune-tokens.js --help
Usage: prune-tokens [options]


Options:


 -V, --version                       output the version number
 --maxTokenAge <duration>            Max age of token. Any tokens older than this value will be pruned. A value of 0 results in a no-op. (default: 0)
 --maxCodeAge <duration>             Max age of code. Any codes older than this value will be pruned. A value of 0 results in a no-op. (default: 0)
 --maxSessions <number>              Max number of sessions that any account is allowed to hold. A value of 0 results in a no-op. (default: 0)
 --maxSessionsMaxAccounts <number>   When maxSessions is greater than 0, this value allows us to limit scope of the delete by restricting the number of accounts processed on any given run. (default: 100)
 --maxSessionsMaxDeletions <number>  When maxSessions is greater than 0, this value restricts the total number of sessions that can be deleted per account. (default: 100000)
 --maxSessionsBatchSize <number>     When maxSessions is greater than 0, this value controls the number of deletions that are batched together at one time. e.g. A batch size of 1 would delete one token at a time. (default: 1000)
 --wait                              Amount of time to sleep between delete operations in milliseconds.
 -h, --help                          output usage information


Example:


> ./scripts/prune-tokens.sh --maxTokenAge='10 days' --maxCodeAge='1 month' --maxSessions=500


Exit Codes:
 0 - success
 1 - unexpected error
 2 - error during initialization
 3 - error during pruning operation
```


There's quite a few options here, so let's break this down with an example. Let's say we invoked the token pruner with this:


`NODE_ENV=dev node prune-tokens.js --maxTokenAge 30-days --maxCodeAge 30-days --maxSessions=1000 --maxSessionsMaxAccounts=1 --maxSessionsMaxDeletions=100000 --maxSessionsBatchSize=1 --wait=500`


- `--maxTokenAge 30-days` - Any token older than 30 days would be pruned, except for session tokens with associated devices.
- `--maxCodeAge 30-days` - Any token code older than 30 days would be pruned.
- `--maxSessions=1000` - This means an account can have up to 1000 sessions, anything over 1000, is fair game to delete.
- `--maxSessionsMaxAccounts=1` - This means that  we target up to 1 account per run.
- `--maxSessionsMaxDeletions=100000` - This means we will delete up to 100k tokens per account, then give up and move onto the next account. In our case we only have one account, so we would exit after 100k were deleted. (again 100k not 10k…)
- `--maxSessionBatchSize=1` - This means that we delete 1 token at a time. It used to be higher, but when we started hitting perf issues on stage, we turned this way down.
- `--wait=500` - Wait 500ms between each delete call. So in this case, delete 1 token. wait 500ms, delete another token.


_Note, any argument that starts with `maxSession` is a session specific arg, which control steps 1 & 2 of the pruning process._
