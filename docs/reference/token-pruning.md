---
title: Token Pruning
---

# Prune Tokens Script

The token pruning script is responsible cleaning or 'pruning' stale tokens in our system. The script itself goes through the following stages:


1. Locates accounts with more than N sessions. (Where N is the maximum number of allowed sessions.)
2. Targets the accounts with the most sessions first and begins deleting these sessions.
3. Targets all tokens older than N number of days (Where N is the max number of days.)
4. Delete these tokens excluding any session token associated with a device.
5. Targets all codes older than N number of days (Where N is the max number of days.)
6. Deletes these codes.


_(Steps 3-6 are the legacy process described at the start of [this](/ecosystem-platform/explanation/session-tokens) document.)_


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
