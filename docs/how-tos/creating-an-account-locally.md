---
title: Creating an Account Locally
---

Once you've got FxA running locally you'll probably want to create an account that you can use for development and testing purposes. This process can be done almost exactly like you would in production:

1. Visit the [root page](http://localhost:3030/), which should ask you to enter your email. Enter the email you want to use for the account.

  If you're taken to `/signin` you can just click "Use a different account" to return to the email field.
1. Fill out the next form with your password and age, then click "Create account".
1. You'll be taken to a page asking you to enter a verification code. From your terminal run `yarn pm2 logs inbox`, which will have the most recent verification code. Copy this code into the form field and click "Verify".

  ![Terminal preview of inbox service](../assets/logs-inbox-signin.png)

  If you'd rather receive the actual verification code email instead of using the terminal, check out how to [use MailDev](./maildev-emails) for local emails.
1. That's it! You'll be taken to `/settings` with the message "Account verified successfully" appearing along the top.
