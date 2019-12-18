# Overview of FxA Client - Rust Component

The FxA Client rust component, is a key ingredient for Firefox Account relying parties. At a high level, the FxA component is responsible for enabling users to login to their account and manage their account.  From a technical standpoint, the user should login to a Mozilla service, so that host party can attain authenticatication keys to decrypt the user data.

## What does the component do?

At the beginning of the user journey users are often asked to login to their Firefox Account when trying to access other Mozilla products. For example, if a user would like to use Lockwise on iOS, at the start they are prompted to sign in to their Firefox Account. The host application, such as Lockwise, requests the FxA rust component to start a login flow. The component returns to Lockwise a URL that it should present to the users. The URL asks users to fill out their login information, which is sent back from Lockwise to the rust component to complete the login flow. The user gets authenticated by completing the login flow. Once it has confirmed that the information is correct it authorizes the user to sign in by sending back tokens to the relying party. The tokens, will give the host application access to the user profile.

The image below is a more visual illustration how FxA works with other applications. The complete diagram can be found on this [Miro board](https://miro.com/app/board/o9J_kwmB_No=/).

In summary, prior to providing FxA relying parties with encryption keys, which are responsible for encrypting and decrypting users account data, the component is responsible for:

1.  Get Authentication from the user

2.  Get Authorization

Once the user has been authenticated and authorized, the tokens are sent to the relying party in order to gain access to the user information. Depending on what the application requests, and which token it requires, it can receive different information.

For example, Monitor requests tokens to access user profiles, which has no encrypted data. This information is stored on the FxA server side, and contains the following information:

* Primary email 
* Unique ID
* Verified email 
* Display Name 
* Avatar URL.

Meanwhile, Lockwise may request encryption keys to be able to decrypt sync data. This sync data is stored on the Sync server side. The encryption key is able to access the "Oldsync" scope which contains the following information:

* Sync Engines the user has enabled 
* Information stored in each of the sync engines 
* Send Tab.

## Why should I use the FxA component?

Implementing the FxA client rust component across devices and products will ensure that there is stability with the accounts functionality within the product. It also increases stability because the rust component is easier to debug. Implementing the feature will ensure technical parity with platforms that already have the component, enabling all platforms to add new features and capabilities in similar timeframes.

Beyond the technical advantages of implementing the FxA client, platforms and products that implement it will have the option to enable user features such as; Send Tab and Sync. The list below can help summarize the product advantages of integrating the FxA client rust component.

## What features are supported?

* Device Messaging, for example:
    * Push Notifications 
    * Send Tab
* Choose What to Sync 
* Authentication Flow opportunities, for example:   
    * QR device pairing 
    * Account sharing and sharing authentication states for frictionless migration between applications.    
* Device management, for example:
    * Adding devices 
    * Removing devices

## Success stories

Several platforms and products have already implemented the FxA rust component to be able to introduce new functionality within the product.

### FxA X VR

The Virtual Reality team has implemented the FxA rust component to be able to allow users to login to their FxA account on the virtual reality headset. The motivation to implement an FxA account for the virtual reality was to be able to use the Send Tab functionality. This would help users avoid typing long URLs on the virtual reality device.

### FxA X Fenix

Fenix has implemented the FxA rust component in their product as well. The FxA client rust component provides the app. With two functionalities.

1.  Users are able to sign into their Fenix Firefox Account using QR codes. The users can scan a QR code with the mobile device and automatically be signed in to their account on Fenix. This removes the need for users to have to type long passwords. 

2.  Having the FxA client code enables users who are transitioning from Fennec to Fenix to easily sign in to their FxA account on Fenix. The users will not require to type their passwords because Fenix will recognize that they were already signed in on Fennec.