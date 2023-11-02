---
title:  Rotating Secrets
---

Last updated: `Oct 6th, 2023`

It is unfortunate yet inevitable that secrets such as API keys get leaked upon occasion. In most cases, this is an urgent matter that must be addressed immediately, but it depends on what information was leaked, whether it's still valid, and what damage can be done with that information.

In the steps below, we'll walk through an example for how to resolve a possible leak of a Stripe API key.

## Find or be informed about the (potential) leak

There are many ways this can happen:
* An engineer stumbles upon it while working on a patch
* The Mozilla information security team finds it as part of a routine scan
* It is flagged as part of Mozilla's bug bounty program
* GitHub notifies us with a [secret scanning alert](https://docs.github.com/en/code-security/secret-scanning)
* And more...

In the case of our example, we received a secret scanning alert from GitHub in the `fxa` repo.

## Confirm the leak and its severity

Sometimes, sensitive looking data isn't actually valid or compromising. Try to answer the following questions, answered below with our Stripe API key example:

:::note
If the secret is expired or otherwise invalid, the urgency goes away, and you can skip these questions to the next step.
:::

* **Is this a valid secret?**
  * Yes. It is listed in the [stage (`SUB_PLAT_STAGE`) dashboard](https://dashboard.stripe.com/test/apikeys) as the unrestricted [test mode](https://stripe.com/docs/test-mode) secret key, and it is active. This is a real leak.
* **Is it in use?**
  * In this case, the [Stripe API Keys page in the dashboard](https://dashboard.stripe.com/test/apikeys) has helpful information including when a given valid key was last used. Per the dashboard, our example key was last used very recently, so it's definitely still in use!
* **What do we use it for?**
  * Since this is an unrestricted Stripe API key (test mode), it is used to make read/write API requests to any Stripe API in test mode in our staging environment. Without searching for this key value explicitly in various places (see [Places to check where a secret might be used](#places-to-check-where-a-secret-might-be-used)), one can only guess at this point that it's likely used by our stage apps to make Stripe API calls, and maybe by our CI end-to-end tests to do the same.
* **What _can_ it be used for?**
  * In terms of severity, the fact that this key is unrestricted is very bad, but the fact that it's only valid for our staging environment (and in Stripe test mode), which uses fake data and money, greatly reduces the risk and urgency of this leak. 
    * By contrast, if this same key was for production (live mode), an attacker could [make charges or issue refunds](https://stripe.com/docs/keys#safe-keys) among other things.
  * **Can someone with this secret access sensitive user data?**
    * No. All data is test data.
  * **Can someone with this secret modify critical user or application state?**
    * They could not modify real users' state. They could modify our stage application state and/or cause us to get rate limited by Stripe, where subsequent API requests are denied.
* **Where was it exposed?**
  * The GitHub secret scanning alert indicates where it found the secret referenced. It scans the code but also other forms of user-generated content, like PR comments and issues. It's worth noting that depending on how old the alert is, a reference may have since been removed or moved.
  * In this example of the leaked test Stripe API key, this was leaked in a user comment within a GitHub issue.


## Fix the leak

The most important thing to do -- particularly if the secret is valid -- is to remove the exposed secret from wherever it was found.

In this example, the secret was leaked in a GitHub issue comment. The comment can be edited to redact the reference, but it will still be retained in the comment's revision history. An [admin for the repo](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization) can remove the revision which introduced the leak to completely remove any public reference to it.

## Rotate the secret (if valid)

Now that we've stopped the bleeding, it's time to rotate the secret if it was determined to be valid and in use. 

The steps here are to:
1. Create a new secret,
2. Replace the old secret where it's used with the new secret, and
3. Invalidate the old secret

:::warning
Order matters! Don't invalidate the old key unless/until a new key has been created, the old key's value has been replaced everywhere it's used and any affected parties (such as other engineers) have been notified.

Depending on the urgency and deployment process, this overlap period where both keys are valid could be on the order of seconds, hours or even days. Discuss this with the team if you're uncertain.
:::

For our example, [Stripe provides some helpful docs](https://stripe.com/docs/keys#rolling-keys) on how to create a new secret and invalidate the old secret. The hard part here is replacing the old secret where it is used with the new secret, as we store secrets in a number of different places for different purposes.

### Places to check where a secret might be used
* Application config environment variables
  * These secrets are managed by SRE, so you will need to [securely send them the new secret](https://mozilla-hub.atlassian.net/wiki/spaces/SECENGOPS/pages/378273870/How+to+share+a+secret+with+coworkers), so they can update it and redeploy the affected application(s).
  * If you're unsure what environment variable(s) represent this secret in what app(s), you can send them both the old secret and the new secret, so they can do a find-and-replace.
* [CircleCI environment variables](https://circleci.com/docs/env-vars/#private-keys-and-secrets)
* GitHub [Actions](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions), [Codespaces](https://docs.github.com/en/codespaces/managing-your-codespaces/managing-secrets-for-your-codespaces) and/or [Dependabot](https://docs.github.com/en/code-security/dependabot/working-with-dependabot) environment variables

:::warning
This is not an exhaustive list. Check with other engineers and/or SRE if you are unsure of all of the locations where a secret may be kept.
:::

In our example case, after scanning all three above locations, application config was the sole place where the leaked Stripe API key was used.

## Clean up the mess (if applicable)

If the leak was for a valid secret in use in production, it may have been exploited. Based on the risk profile for the secret identified above (see "What _can_ it be used for?" when [confirming the leak](#confirm-the-leak-and-its-severity)), review monitoring tools like Grafana, Sentry and application logs in BigQuery for any indications of exploitation.

The work involved here will vary depending on many factors. It could involve correcting/updating database records, placing new limits or access restrictions on certain resources and/or notifying affected end users.

Work with the team to determine what all needs to be done, whether or not the leak rises to the level of an [incident](https://mozilla-hub.atlassian.net/wiki/spaces/MIR/overview), and follow those procedures accordingly.

Take a moment to document the leak and the fix in the form of a ticket if one was not yet created, and update the ticket with what was done before closing it out. File any follow-up tickets as necessary and ensure they are triaged in a timely manner.

## Mitigating leaks and risks

* Never post or commit sensitive data to public repos or other public or semi-public forums.
* Use secure methods to share secrets with team members. See Mozilla's [recommended guidance for sharing secrets](https://mozilla-hub.atlassian.net/wiki/spaces/SECENGOPS/pages/378273870/How+to+share+a+secret+with+coworkers).
* Restrict API keys to only the privileges needed for the task at hand and nothing more. For example, you can create [restricted keys](https://stripe.com/docs/keys#limit-access) for Stripe that only permit read/write access to specific APIs.
* For public GitHub repositories, regularly review GitHub's [secret scanning alerts](https://docs.github.com/en/code-security/secret-scanning) and resolve them in a timely manner.

### Additional reading

* [SRE docs on secrets management](https://mozilla-hub.atlassian.net/wiki/spaces/SRE/pages/27924750/Secrets+Management)