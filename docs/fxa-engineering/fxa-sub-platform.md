---
id: fxa-sub-platform
title: Firefox Accounts Subscription Platform
sidebar_label: Subscription Platform
---

## Getting Started

### Pre-Development

To begin working on the subscription platform in the FxA codebase, you will need access to a Stripe account for private and public API developer keys.

If you're a Mozilla employee, you can request a private key from the FxA Subscription Platform team. Otherwise, you can create your own Stripe account to use for testing that is not linked to any bank account information. These keys should be taken from Stripe's test environment.

The `fxa-payments-server` needs the Stripe public key and communicates with the `fxa-auth-server` that requires a Stripe private key. Configuration details can be found below.

### Configuration

You will need to add a `subscriptions.stripeApiKey` field in `fxa/packages/fxa-auth-server/config/dev.json` with the value of your private stripe API key. Ensure the key begins with `pk_test` to guarantee are testing in the correct environment.

Ex:

```
  "subscriptions": {
    "enabled": true,
    "stripeApiKey": "pk_test_####"
    ...
```

If you are testing with your own Stripe account, you will need to update the `stripe.apiKey.default` public key set in `fxa/packages/fxa-payments-server/server/config/index.js` to reflect your own. The payments development server _should_ have a default Mozilla public API key in place already but it doesn't hurt to double check.

#### Stripe Product/Plans

To see the available products in the Stripe dashboard, navigate to Billing > Products and click into one of the products to see information including the product name, product ID, plan name, plan ID, metadata, logs, and events.

If you are using a new Stripe account, you will need to setup a product and its plan. The product should have additional metadata configured as needed.

##### Product Metadata

| Key                     | Value                                                                                                                                                                                           |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| productSet              | An arbitrary string used to group products in a set of upgrades & downgrades.                                                                                                                   |
| productOrder            | A number used for sorting products in a set.                                                                                                                                                    |
| webIconURL              | Image URL for product icon in web content.                                                                                                                                                      |
| capabilities            | Comma-separated list of capabilities enabled by this product for all Relying Party's.                                                                                                           |
| capabilities:{clientID} | Comma-separated list of capabilities enabled by this product for the Relying Party identified by {clientID}.                                                                                    |
| upgradeCTA              | HTML content string describing available upgrades from this plan. By convention, should include a link back to a product lead page. That lead page links back to FxA's plan subscription pages. |
| downloadURL             | The download URL for the product.                                                                                                                                                               |
| emailIconURL            | Image URL for product icon in email content.                                                                                                                                                    |

##### Plan Metadata

| Key              | Value                                                                |
| ---------------- | -------------------------------------------------------------------- |
| previous_plan_id | The value of the previous plan that the user had been subscribed to. |
| plan_change_date | Unix timestamp of the date the plan was changed.                     |

## Navigating the Payment Flow

Once your API keys are set, restart the affected servers (`auth` or `payments`) if needed.

Reference the [workflow](https://github.com/mozilla/fxa#workflow) section of the FxA docs to sign up for and verify an account. You should now be able to access the payment flow at:

```
http://127.0.0.1:3030/subscriptions/products/{productId}?plan={planId}
```

The`productId` should match the ID from a product taken from the Stripe dashboard. The `plan` parameter is optional. Enter any name, valid expiration date, CVC number, and any card number from the [Stripe test cards docs](https://stripe.com/docs/testing#cards) to successfully create a test subscription.

Navigate back to `http://127.0.0.1:3031/subscriptions` to manage your subscriptions.

## Understanding Subscription Status

Stripe defines the [valid states a subscription status can be in their API docs](https://stripe.com/docs/api/subscriptions/object#subscription_object-status).
Since `incomplete` and `incomplete_expired` are subscriptions that have never been paid, FxA ignores them except for the following condition: if a user with a subscription in an `incomplete` state successfully enters valid payment information, the `incomplete` subscription will be paid and activated.

FxA's Stripe account is configured to not allow subscriptions to become `unpaid` and will cancel the subscription instead.

The last 4 states are `active`, `trialing`, `past_due`, and `cancelled`. The first three of these are considered active for the purposes of allowing the user access to the capabilities provided by the subscription, while `cancelled` subscriptions grant none.

## Interactions with Stripe

### Payments Server

The payments server is an isolated service that serves all subscription related
pages that utilize the Stripe Javascript SDK. It's isolated from the primary FxA
domain to comply with constraints on 3rd party Javascript on pages handling FxA
authentication.

When a subscription page is loaded, the React application served by the payment
server:

1. Loads the Stripe Javascript SDK (for tokenizing credit cards)
2. Makes direct OAuth authenticated API calls to [account](https://github.com/mozilla/fxa/blob/master/packages/fxa-auth-server/docs/api.md#account)/[subscription endpoints][]
   on the Auth Server as needed

The payments server handles the payment flow as well as serving pages for managing
a user's subscription that are linked from the Settings page.

### Auth Server

FxA's Auth Server makes Stripe API calls for authenticated FxA users via its [subscription
endpoints][]. Stripe updates are sent back to the Auth Server via Stripe webhooks when a
users subscription has been created/updated/deleted.

[subscription endpoints]: https://github.com/mozilla/fxa/blob/master/packages/fxa-auth-server/docs/api.md#subscriptions