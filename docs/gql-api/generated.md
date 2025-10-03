<!-- START graphql-markdown -->

# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Subscription](#subscription)
  * [Objects](#objects)
    * [Account](#account)
    * [AccountResetPayload](#accountresetpayload)
    * [AccountStatusPayload](#accountstatuspayload)
    * [AttachedClient](#attachedclient)
    * [Avatar](#avatar)
    * [BackupCodes](#backupcodes)
    * [BasicPayload](#basicpayload)
    * [ChangeRecoveryCodesPayload](#changerecoverycodespayload)
    * [ClientInfo](#clientinfo)
    * [ConsumeRecoveryCodePayload](#consumerecoverycodepayload)
    * [CreateTotpPayload](#createtotppayload)
    * [CredentialStatusPayload](#credentialstatuspayload)
    * [Email](#email)
    * [EmailBounceStatusPayload](#emailbouncestatuspayload)
    * [FinishedSetupAccountPayload](#finishedsetupaccountpayload)
    * [LegalDoc](#legaldoc)
    * [LinkedAccount](#linkedaccount)
    * [Location](#location)
    * [MfaTestGetPayload](#mfatestgetpayload)
    * [PasswordChangeFinishPayload](#passwordchangefinishpayload)
    * [PasswordChangeStartPayload](#passwordchangestartpayload)
    * [PasswordForgotCodeStatusPayload](#passwordforgotcodestatuspayload)
    * [PasswordForgotSendCodePayload](#passwordforgotsendcodepayload)
    * [PasswordForgotVerifyCodePayload](#passwordforgotverifycodepayload)
    * [RecoveryKey](#recoverykey)
    * [RecoveryKeyBundlePayload](#recoverykeybundlepayload)
    * [RecoveryPhone](#recoveryphone)
    * [SecurityEvent](#securityevent)
    * [Session](#session)
    * [SessionReauthedAccountPayload](#sessionreauthedaccountpayload)
    * [SessionStatus](#sessionstatus)
    * [SignedInAccountPayload](#signedinaccountpayload)
    * [SignedUpAccountPayload](#signedupaccountpayload)
    * [SubscriptionProductInfo](#subscriptionproductinfo)
    * [Totp](#totp)
    * [UpdateDisplayNamePayload](#updatedisplaynamepayload)
    * [VerifyTotpPayload](#verifytotppayload)
    * [WrappedKeysPayload](#wrappedkeyspayload)
  * [Inputs](#inputs)
    * [AccountResetInput](#accountresetinput)
    * [AccountResetInputOptions](#accountresetinputoptions)
    * [AccountResetPasswordInputV2](#accountresetpasswordinputv2)
    * [AccountStatusInput](#accountstatusinput)
    * [AttachedClientDisconnectInput](#attachedclientdisconnectinput)
    * [BasicMutationInput](#basicmutationinput)
    * [ChangeRecoveryCodesInput](#changerecoverycodesinput)
    * [ConsumeRecoveryCodeInput](#consumerecoverycodeinput)
    * [CreateTotpInput](#createtotpinput)
    * [DeleteAvatarInput](#deleteavatarinput)
    * [DeleteRecoveryKeyInput](#deleterecoverykeyinput)
    * [DeleteTotpInput](#deletetotpinput)
    * [DestroySessionInput](#destroysessioninput)
    * [EmailInput](#emailinput)
    * [FinishSetupInput](#finishsetupinput)
    * [FinishSetupPasswordV2](#finishsetuppasswordv2)
    * [LegalInput](#legalinput)
    * [MetricsContext](#metricscontext)
    * [MetricsOptInput](#metricsoptinput)
    * [MfaTestInput](#mfatestinput)
    * [PasswordChangeFinishInput](#passwordchangefinishinput)
    * [PasswordChangeStartInput](#passwordchangestartinput)
    * [PasswordForgotCodeStatusInput](#passwordforgotcodestatusinput)
    * [PasswordForgotSendCodeInput](#passwordforgotsendcodeinput)
    * [PasswordForgotVerifyCodeInput](#passwordforgotverifycodeinput)
    * [RecoveryKeyBundleInput](#recoverykeybundleinput)
    * [RejectUnblockCodeInput](#rejectunblockcodeinput)
    * [SendSessionVerificationInput](#sendsessionverificationinput)
    * [SessionReauthInput](#sessionreauthinput)
    * [SessionReauthOptionsInput](#sessionreauthoptionsinput)
    * [SessionVerifyCodeInput](#sessionverifycodeinput)
    * [SessionVerifyCodeOptionsInput](#sessionverifycodeoptionsinput)
    * [SignInInput](#signininput)
    * [SignInOptionsInput](#signinoptionsinput)
    * [SignUpInput](#signupinput)
    * [SignUpInputPasswordV2](#signupinputpasswordv2)
    * [SignUpOptionsInput](#signupoptionsinput)
    * [UpdateDisplayNameInput](#updatedisplaynameinput)
    * [VerifyEmailCodeInput](#verifyemailcodeinput)
    * [VerifyEmailInput](#verifyemailinput)
    * [VerifySessionInput](#verifysessioninput)
    * [VerifyTotpInput](#verifytotpinput)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [Float](#float)
    * [ID](#id)
    * [String](#string)

</details>

## Query
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="query.account">account</strong></td>
<td valign="top"><a href="#account">Account</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="query.emailbouncestatus">emailBounceStatus</strong></td>
<td valign="top"><a href="#emailbouncestatuspayload">EmailBounceStatusPayload</a>!</td>
<td>

Check if bounces exist for an account, using email address.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="query.accountstatus">accountStatus</strong></td>
<td valign="top"><a href="#accountstatuspayload">AccountStatusPayload</a>!</td>
<td>

Check the status of an account using session token or uid. This query is equivalent to the GET /account/status endpoint in auth-server.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#accountstatusinput">AccountStatusInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="query.getrecoverykeybundle">getRecoveryKeyBundle</strong></td>
<td valign="top"><a href="#recoverykeybundlepayload">RecoveryKeyBundlePayload</a>!</td>
<td>

Retrieves a user recovery key bundle from its recovery key id. The bundle contains an encrypted copy for the sync key.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#recoverykeybundleinput">RecoveryKeyBundleInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="query.clientinfo">clientInfo</strong></td>
<td valign="top"><a href="#clientinfo">ClientInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="query.getlegaldoc">getLegalDoc</strong></td>
<td valign="top"><a href="#legaldoc">LegalDoc</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#legalinput">LegalInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="query.session">session</strong></td>
<td valign="top"><a href="#session">Session</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="query.isvalidtoken">isValidToken</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sessionToken</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="query.sessionstatus">sessionStatus</strong></td>
<td valign="top"><a href="#sessionstatus">SessionStatus</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="query.productinfo">productInfo</strong></td>
<td valign="top"><a href="#subscriptionproductinfo">SubscriptionProductInfo</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Mutation
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="mutation.createtotp">createTotp</strong></td>
<td valign="top"><a href="#createtotppayload">CreateTotpPayload</a>!</td>
<td>

Create a new randomly generated TOTP token for a user if they do not currently have one.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createtotpinput">CreateTotpInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.verifytotp">verifyTotp</strong></td>
<td valign="top"><a href="#verifytotppayload">VerifyTotpPayload</a>!</td>
<td>

Verifies the current session if the passed TOTP code is valid.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#verifytotpinput">VerifyTotpInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.deletetotp">deleteTotp</strong></td>
<td valign="top"><a href="#basicpayload">BasicPayload</a>!</td>
<td>

Deletes the current TOTP token for the user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#deletetotpinput">DeleteTotpInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.deleterecoverykey">deleteRecoveryKey</strong></td>
<td valign="top"><a href="#basicpayload">BasicPayload</a>!</td>
<td>

Deletes the current recovery key for the user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#deleterecoverykeyinput">DeleteRecoveryKeyInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.changerecoverycodes">changeRecoveryCodes</strong></td>
<td valign="top"><a href="#changerecoverycodespayload">ChangeRecoveryCodesPayload</a>!</td>
<td>

Return new backup authentication codes while removing old ones.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#changerecoverycodesinput">ChangeRecoveryCodesInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.updatedisplayname">updateDisplayName</strong></td>
<td valign="top"><a href="#updatedisplaynamepayload">UpdateDisplayNamePayload</a>!</td>
<td>

Update the display name.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#updatedisplaynameinput">UpdateDisplayNameInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.deleteavatar">deleteAvatar</strong></td>
<td valign="top"><a href="#basicpayload">BasicPayload</a>!</td>
<td>

Delete the avatar.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#deleteavatarinput">DeleteAvatarInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.createsecondaryemail">createSecondaryEmail</strong></td>
<td valign="top"><a href="#basicpayload">BasicPayload</a>!</td>
<td>

Create a secondary email for the signed in account.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#emailinput">EmailInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.resendsecondaryemailcode">resendSecondaryEmailCode</strong></td>
<td valign="top"><a href="#basicpayload">BasicPayload</a>!</td>
<td>

Reset the verification code to a secondary email.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#emailinput">EmailInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.verifysecondaryemail">verifySecondaryEmail</strong></td>
<td valign="top"><a href="#basicpayload">BasicPayload</a>!</td>
<td>

Verify the email address with a code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#verifyemailinput">VerifyEmailInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.deletesecondaryemail">deleteSecondaryEmail</strong></td>
<td valign="top"><a href="#basicpayload">BasicPayload</a>!</td>
<td>

Remove the secondary email for the signed in account.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#emailinput">EmailInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.updateprimaryemail">updatePrimaryEmail</strong></td>
<td valign="top"><a href="#basicpayload">BasicPayload</a>!</td>
<td>

Change users primary email address, this email address must belong to the user and be verified.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#emailinput">EmailInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.attachedclientdisconnect">attachedClientDisconnect</strong></td>
<td valign="top"><a href="#basicpayload">BasicPayload</a>!</td>
<td>

Destroy all tokens held by a connected client, disconnecting it from the user's account.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#attachedclientdisconnectinput">AttachedClientDisconnectInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.sendsessionverificationcode">sendSessionVerificationCode</strong></td>
<td valign="top"><a href="#basicpayload">BasicPayload</a>!</td>
<td>

Send a session verification email.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#sendsessionverificationinput">SendSessionVerificationInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.verifysession">verifySession</strong></td>
<td valign="top"><a href="#basicpayload">BasicPayload</a>!</td>
<td>

Verify the session via an email code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#verifysessioninput">VerifySessionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.metricsopt">metricsOpt</strong></td>
<td valign="top"><a href="#basicpayload">BasicPayload</a>!</td>
<td>

Set the metrics opt in or out state, and notify RPs of the change

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#metricsoptinput">MetricsOptInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.passwordforgotsendcode">passwordForgotSendCode</strong></td>
<td valign="top"><a href="#passwordforgotsendcodepayload">PasswordForgotSendCodePayload</a>!</td>
<td>

Send a password reset email.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#passwordforgotsendcodeinput">PasswordForgotSendCodeInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.passwordforgotverifycode">passwordForgotVerifyCode</strong></td>
<td valign="top"><a href="#passwordforgotverifycodepayload">PasswordForgotVerifyCodePayload</a>!</td>
<td>

Verify password forgot token, returns account reset token

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#passwordforgotverifycodeinput">PasswordForgotVerifyCodeInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.passwordforgotcodestatus">passwordForgotCodeStatus</strong></td>
<td valign="top"><a href="#passwordforgotcodestatuspayload">PasswordForgotCodeStatusPayload</a>!</td>
<td>

Verify password forgot token, returns account reset token

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#passwordforgotcodestatusinput">PasswordForgotCodeStatusInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.accountreset">accountReset</strong></td>
<td valign="top"><a href="#accountresetpayload">AccountResetPayload</a>!</td>
<td>

Resets an account

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#accountresetinput">AccountResetInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.signup">signUp</strong></td>
<td valign="top"><a href="#signedupaccountpayload">SignedUpAccountPayload</a>!</td>
<td>

Call auth-server to sign up an account

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#signupinput">SignUpInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.finishsetup">finishSetup</strong></td>
<td valign="top"><a href="#finishedsetupaccountpayload">FinishedSetupAccountPayload</a>!</td>
<td>

Call auth-server to finish signing up a "stub" account

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#finishsetupinput">FinishSetupInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.signin">signIn</strong></td>
<td valign="top"><a href="#signedinaccountpayload">SignedInAccountPayload</a>!</td>
<td>

Call auth-server to sign in an account

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#signininput">SignInInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.rejectunblockcode">rejectUnblockCode</strong></td>
<td valign="top"><a href="#basicpayload">BasicPayload</a>!</td>
<td>

Used to reject and report unblock codes that were not requested by the user.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#rejectunblockcodeinput">RejectUnblockCodeInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.emailverifycode">emailVerifyCode</strong></td>
<td valign="top"><a href="#basicpayload">BasicPayload</a>!</td>
<td>

Used to verify a users primary email address.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#verifyemailcodeinput">VerifyEmailCodeInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.credentialstatus">credentialStatus</strong></td>
<td valign="top"><a href="#credentialstatuspayload">CredentialStatusPayload</a>!</td>
<td>

Check the status of an account using session token or uid. This query is equivalent to the GET /account/credentials/status endpoint in auth-server.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.passwordchangestart">passwordChangeStart</strong></td>
<td valign="top"><a href="#passwordchangestartpayload">PasswordChangeStartPayload</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#passwordchangestartinput">PasswordChangeStartInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.passwordchangefinish">passwordChangeFinish</strong></td>
<td valign="top"><a href="#passwordchangefinishpayload">PasswordChangeFinishPayload</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#passwordchangefinishinput">PasswordChangeFinishInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.wrappedaccountkeys">wrappedAccountKeys</strong></td>
<td valign="top"><a href="#wrappedkeyspayload">WrappedKeysPayload</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.mfatest">mfaTest</strong></td>
<td valign="top"><a href="#mfatestgetpayload">MfaTestGetPayload</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#mfatestinput">MfaTestInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.destroysession">destroySession</strong></td>
<td valign="top"><a href="#basicpayload">BasicPayload</a>!</td>
<td>

Logs out the current session

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#destroysessioninput">DestroySessionInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.reauthsession">reauthSession</strong></td>
<td valign="top"><a href="#sessionreauthedaccountpayload">SessionReauthedAccountPayload</a>!</td>
<td>

Re-authenticate an existing session token.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#sessionreauthinput">SessionReauthInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.resendverifycode">resendVerifyCode</strong></td>
<td valign="top"><a href="#basicpayload">BasicPayload</a>!</td>
<td>

Resend a verify code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#basicmutationinput">BasicMutationInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.verifycode">verifyCode</strong></td>
<td valign="top"><a href="#basicpayload">BasicPayload</a>!</td>
<td>

Verify a OTP code.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#sessionverifycodeinput">SessionVerifyCodeInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.consumerecoverycode">consumeRecoveryCode</strong></td>
<td valign="top"><a href="#consumerecoverycodepayload">ConsumeRecoveryCodePayload</a>!</td>
<td>

Verify session with a 2FA backup authentication (recovery) code

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#consumerecoverycodeinput">ConsumeRecoveryCodeInput</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Subscription
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="subscription.created">created</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="subscription.currentperiodend">currentPeriodEnd</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="subscription.currentperiodstart">currentPeriodStart</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="subscription.cancelatperiodend">cancelAtPeriodEnd</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="subscription.endat">endAt</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="subscription.latestinvoice">latestInvoice</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="subscription.planid">planId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="subscription.productname">productName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="subscription.productid">productId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="subscription.status">status</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="subscription.subscriptionid">subscriptionId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Objects

### Account

The current authenticated user's Firefox Account record.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="account.uid">uid</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

Firefox Account User ID.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="account.accountcreated">accountCreated</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

Timestamp when the account was created.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="account.passwordcreated">passwordCreated</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

Timestamp the password was created or last changed.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="account.displayname">displayName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Display name the user has set.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="account.avatar">avatar</strong></td>
<td valign="top"><a href="#avatar">Avatar</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="account.locale">locale</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

User locale.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="account.subscriptions">subscriptions</strong></td>
<td valign="top">[<a href="#subscription">Subscription</a>!]!</td>
<td>

Active subscriptions for the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="account.totp">totp</strong></td>
<td valign="top"><a href="#totp">Totp</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="account.backupcodes">backupCodes</strong></td>
<td valign="top"><a href="#backupcodes">BackupCodes</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="account.recoverykey">recoveryKey</strong></td>
<td valign="top"><a href="#recoverykey">RecoveryKey</a>!</td>
<td>

Whether the user has had an account recovery key issued.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="account.metricsenabled">metricsEnabled</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether metrics are enabled and may be reported

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="account.emails">emails</strong></td>
<td valign="top">[<a href="#email">Email</a>!]!</td>
<td>

Email addresses for the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="account.attachedclients">attachedClients</strong></td>
<td valign="top">[<a href="#attachedclient">AttachedClient</a>!]!</td>
<td>

Client sessions attached to the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="account.linkedaccounts">linkedAccounts</strong></td>
<td valign="top">[<a href="#linkedaccount">LinkedAccount</a>!]!</td>
<td>

Linked accounts

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="account.securityevents">securityEvents</strong></td>
<td valign="top">[<a href="#securityevent">SecurityEvent</a>!]!</td>
<td>

Security events

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="account.recoveryphone">recoveryPhone</strong></td>
<td valign="top"><a href="#recoveryphone">RecoveryPhone</a>!</td>
<td>

Users recovery phone details

</td>
</tr>
</tbody>
</table>

### AccountResetPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="accountresetpayload.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="accountresetpayload.uid">uid</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="accountresetpayload.sessiontoken">sessionToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="accountresetpayload.verified">verified</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="accountresetpayload.authat">authAt</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="accountresetpayload.keyfetchtoken">keyFetchToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="accountresetpayload.unwrapbkey">unwrapBKey</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### AccountStatusPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="accountstatuspayload.exists">exists</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether or not the account exists

</td>
</tr>
</tbody>
</table>

### AttachedClient

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="attachedclient.clientid">clientId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclient.sessiontokenid">sessionTokenId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclient.refreshtokenid">refreshTokenId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclient.deviceid">deviceId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclient.devicetype">deviceType</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclient.iscurrentsession">isCurrentSession</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclient.name">name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclient.createdtime">createdTime</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclient.createdtimeformatted">createdTimeFormatted</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclient.lastaccesstime">lastAccessTime</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclient.lastaccesstimeformatted">lastAccessTimeFormatted</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclient.approximatelastaccesstime">approximateLastAccessTime</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclient.approximatelastaccesstimeformatted">approximateLastAccessTimeFormatted</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclient.scope">scope</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclient.location">location</strong></td>
<td valign="top"><a href="#location">Location</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclient.useragent">userAgent</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclient.os">os</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### Avatar

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="avatar.url">url</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

url for the user's avatar.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="avatar.id">id</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

ID for the user's avatar.

</td>
</tr>
</tbody>
</table>

### BackupCodes

Two-factor authentication backup codes.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="backupcodes.hasbackupcodes">hasBackupCodes</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether backup codes exists for the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="backupcodes.count">count</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The number of remaining backup codes the user has available.

</td>
</tr>
</tbody>
</table>

### BasicPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="basicpayload.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
</tbody>
</table>

### ChangeRecoveryCodesPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="changerecoverycodespayload.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="changerecoverycodespayload.recoverycodes">recoveryCodes</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### ClientInfo

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="clientinfo.clientid">clientId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Unique identifier

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="clientinfo.imageuri">imageUri</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

URI pointing at logo for client

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="clientinfo.servicename">serviceName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Human readable display name for client.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="clientinfo.redirecturi">redirectUri</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Location to redirect after auth

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="clientinfo.trusted">trusted</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether or not client is known and trusted.

</td>
</tr>
</tbody>
</table>

### ConsumeRecoveryCodePayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="consumerecoverycodepayload.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="consumerecoverycodepayload.remaining">remaining</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td>

The number of backup authentication (recovery) codes remaining for 2FA after consuming a code was successful

</td>
</tr>
</tbody>
</table>

### CreateTotpPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="createtotppayload.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="createtotppayload.qrcodeurl">qrCodeUrl</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="createtotppayload.secret">secret</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CredentialStatusPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="credentialstatuspayload.upgradeneeded">upgradeNeeded</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Indicates the credentials need to be upgraded to a later version. Note, this could also signal that the current version is fine, but the upgrade needs to be run again for some reason.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="credentialstatuspayload.currentversion">currentVersion</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The current version of the credentials.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="credentialstatuspayload.clientsalt">clientSalt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The current salt value used by the client. This was added in v2.

</td>
</tr>
</tbody>
</table>

### Email

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="email.email">email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="email.isprimary">isPrimary</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="email.verified">verified</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### EmailBounceStatusPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="emailbouncestatuspayload.hashardbounce">hasHardBounce</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether or not there is a hard bounce recorded for the provided email

</td>
</tr>
</tbody>
</table>

### FinishedSetupAccountPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="finishedsetupaccountpayload.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="finishedsetupaccountpayload.uid">uid</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="finishedsetupaccountpayload.sessiontoken">sessionToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="finishedsetupaccountpayload.verified">verified</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### LegalDoc

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="legaldoc.markdown">markdown</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Document in markdown format

</td>
</tr>
</tbody>
</table>

### LinkedAccount

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="linkedaccount.providerid">providerId</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="linkedaccount.enabled">enabled</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="linkedaccount.authat">authAt</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Location

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="location.city">city</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="location.country">country</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="location.state">state</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="location.statecode">stateCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### MfaTestGetPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="mfatestgetpayload.status">status</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### PasswordChangeFinishPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangefinishpayload.uid">uid</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangefinishpayload.sessiontoken">sessionToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangefinishpayload.verified">verified</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangefinishpayload.authat">authAt</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangefinishpayload.keyfetchtoken">keyFetchToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangefinishpayload.keyfetchtoken2">keyFetchToken2</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### PasswordChangeStartPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangestartpayload.keyfetchtoken">keyFetchToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangestartpayload.passwordchangetoken">passwordChangeToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangestartpayload.verified">verified</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### PasswordForgotCodeStatusPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotcodestatuspayload.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotcodestatuspayload.tries">tries</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotcodestatuspayload.ttl">ttl</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### PasswordForgotSendCodePayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotsendcodepayload.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotsendcodepayload.passwordforgottoken">passwordForgotToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### PasswordForgotVerifyCodePayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotverifycodepayload.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotverifycodepayload.accountresettoken">accountResetToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### RecoveryKey

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="recoverykey.exists">exists</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether recovery key exists for user

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="recoverykey.estimatedsyncdevicecount">estimatedSyncDeviceCount</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

The number of estimated sync devices a user might have.

</td>
</tr>
</tbody>
</table>

### RecoveryKeyBundlePayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="recoverykeybundlepayload.recoverydata">recoveryData</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### RecoveryPhone

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="recoveryphone.exists">exists</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether recovery phone number exists

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="recoveryphone.phonenumber">phoneNumber</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The registered recovery phone number. If the user does not have a verified session, this field will return the last 4 digits of the phone number with a mask on the rest.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="recoveryphone.nationalformat">nationalFormat</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The recovery phone number in Twilio's national_format format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="recoveryphone.available">available</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Returns true if the user is eligible to set up a recovery phone.

</td>
</tr>
</tbody>
</table>

### SecurityEvent

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="securityevent.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="securityevent.createdat">createdAt</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="securityevent.verified">verified</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="securityevent.ipaddr">ipAddr</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### Session

Session (token) info

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="session.verified">verified</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether the current session is verified

</td>
</tr>
</tbody>
</table>

### SessionReauthedAccountPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthedaccountpayload.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthedaccountpayload.uid">uid</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthedaccountpayload.verified">verified</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthedaccountpayload.authat">authAt</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthedaccountpayload.metricsenabled">metricsEnabled</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthedaccountpayload.keyfetchtoken">keyFetchToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthedaccountpayload.verificationmethod">verificationMethod</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthedaccountpayload.verificationreason">verificationReason</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### SessionStatus

Session status

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="sessionstatus.uid">uid</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

uid of the account

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionstatus.state">state</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Whether the current session is verified

</td>
</tr>
</tbody>
</table>

### SignedInAccountPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="signedinaccountpayload.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signedinaccountpayload.uid">uid</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signedinaccountpayload.verified">verified</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signedinaccountpayload.authat">authAt</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signedinaccountpayload.metricsenabled">metricsEnabled</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signedinaccountpayload.keyfetchtoken">keyFetchToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signedinaccountpayload.verificationmethod">verificationMethod</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signedinaccountpayload.verificationreason">verificationReason</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signedinaccountpayload.sessiontoken">sessionToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### SignedUpAccountPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="signedupaccountpayload.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signedupaccountpayload.uid">uid</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signedupaccountpayload.sessiontoken">sessionToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signedupaccountpayload.keyfetchtoken">keyFetchToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signedupaccountpayload.authat">authAt</strong></td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signedupaccountpayload.verificationmethod">verificationMethod</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### SubscriptionProductInfo

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="subscriptionproductinfo.subscriptionproductid">subscriptionProductId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Unique identifier for subscription product

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="subscriptionproductinfo.subscriptionproductname">subscriptionProductName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Human readable name for subscription product

</td>
</tr>
</tbody>
</table>

### Totp

Two-factor authentication configuration (TOTP).

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="totp.exists">exists</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether a TOTP token exists for the user.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="totp.verified">verified</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

Whether the current session was verified with the TOTP token.

</td>
</tr>
</tbody>
</table>

### UpdateDisplayNamePayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="updatedisplaynamepayload.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="updatedisplaynamepayload.displayname">displayName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Updated display name. Null if an error occurred.

</td>
</tr>
</tbody>
</table>

### VerifyTotpPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="verifytotppayload.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="verifytotppayload.success">success</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="verifytotppayload.recoverycodes">recoveryCodes</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### WrappedKeysPayload

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="wrappedkeyspayload.ka">kA</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="wrappedkeyspayload.wrapkb">wrapKB</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Inputs

### AccountResetInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="accountresetinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="accountresetinput.accountresettoken">accountResetToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="accountresetinput.newpasswordauthpw">newPasswordAuthPW</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="accountresetinput.newpasswordv2">newPasswordV2</strong></td>
<td valign="top"><a href="#accountresetpasswordinputv2">AccountResetPasswordInputV2</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="accountresetinput.options">options</strong></td>
<td valign="top"><a href="#accountresetinputoptions">AccountResetInputOptions</a></td>
<td></td>
</tr>
</tbody>
</table>

### AccountResetInputOptions

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="accountresetinputoptions.keys">keys</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="accountresetinputoptions.sessiontoken">sessionToken</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
</tbody>
</table>

### AccountResetPasswordInputV2

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="accountresetpasswordinputv2.wrapkb">wrapKb</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="accountresetpasswordinputv2.authpwversion2">authPWVersion2</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="accountresetpasswordinputv2.wrapkbversion2">wrapKbVersion2</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="accountresetpasswordinputv2.clientsalt">clientSalt</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### AccountStatusInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="accountstatusinput.uid">uid</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The uid to apply this operation to.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="accountstatusinput.token">token</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The token id to apply this operation to.

</td>
</tr>
</tbody>
</table>

### AttachedClientDisconnectInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="attachedclientdisconnectinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclientdisconnectinput.clientid">clientId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The OAuth client_id of the connected application.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclientdisconnectinput.sessiontokenid">sessionTokenId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The id of the sessionToken held by that client, if any.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclientdisconnectinput.refreshtokenid">refreshTokenId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The id of the OAuth refreshToken held by that client, if any.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="attachedclientdisconnectinput.deviceid">deviceId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The id of the client's device record, if it has registered one.

</td>
</tr>
</tbody>
</table>

### BasicMutationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="basicmutationinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
</tbody>
</table>

### ChangeRecoveryCodesInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="changerecoverycodesinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
</tbody>
</table>

### ConsumeRecoveryCodeInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="consumerecoverycodeinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="consumerecoverycodeinput.code">code</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The user-submitted 2FA backup authentication (recovery) code

</td>
</tr>
</tbody>
</table>

### CreateTotpInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="createtotpinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="createtotpinput.metricscontext">metricsContext</strong></td>
<td valign="top"><a href="#metricscontext">MetricsContext</a></td>
<td></td>
</tr>
</tbody>
</table>

### DeleteAvatarInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="deleteavatarinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="deleteavatarinput.id">id</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The avatar id to delete.

</td>
</tr>
</tbody>
</table>

### DeleteRecoveryKeyInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="deleterecoverykeyinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
</tbody>
</table>

### DeleteTotpInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="deletetotpinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
</tbody>
</table>

### DestroySessionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="destroysessioninput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
</tbody>
</table>

### EmailInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="emailinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="emailinput.email">email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The email address to apply this operation to.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="emailinput.jwt">jwt</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A jwt to provide access to auth server endpoints.

</td>
</tr>
</tbody>
</table>

### FinishSetupInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="finishsetupinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="finishsetupinput.token">token</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="finishsetupinput.authpw">authPW</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="finishsetupinput.passwordv2">passwordV2</strong></td>
<td valign="top"><a href="#finishsetuppasswordv2">FinishSetupPasswordV2</a></td>
<td></td>
</tr>
</tbody>
</table>

### FinishSetupPasswordV2

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="finishsetuppasswordv2.wrapkb">wrapKb</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="finishsetuppasswordv2.authpwversion2">authPWVersion2</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="finishsetuppasswordv2.wrapkbversion2">wrapKbVersion2</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="finishsetuppasswordv2.clientsalt">clientSalt</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### LegalInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="legalinput.locale">locale</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The requested l10n locale.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="legalinput.file">file</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The requested legal file.

</td>
</tr>
</tbody>
</table>

### MetricsContext

Metrics context.

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="metricscontext.deviceid">deviceId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The id of the client's device record, if it has registered one.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="metricscontext.entrypoint">entrypoint</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="metricscontext.entrypointexperiment">entrypointExperiment</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="metricscontext.entrypointvariation">entrypointVariation</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="metricscontext.flowid">flowId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="metricscontext.flowbegintime">flowBeginTime</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="metricscontext.productid">productId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="metricscontext.planid">planId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="metricscontext.clientid">clientId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="metricscontext.utmcampaign">utmCampaign</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="metricscontext.utmcontent">utmContent</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="metricscontext.utmmedium">utmMedium</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="metricscontext.utmsource">utmSource</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="metricscontext.utmterm">utmTerm</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### MetricsOptInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="metricsoptinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="metricsoptinput.state">state</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The desired state: "in" or "out"

</td>
</tr>
</tbody>
</table>

### MfaTestInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="mfatestinput.jwt">jwt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A jwt tor provide access to auth server endpoints.

</td>
</tr>
</tbody>
</table>

### PasswordChangeFinishInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangefinishinput.passwordchangetoken">passwordChangeToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangefinishinput.authpw">authPW</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangefinishinput.wrapkb">wrapKb</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangefinishinput.authpwversion2">authPWVersion2</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangefinishinput.wrapkbversion2">wrapKbVersion2</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangefinishinput.clientsalt">clientSalt</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangefinishinput.sessiontoken">sessionToken</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangefinishinput.keys">keys</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### PasswordChangeStartInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangestartinput.email">email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangestartinput.oldauthpw">oldAuthPW</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordchangestartinput.sessiontoken">sessionToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### PasswordForgotCodeStatusInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotcodestatusinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotcodestatusinput.token">token</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Password forgot token

</td>
</tr>
</tbody>
</table>

### PasswordForgotSendCodeInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotsendcodeinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotsendcodeinput.email">email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Users email

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotsendcodeinput.metricscontext">metricsContext</strong></td>
<td valign="top"><a href="#metricscontext">MetricsContext</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotsendcodeinput.resume">resume</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotsendcodeinput.service">service</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotsendcodeinput.lang">lang</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotsendcodeinput.redirectto">redirectTo</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### PasswordForgotVerifyCodeInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotverifycodeinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotverifycodeinput.token">token</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Password forgot token

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="passwordforgotverifycodeinput.code">code</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Code

</td>
</tr>
</tbody>
</table>

### RecoveryKeyBundleInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="recoverykeybundleinput.accountresettoken">accountResetToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Account reset token

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="recoverykeybundleinput.recoverykeyid">recoveryKeyId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Recovery key to check

</td>
</tr>
</tbody>
</table>

### RejectUnblockCodeInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="rejectunblockcodeinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="rejectunblockcodeinput.uid">uid</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="rejectunblockcodeinput.unblockcode">unblockCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### SendSessionVerificationInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="sendsessionverificationinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
</tbody>
</table>

### SessionReauthInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthinput.authpw">authPW</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthinput.email">email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthinput.authpwversion">authPWVersion</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthinput.options">options</strong></td>
<td valign="top"><a href="#sessionreauthoptionsinput">SessionReauthOptionsInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthinput.sessiontoken">sessionToken</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### SessionReauthOptionsInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthoptionsinput.keys">keys</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthoptionsinput.service">service</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthoptionsinput.reason">reason</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthoptionsinput.redirectto">redirectTo</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthoptionsinput.resume">resume</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthoptionsinput.verificationmethod">verificationMethod</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthoptionsinput.unblockcode">unblockCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthoptionsinput.originalloginemail">originalLoginEmail</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthoptionsinput.skipcaseerror">skipCaseError</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionreauthoptionsinput.metricscontext">metricsContext</strong></td>
<td valign="top"><a href="#metricscontext">MetricsContext</a></td>
<td></td>
</tr>
</tbody>
</table>

### SessionVerifyCodeInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="sessionverifycodeinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionverifycodeinput.code">code</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The code to check

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionverifycodeinput.options">options</strong></td>
<td valign="top"><a href="#sessionverifycodeoptionsinput">SessionVerifyCodeOptionsInput</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### SessionVerifyCodeOptionsInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="sessionverifycodeoptionsinput.service">service</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionverifycodeoptionsinput.scopes">scopes</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sessionverifycodeoptionsinput.newsletters">newsletters</strong></td>
<td valign="top">[<a href="#string">String</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### SignInInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="signininput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signininput.authpw">authPW</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signininput.email">email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signininput.authpwversion">authPWVersion</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signininput.options">options</strong></td>
<td valign="top"><a href="#signinoptionsinput">SignInOptionsInput</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### SignInOptionsInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="signinoptionsinput.keys">keys</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signinoptionsinput.service">service</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signinoptionsinput.reason">reason</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signinoptionsinput.redirectto">redirectTo</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signinoptionsinput.resume">resume</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signinoptionsinput.verificationmethod">verificationMethod</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signinoptionsinput.unblockcode">unblockCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signinoptionsinput.originalloginemail">originalLoginEmail</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signinoptionsinput.skipcaseerror">skipCaseError</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signinoptionsinput.metricscontext">metricsContext</strong></td>
<td valign="top"><a href="#metricscontext">MetricsContext</a></td>
<td></td>
</tr>
</tbody>
</table>

### SignUpInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="signupinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signupinput.authpw">authPW</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signupinput.email">email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signupinput.passwordv2">passwordV2</strong></td>
<td valign="top"><a href="#signupinputpasswordv2">SignUpInputPasswordV2</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signupinput.options">options</strong></td>
<td valign="top"><a href="#signupoptionsinput">SignUpOptionsInput</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### SignUpInputPasswordV2

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="signupinputpasswordv2.wrapkb">wrapKb</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signupinputpasswordv2.authpwversion2">authPWVersion2</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signupinputpasswordv2.wrapkbversion2">wrapKbVersion2</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signupinputpasswordv2.clientsalt">clientSalt</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### SignUpOptionsInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="signupoptionsinput.keys">keys</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signupoptionsinput.service">service</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signupoptionsinput.redirectto">redirectTo</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signupoptionsinput.resume">resume</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signupoptionsinput.verificationmethod">verificationMethod</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signupoptionsinput.preverified">preVerified</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="signupoptionsinput.metricscontext">metricsContext</strong></td>
<td valign="top"><a href="#metricscontext">MetricsContext</a></td>
<td></td>
</tr>
</tbody>
</table>

### UpdateDisplayNameInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="updatedisplaynameinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="updatedisplaynameinput.displayname">displayName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Updated display name.

</td>
</tr>
</tbody>
</table>

### VerifyEmailCodeInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="verifyemailcodeinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="verifyemailcodeinput.code">code</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The code to check

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="verifyemailcodeinput.uid">uid</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Account uid

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="verifyemailcodeinput.service">service</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### VerifyEmailInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="verifyemailinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="verifyemailinput.email">email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The email to verify

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="verifyemailinput.code">code</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The code to check

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="verifyemailinput.jwt">jwt</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A jwt to provide access to auth server endpoints.

</td>
</tr>
</tbody>
</table>

### VerifySessionInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="verifysessioninput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="verifysessioninput.code">code</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The code to check

</td>
</tr>
</tbody>
</table>

### VerifyTotpInput

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="verifytotpinput.clientmutationid">clientMutationId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A unique identifier for the client performing the mutation.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="verifytotpinput.code">code</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The TOTP code to check

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="verifytotpinput.service">service</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="verifytotpinput.metricscontext">metricsContext</strong></td>
<td valign="top"><a href="#metricscontext">MetricsContext</a></td>
<td></td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### Float

The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.


<!-- END graphql-markdown -->
