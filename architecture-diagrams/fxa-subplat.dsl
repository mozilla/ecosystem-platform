!constant ORGANZATION_NAME "Mozilla"
!constant ACCOUNT_NAME "Firefox Accounts"
!constant PAYMENTS_NAME "Subscription Platform"

workspace "${ACCOUNT_NAME} / ${PAYMENTS_NAME}" "Services Engineering" {
    model {
        accountCustomer = person "${ACCOUNT_NAME} / ${PAYMENTS_NAME} Customer" "A customer that uses ${ACCOUNT_NAME} to login and/or purchase a subscription to a ${ORGANZATION_NAME} product" "Customer"
        supportStaff = person "Customer Support Staff" "Support staff that helps customers of ${ORGANZATION_NAME} products" "Employee"
        productManager = person "Product Manager" "Product manager for ${ORGANZATION_NAME} group using ${ACCOUNT_NAME}" "Employee"
        accountDeveloper = person "Developer" "Developer working on ${ACCOUNT_NAME} / ${PAYMENTS_NAME}" "Employee"

        acoustic = softwareSystem "Acoustic" "Email marketing platform"
        zendesk = softwareSystem "Zendesk" "Customer support platform"

        paymentProviders = group "Payment Providers" {
            appStore = softwareSystem "App Store" "In-App Purchases on iOS" "PaymentProviders"
            googlePlay = softwareSystem "Google Play" "In-App Purchases on Android" "PaymentProviders"
            stripe = softwareSystem "Stripe" "Handles coupons, subscription invoicing, and credit card payment processing" "PaymentProviders"
            paypal = softwareSystem "PayPal" "Holds billing agreements with PayPal customers" "PaymentProviders"
        }

        enterprise "${ORGANZATION_NAME}" {

            accountPaymentSystem = softwareSystem "${ACCOUNT_NAME} / ${PAYMENTS_NAME}" {
                tags "accounts"
                description "Handles account creation, authentication, and payment processing"

                firefoxBrowser = container "Firefox Browser" "Customers Firefox Browser" "Firefox" "Web Browser"
                firefoxMobile = container "Firefox Mobile" "Customers Firefox Mobile" "Firefox" "Mobile App"

                contentServerApplication = container "Content Server Single-Page Application" "Provides OAuth login flows, password change/resets, and email code verification" "JavaScript and Backbone" "Web Browser"
                contentServerServer = container "Content Server Web Application" "Delivers the content and settings single page application and receives metrics data from it" "Node and Express"

                settingsApplication = container "Settings Single-Page Application" "Provices account settings and profile management" "TypeScript and React" "Web Browser"
               
                paymentsApplication = container "Payments Single-Page Application" "Provides checkout/upgrade payment flows and subscription mangement" "TypeScript and React" "Web Browser"
                paymentsServer = container "Payments Web Application" "Delivers the payments single page application and receives metrics data from it" "Node and Express"

                adminPanelApplication = container "Admin Panel Single-Page Application" "Provides admin panel for customer data, email block clearing, and oauth client information" "TypeScript and React" "Web Browser"
                adminPanelServer = container "Admin Panel Web Application" "Delivers the admin panel single page application and provides GraphQL API for it" "Node and NestJS"

                authServerApplication = container "Auth Server API Application" "Provides OAuth/OpenID endpoints, device/session/key management, payments handling, webhook processing, and email sending via a JSON REST API" "Node and Express"
                customsServerApplication = container "Customs Server API Application" "Provides rate limiting and IP reputation checking via a JSON REST API" "Node and Express"
                profileServerApplication = container "Profile Server API Application" "Provides profile information and management via a JSON REST API" "Node and Express"
                profileServerImageBucket = container "Profile Server Image Bucket" "Stores profile images" "AWS S3" "Amazon Web Services - Simple Storage Service Bucket"

                eventBrokerApplication = container "Event Broker Application" "Processes customer events from configured event source and forwards them to registered relying parties" "Node and NestJS"
                graphqlApplication = container "GraphQL API Application" "Provides customer settings and account management via GraphQL API" "Node and NestJS"

                authServerDatabase = container "Auth Server Database" "Stores account, device, session, and key data" "MySQL" "Database"
                profileServerDatabase = container "Profile Server Database" "Stores customer profile data (display name, photo reference)" "MySQL" "Database"
                oauthDatabase = container "OAuth Database" "Stores OAuth client data and tokens" "MySQL" "Database"
                pushboxDatabase = container "Pushbox Database" "Stores device commands for customers" "MySQL" "Database"

                authServerRedis = container "Auth Server Cache" "Stores oauth access and session token info, and email reminders" "Redis" "Cache"
                profileServerRedis = container "Profile Server Cache" "Stores aggregated profile data" "Redis" "Cache"
                customsServerCache = container "Customs Server Cache" "Stores rate limiting and IP reputation data" "Memcached" "Cache"

                eventBrokerLoginDatabase = container "Event Broker Database" "Stores oauth relying parties a customer has logged into" "Firestore" "Database"
                stripeDatabase = container "Stripe Database" "Stores customer, subscription, and invoice data from Stripe" "Firestore" "Database"

                authBouncesApplication = container "Auth Bounces Application" "Processes bounces from email providor (SES) and updates customer email status" "Node and Express"
                browserIdVerifierApplication = container "Browser ID Verifier Application" "Verifies BrowserID assertions" "Node and Express"
            }

            iprepd = softwareSystem "iprepd" "IP reputation service"
            pushSystem = softwareSystem "Push Notification System" "Delivers push notiifcations to browsers and mobile devices"
            itMarketingDataIntegration = softwareSystem "IT Marketing Data Integration" "Processes account and payment data for marketing"
            supportedProduct = softwareSystem "Supported Product" "A product that ${ACCOUNT_NAME} customers can purchase and/or login to"
        }


        # relationships between people and software systems
        accountCustomer -> accountPaymentSystem "Views account/payment settings, makes purchases, requests support, and logs in with"
        accountCustomer -> supportedProduct "Uses and purchases subscriptions to use"

        supportStaff -> zendesk "Supports customers with"

        accountPaymentSystem -> itMarketingDataIntegration "Sends account and payment data to"
        accountPaymentSystem -> pushSystem "Sends account alerts to devices with" "webpush"
        accountPaymentSystem -> supportedProduct "Provides login credentials, profile data, and entitlements to"
        accountPaymentSystem -> accountCustomer "Sends transactional emails to" "" "email"

        pushSystem -> accountCustomer "Pushes notifications to" "webpush,apns,gcm"
        itMarketingDataIntegration -> acoustic "Sends processed email and account data to"
        acoustic -> accountCustomer "Sends marketing emails to" "" "email"

        accountPaymentSystem -> stripe "Uses"
        accountPaymentSystem -> appStore "Tracks iOS payments with"
        accountPaymentSystem -> googlePlay "Tracks Android payments with"
        accountPaymentSystem -> zendesk "Files support requests with" "REST API"
        stripe -> paypal "Processes invoices for PayPal customers with" "${PAYMENTS_NAME} Integration"

        # relationships to/from containers
        accountCustomer -> contentServerServer "Visits login or settings page using" "HTTPS"
        accountCustomer -> paymentsServer "Visits checkout or payment management page using" "HTTPS"
        accountCustomer -> contentServerApplication "Changes/resets password, verifies email, and logs in with"
        contentServerServer -> contentServerApplication "Delivers to the customer's web browser"
        contentServerServer -> settingsApplication "Delivers to the customer's web browser"
        accountCustomer -> settingsApplication "Views and updates account security settings, profile, and payment management link"
        paymentsServer -> paymentsApplication "Delivers to the customer's web browser"
        accountCustomer -> paymentsApplication "Purchases subscriptions/upgrades and manages subscriptions with"

        accountDeveloper -> adminPanelServer "Visits admin panel using" "HTTPS"
        supportStaff -> adminPanelServer "Visits admin panel using" "HTTPS"
        adminPanelServer -> adminPanelApplication "Delivers to the employee's web browser"
        accountDeveloper -> adminPanelApplication "Views and updates customer account settings and OAuth client information"
        supportStaff -> adminPanelApplication "Views and updates customer account settings"
        adminPanelApplication -> adminPanelServer "Uses"
        adminPanelServer -> authServerDatabase "Uses"
        adminPanelServer -> authServerRedis "Uses"
        adminPanelServer -> oauthDatabase "Uses"
        adminPanelServer -> stripeDatabase "Uses"
        adminPanelServer -> stripe "Uses"

        contentServerApplication -> authServerApplication "Uses"
        contentServerApplication -> profileServerApplication "Uses"
        contentServerApplication -> contentServerServer "Uses"
        settingsApplication -> graphqlApplication "Uses"
        settingsApplication -> profileServerApplication "Uses"
        paymentsApplication -> authServerApplication "Uses"

        authServerApplication -> authServerDatabase "Uses"
        authServerApplication -> authServerRedis "Uses"
        authServerApplication -> oauthDatabase "Uses"
        authServerApplication -> stripeDatabase "Uses"
        authServerApplication -> pushboxDatabase "Uses"
        authServerApplication -> customsServerApplication "Uses"
        authServerApplication -> stripe "Uses"
        authServerApplication -> paypal "Integrates Stripe invoicing with"
        authServerApplication -> appStore "Validates iOS receipts and gets notifications with"
        authServerApplication -> googlePlay "Validates Android receipts and gets notifications with"
        authServerApplication -> pushSystem "Sends push notifications to devices with" "webpush"
        authServerApplication -> profileServerApplication "Sends profile cache clear requests to" "SQS"
        authServerApplication -> browserIdVerifierApplication "Verifies BrowserID assertions with"

        authBouncesApplication -> authServerDatabase "Uses"

        graphqlApplication -> authServerApplication "Uses"
        graphqlApplication -> authServerDatabase "Uses"
        graphqlApplication -> authServerRedis "Uses"
        graphqlApplication -> oauthDatabase "Uses"
        graphqlApplication -> stripeDatabase "Uses"

        customsServerApplication -> customsServerCache "Uses"
        customsServerApplication -> iprepd "Uses"

        profileServerApplication -> profileServerRedis "Uses"
        profileServerApplication -> profileServerDatabase "Uses"
        profileServerApplication -> authServerApplication "Uses"
        profileServerApplication -> profileServerImageBucket "Stores and fetches profile images from"

        authServerApplication -> eventBrokerApplication "Sends customer events to" "SQS"
        eventBrokerApplication -> eventBrokerLoginDatabase "Uses"
        eventBrokerApplication -> supportedProduct "Sends customer events to" "webhook"

        supportedProduct -> authServerApplication "Verifies oauth tokens with"
        supportedProduct -> profileServerApplication "Gets profile data from"

        accountCustomer -> firefoxBrowser "Uses"
        accountCustomer -> firefoxMobile "Uses"
        firefoxMobile -> authServerApplication "Uses"
        firefoxBrowser -> authServerApplication "Uses"
        firefoxBrowser -> contentServerServer "Uses"
        pushSystem -> firefoxBrowser "Pushes notifications to" "webpush"
        pushSystem -> firefoxMobile "Pushes notifications to" "apns,gcm"
    }

    views {
        systemlandscape "SystemLandscape" {
            include *
            exclude productManager relationship==pushSystem->accountPaymentSystem relationship==accountPaymentSystem->paypal
        }

        systemlandscape "AccountAuthenticationSystemLandscape" {
            title "[System Landscape] Account Authentication"
            description "Systems and service usage for account authentication"
            include accountCustomer accountPaymentSystem supportedProduct
            exclude relationship.tag==email
        }

        systemlandscape "AccountSystemLandscape" {
            title "[System Landscape] Account Messaging"
            description "Systems and data flow for account customer messaging"
            include accountCustomer accountPaymentSystem pushSystem itMarketingDataIntegration acoustic
            exclude relationship.source==accountCustomer relationship==pushSystem->accountPaymentSystem
        }

        systemlandscape "PaymentSystemLandscape" {
            title "[System Landscape] Subscription Platform"
            description "Systems for subscription handling"
            include accountCustomer accountPaymentSystem paymentProviders supportedProduct supportStaff zendesk
            exclude relationship==accountPaymentSystem->paypal relationship==supportedProduct->accountPaymentSystem
        }

        container accountPaymentSystem "Containers" {
            include *
            exclude relationship==stripe->paypal firefoxBrowser firefoxMobile pushSystem
        }

        dynamic accountPaymentSystem "SendTab" "Summarizes how a customer sends a tab to another device" {
            title "[Dynamic] Send Tab"
            accountCustomer -> firefoxBrowser "Clicks 'Send Tab' button in browser"
            firefoxBrowser -> authServerApplication "Sends tab and target device id to"
            authServerApplication -> pushboxDatabase "Saves tab data to"
            authServerApplication -> pushSystem "Sends new tab notification to target device with"
            pushSystem -> firefoxMobile "Delivers new tab notification to"
            accountCustomer -> firefoxMobile "Clicks 'Open Tab' notification"
            firefoxMobile -> authServerApplication "Requests tab data from"
            authServerApplication -> pushboxDatabase "Retrieves tab data from"
            authServerApplication -> firefoxMobile "Delivers tab data to"
        }

        branding {
            logo "https://mozilla.design/files/2019/06/mozilla-logo-bw-rgb-1024x293.png"
        }

        styles {

            element "Person" {
                color #ffffff
                fontSize 22
                shape Person
            }
            element "Employee" {
                
                background #00458b
            }
            element "Customer" {
                background #6e008b
            }
            element "Bank Staff" {
                background #999999
            }
            element "Software System" {
                background #9B9B9B
                color #ffffff
            }
            element "accounts" {
                background #00458b
                color #ffffff
            }
            element "Existing System" {
                background #999999
                color #ffffff
            }
            element "Container" {
                background #438dd5
                color #ffffff
            }
            element "Enterprise" {
                border Solid
            }
            element "Group:Payment Providers" {
                color #03852E
                border Solid
            }
            element "PaymentProviders" {
                shape RoundedBox
            }
            element "Amazon Web Services - Simple Storage Service Bucket" {
                color #444444
                background #ffffff
            }
            element "Web Browser" {
                shape WebBrowser
            }
            element "Mobile App" {
                shape MobileDeviceLandscape
            }
            element "Cache" {
                shape Cylinder
                background #810000
            }
            element "Database" {
                shape Cylinder
                background #008516
            }
            element "Component" {
                background #85bbf0
                color #000000
            }
            element "Failover" {
                opacity 25
            }
        }

        themes "https://static.structurizr.com/themes/amazon-web-services-2022.04.30/theme.json"
    }
}