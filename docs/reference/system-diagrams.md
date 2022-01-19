---
title: System Diagrams
---

Current as of `November 15th, 2019`

## FxA universe

```mermaid
stateDiagram
  state "RP" as RP
  state "Amazon S3" as s3: Profile photo storage
  state "Amazon SNS" as sns: Amazon hosted email/SMS
  state "Basket" as basket: Send marketing emails, hosted by Marketing
  state "fraud detection pipeline" as fdp: Should an event be blocked? Hosted by SecOps
  state "fxa-auth-server" as auth: authn/authz
  state "fxa-auth-db-mysql" as authdb: DB service for auth-server
  state "fxa-content-server" as content
  state "fxa-customs-server" as customs: Fraud/abuse prevention
  state "fxa-email-service" as email: SMTP gateway
  state "fxa-event-broker" as eb: Notify RPs of important user events
  state "fxa-payments-server" as payments
  state "fxa-profile-server" as profile
  state "fxa-support-panel" as support_panel: Allow support agents to access user info
  state "gcp" as gcp: logging/metrics
  state "iprepd" as iprepd: Should an IP be blocked? Hosted by SecOps
  state "memcached" as memcached: store blocks, rate limits
  state "Mozilla Data Platform (MDP)" as mdp: Send marketing emails, hosted by Marketing
  state "mysql" as mysql: auth, oauth, profile CRUD
  state "redis" as redis: session/profile info cache
  state "Support agent" as support_agent: Fix user problems
  state "Zendesk" as zendesk: Hosted support management

  User-->RP
  RP-->auth
  RP-->content
  auth-->authdb
  auth-->basket
  auth-->customs
  auth-->eb
  auth-->email
  auth-->gcp
  auth-->mysql
  auth-->profile
  auth-->redis
  auth-->sns
  auth-->zendesk
  authdb-->mysql
  content-->auth
  content-->gcp
  content-->payments
  content-->profile
  customs-->gcp
  customs-->iprepd
  customs-->memcached
  eb-->RP
  email-->sns
  fdp-->customs
  gcp-->fdp
  gcp-->mdp
  payments-->auth
  payments-->profile
  payments-->stripe
  payments-->gcp
  payments-->RP
  profile-->auth
  profile-->gcp
  profile-->mysql
  profile-->s3
  support_agent-->support_panel
  support_agent-->zendesk
  support_panel-->auth
  support_panel-->profile
```


## fxa-auth-server

```mermaid
stateDiagram
  state "RP" as RP
  state "amazon sns" as sns: Amazon hosted email/SMS
  state "Basket - Salesforce Marketing Cloud (SFMC)" as basket: Send marketing emails, hosted by Marketing
  state "fxa-auth-db-mysql" as authdb: DB service for auth-server
  state "fxa-auth-server" as auth: authn/authz
  state "fxa-content-server" as content
  state "fxa-customs-server" as customs: Fraud/abuse prevention
  state "fxa-email-service" as email: SMTP gateway
  state "fxa-event-broker" as eb: Notify RPs of important user events
  state "fxa-payments-server" as payments
  state "fxa-profile-server" as profile
  state "fxa-support-panel" as support_panel: Allow support agents to access user info
  state "gcp" as gcp: logging/metrics
  state "mysql" as mysql: auth, oauth, profile CRUD
  state "redis" as redis: session/profile info cache
  state "Zendesk" as zendesk: Hosted support management

  RP-->auth : 1
  content-->auth : 2
  payments-->auth : 3
  profile-->auth : 4
  support_panel-->auth : 5
  auth-->authdb : 6
  auth-->basket : 7
  auth-->customs : 8
  auth-->eb : 9
  auth-->email : 10
  auth-->gcp : 11
  auth-->mysql : 12
  auth-->redis : 13
  auth-->sns : 14
  auth-->zendesk : 16

  note left of RP
No.  Connection             Reason
1.   RP &rarr; auth              verify/fetch OAuth tokens
2.   content &rarr; auth         authentication/authorization
3.   payments &rarr; auth        update subscriptions
4.   profile &rarr; auth         canonical profile info
5.   support_panel &rarr; auth   view user info
6.   auth &rarr; authdb          authentication/subscription CRUD
7.   auth &rarr; basket          notify of user events
8.   auth &rarr; customs         fraud detection
9.   auth &rarr; event broker    notify of user update
10.  auth &rarr; email           send email to users
11.  auth &rarr; gcp             logging
12.  auth &rarr; mysql           authorization CRUD
13.  auth &rarr; redis           profile/sessionToken cache
14.  auth &rarr; sns             send SMS messages
16.  auth &rarr; zendesk         file support tickets

  end note

```

## fxa-content-server

```mermaid
stateDiagram
  RP
  state "fxa-auth-server" as auth: authn/authz
  state "fxa-content-server" as content
  state "fxa-payments-server" as payments
  state "fxa-profile-server" as profile
  state "gcp" as gcp: logging/metrics

  RP-->content : 1
  content-->auth : 2
  content-->payments : 3
  content-->profile : 4
  content-->gcp : 5

  note left of RP
No.  Connection          Reason
1.   RP &rarr; content        authorization
2.   content &rarr; auth      authentication &amp; authorization
3.   content &rarr; payments  redirect to update subscriptions
4.   content &rarr; profile   fetch subscription info
5.   content &rarr; gcp       send logs

  end note
```

