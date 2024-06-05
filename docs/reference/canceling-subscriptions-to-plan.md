---
title: Canceling Subscriptions to Plan
---

Last updated: June 2024

In order to cancel a plan with active subscriptions, SubPlat engineers will need to collaborate with the SRE and Support teams.

After creating test data, request SRE to run the `cancel-subscriptions-to-plan` script in `fxa-auth-server` and for the stdout, stderr, and csv outputs via Wormhole. At this time, the script cancels active subscriptions and refunds Stripe subscriptions only; the refund portion does not work for PayPal subscriptions and Support will need to manually refund them.

The command to run the script is as follows:

```
node -r esbuild-register scripts/cancel-subscriptions-to-plan.ts -r 10 -p <price_id> --refund
```

- `<price_id>`: the Stripe Price ID of the plan with active subscriptions
- `-r`: rate limit

:::note
Stripe's rate limit is 10 requests per second on Stage, and 100 requests per second on Prod (but we should use less to allow for other prod traffic)
:::

SRE can add the `--dry-run` flag to see what will be generated. They may also need to add `esbuild-register` in the pod before running the script. During the previous sunset process, we attempted to run the command below; however, it failed due to new decorators.

```
npx tsx scripts/cancel-subscriptions-to-plan.ts -r 10 -p price_1NctsnKb9q6OnNsLRl5HMcCm --refund
```