## fxa-customs-server

```mermaid
stateDiagram
  state "fxa-auth-server" as auth: authn/authz
  state "fxa-customs-server" as customs: Fraud/abuse prevention
  state "gcp" as gcp: logging/metrics
  state "memcached" as memcached: store blocks, rate limits
  state "iprepd" as iprepd: Should an IP be blocked? Hosted by SecOps
  state "fraud detection pipeline" as fdp: Should an event be blocked? Hosted by SecOps

  auth-->customs : 1
  customs-->gcp : 2
  customs-->iprepd : 3
  customs-->memcached : 4
  fdp-->customs : 5
  gcp-->fdp : 6

  note left of auth
No.  Connection           Reason
1.   auth &rarr; customs       check whether request should be blocked
2.   customs &rarr; gcp        send logs
3.   customs &rarr; iprepd     check ip address
4.   customs &rarr; memcached  store counts &amp; blocks
5.   fdp &rarr; customs        inform of block
6.   gcp &rarr; fdp            notify of user events
  end note

```

## fxa-email-service

```mermaid
stateDiagram
  state "fxa-auth-server" as auth: authn/authz
  state "fxa-email-service" as email: SMTP gateway
  state "amazon sns" as sns: Amazon hosted email/SMS

  auth-->email
  email-->sns
```

## fxa-payments-server

```mermaid
stateDiagram
  state "fxa-auth-server" as auth: authn/authz
  state "fxa-content-server" as content
  state "fxa-payments-server" as payments
  state "fxa-profile-server" as profile
  state "gcp" as gcp: logging/metrics

  content-->payments : 1
  payments-->auth : 2
  payments-->profile : 3
  payments-->stripe : 4
  payments-->gcp : 5
  payments-->RP : 6

  note left of content
No.  Connection           Reason
1.   content &rarr; payments   redirect
2.   payments &rarr; auth      update subscriptions
3.   payments &rarr; profile   get user profile
4.   payments &rarr; stripe    get payment widget
5.   payments &rarr; gcp       send logs &amp; metrics
6.   payments &rarr; RP        redirect after subscription update

  end note
```

## fxa-profile-server

```mermaid
stateDiagram
  state "fxa-auth-server" as auth: authn/authz
  state "fxa-content-server" as content
  state "fxa-payments-server" as payments
  state "fxa-profile-server" as profile
  state "mysql" as mysql: auth, oauth, profile CRUD
  state "gcp" as gcp: logging/metrics
  state "fxa-support-panel" as support_panel: Allow support agents to access user info
  state "S3" as s3: Profile photo storage

  content-->profile : 1
  payments-->profile : 2
  auth-->profile : 3
  profile-->auth : 4
  support_panel-->profile : 5
  profile-->gcp : 6
  profile-->mysql : 7
  profile-->s3 : 8

  note left of gcp
No.  Connection               Reason
1.   content &rarr; profile        get user profile
2.   payments &rarr; profile       get user profile
3.   auth &rarr; profile           notify of user events
4.   profile &rarr; auth           get canonical profile info
5.   support_panel &rarr; profile  get  user profile
6.   profile &rarr; gcp            logging/metrics
7.   profile &rarr; mysql          profile CRUD
8.   profile &rarr; s3             store profile photos
  end note
```

## fxa-support-panel
```mermaid
stateDiagram
  state "fxa-auth-server" as auth: authn/authz
  state "fxa-content-server" as content
  state "fxa-profile-server" as profile
  state "fxa-support-panel" as support_panel: Allow support agents to access user info
  state "Support agent" as support_agent: Fix user problems
  state "Zendesk" as zendesk: Hosted support management

  User-->content : 1
  content-->auth : 2
  auth-->zendesk : 3
  support_agent-->support_panel : 4
  support_agent-->zendesk : 5
  support_panel-->auth : 6
  support_panel-->profile : 7

  note left of zendesk
No.  Connection                      Reason
1.   User &rarr; content                  file support ticket
2.   content &rarr; auth                  forward support ticket
3.   auth &rarr; zendesk                  forward support ticket
4.   support_agent &rarr; support_panel   check user status
5.   support_agent &rarr; zendesk         get support ticket
6.   support_panel &rarr; auth            get user info
7.   support_panel &rarr; profile         get user info

  end note
```

# A few additional diagrams

There are a few more private diagrams maintained by the operations group about
how we have our cloud services set up.  If you're an employee, you can see
them here:

* [Firefox Accounts Auth Server Logical Diagram][fxa_auth_diagram]
* [Firefox Accounts Content Server Logical Diagram][fxa_content_diagram]
* [Firefox Accounts Profile Server Logical Diagram][fxa_profile_diagram]


[fxa_auth_diagram]: https://mana.mozilla.org/wiki/display/SVCOPS/FxA+Auth+Server+Logical+Diagram
[fxa_content_diagram]: https://mana.mozilla.org/wiki/display/SVCOPS/FxA+Content+Server+Logical+Diagram
[fxa_profile_diagram]: https://mana.mozilla.org/wiki/display/SVCOPS/FxA+Profile+Server+Logical+Diagram
