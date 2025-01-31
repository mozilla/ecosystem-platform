!const ORGANZATION_NAME "Mozilla"
!const ACCOUNT_NAME "Mozilla Accounts"
!const PAYMENTS_NAME "Subscription Platform"

workspace "${ACCOUNT_NAME} / ${PAYMENTS_NAME}" "Services Engineering" {
    model {
        // People
        accountCustomer = person "${ACCOUNT_NAME} / ${PAYMENTS_NAME} Customer" {
            tags "Customer,Payments"
            description "A customer that uses ${ACCOUNT_NAME} to login and/or purchase a subscription to a ${ORGANZATION_NAME} product"
        }
        accountDeveloper = person "Developer" {
            tags "Employee"
            description "Developer working on ${ACCOUNT_NAME} / ${PAYMENTS_NAME}"
        }
        supportStaff = person "Customer Support Staff" {
            tags "Employee,Payments"
            description "Support staff that helps customers of ${ORGANZATION_NAME} products"
        }
        productManager = person "Product Manager" {
            tags "Employee,Payments"
            description "Product manager for ${ORGANZATION_NAME} group using ${ACCOUNT_NAME}"
        }

        // External Third Party Systems
        acoustic = softwareSystem "Acoustic"{
            tags "EmailMarketing"
            description "📧 Email marketing platform"
        }
        hCMS = softwareSystem "Strapi" {
            tags "Payments3"
            description "CMS storing product and capability configuration"
        }
        zendesk = softwareSystem "Zendesk" {
            tags "Payments"
            description "Customer support platform"
        }

        // External Third Party Payment Providers
        paymentProviders = group "💵 Payment Providers" {
            appStore = softwareSystem "App Store" {
                tags "PaymentProviders,Payments"
                description "In-App Purchases on iOS"
            }
            googlePlay = softwareSystem "Google Play" {
                tags "PaymentProviders,Payments"
                description "In-App Purchases on Android"
            }
            stripe = softwareSystem "Stripe" {
                tags "PaymentProviders,Payments"
                description "Handles billing and payment processing"
            }
            paypal = softwareSystem "PayPal" {
                tags "PaymentProviders,Payments"
                description "Handles PayPal payment processing"
            }
        }

        group "${ORGANZATION_NAME}" {
            itMarketingDataIntegration = softwareSystem "IT Marketing Data Integration" {
                description "Processes account and payment data for marketing"
            }
            pushSystem = softwareSystem "Push Notification System" {
                description "Delivers push notiifcations to browsers and mobile devices"
            }
            supportedProduct = softwareSystem "Supported Product/Service" {
                description "A product/service that ${ACCOUNT_NAME} customers can purchase and/or login to"
            }

            accountPaymentSystem = softwareSystem "${ACCOUNT_NAME} / ${PAYMENTS_NAME}" {
                tags "accounts"
                description "Handles account creation, authentication, and payment processing"

                accountEventsTopic = container "Account Events Topic" {
                    tags "Amazon Web Services - Simple Notification Service Topic"
                    description "Receives account events"
                    technology "Amazon Web Services - Simple Notification Service"
                }
                authBouncesApplication = container "Auth Bounces Application" {
                    description "Processes bounces from email providor (SES) and updates customer email status"
                    technology "Node and Express"
                }
                adminPanelApplication = container "Admin Panel Single-Page Application" {
                    tags "Web Browser"
                    description "Provides admin panel for customer data, email block clearing, and oauth client information"
                    technology "TypeScript and React"
                }
                adminPanelServer = container "Admin Panel Web Application" {
                    description "Delivers the admin panel single page application and provides GraphQL API for it"
                    technology "Node and NestJS"
                }
                authServerApplication = container "Auth Server API Application" {
                    tags "Payments"
                    description "Provides OAuth/OpenID endpoints, device/session/key management, payments handling, webhook processing, and email sending via a JSON REST API"
                    technology "Node and Express"
                }
                authServerDatabase = container "Auth Server Database" {
                    tags "Database,Payments"
                    description "Stores account, device, session, and key data"
                    technology "MySQL"
                }
                authServerRedis = container "Auth Server Cache" {
                    tags "Cache,Payments"
                    description "Stores oauth access/session token info, metric data, and email reminders"
                    technology "Redis"
                }
                browserIdVerifierApplication = container "Browser ID Verifier Application" {
                    description "Verifies BrowserID assertions"
                    technology "Node and Express"
                }
                contentServerApplication = container "Content Server Single-Page Application" {
                    tags "Web Browser"
                    description "Provides OAuth login flows, password change/resets, and email code verification"
                    technology "JavaScript and Backbone"
                }
                contentServerServer = container "Content Server Web Application" {
                    description "Delivers the content and settings single page application and receives metrics data from it"
                    technology "Node and Express"
                }
                customsServerApplication = container "Customs Server API Application" {
                    description "Provides rate limiting and IP reputation checking via a JSON REST API"
                    technology "Node and Express"
                }
                customsServerCache = container "Customs Server Cache" {
                    tags "Cache"
                    description "Stores rate limiting and IP reputation data"
                    technology "Redis"
                }
                eventBrokerApplication = container "Event Broker Application" {
                    description "Processes customer events from configured event source and forwards them to registered relying parties"
                    technology "Node and NestJS"
                }
                eventBrokerQueue = container "Event Broker Queue" {
                    tags "Amazon Web Services - Simple Queue Service Queue"
                    description "Receives user events and forwards them to registered relying parties"
                    technology "Amazon Web Services - Simple Queue Service"
                }
                eventBrokerLoginDatabase = container "Event Broker Database" {
                    tags "Database"
                    description "Stores oauth relying party webhook URLs and oauth relying parties a customer has logged into"
                    technology "Firestore"
                }
                eventBrokerPubSub = container "Event Broker PubSub" {
                    tags "Google Cloud Platform - Cloud PubSub"
                    description "Handles storage and retries of customer events for delivery to Supported Products/Services"
                    technology "Google Cloud PubSub"
                }
                firefoxBrowser = container "Firefox Browser" {
                    tags "Web Browser,Payments"
                    description "Customers Firefox Browser"
                }
                firefoxMobile = container "Firefox Mobile" {
                    tags "Mobile App"
                    description "Customers Firefox Mobile"
                    technology "Firefox"
                }
                graphqlApplication = container "GraphQL API Application" {
                    description "Provides customer settings and account management via GraphQL API"
                    technology "Node and NestJS"
                }
                nextPaymentsApplication = container "Payments SSR / Hydrated Application" {
                    tags "Web Browser,Payments3"
                    description "Provides checkout/upgrade payment flows"
                    technology "TypeScript and NextJS"
                }
                nextPaymentsServer = container "Payments 3 Web Application" {
                    tags "Payments3"
                    description "Renders the payments front-end for check-out and API's for subscription management"
                    technology "Node and Express"
                }
                paymentsApplication = container "Payments Single-Page Application" {
                    tags "Web Browser,Payments"
                    description "Provides checkout/upgrade payment flows and subscription mangement"
                    technology "TypeScript and Create React App"
                }
                paymentsServer = container "Payments Web Application" {
                    tags "Payments"
                    description "Delivers the payments single page application and receives metrics data from it"
                    technology "Node and Express"
                }
                profileServerApplication = container "Profile Server API Application" {
                    description "Provides profile information and management via a JSON REST API"
                    technology "Node and Express"
                }
                profileServerDatabase = container "Profile Server Database" {
                    tags "Database"
                    description "Stores customer profile data (display name, photo reference)"
                    technology "MySQL"
                }
                profileServerImageBucket = container "Profile Server Image Bucket" {
                    tags "Amazon Web Services - Simple Storage Service Bucket"
                    description "Stores profile images"
                    technology "AWS S3"
                }
                profileServerRedis = container "Profile Server Cache" {
                    tags "Cache"
                    description "Stores aggregated profile data"
                    technology "Redis"
                }
                pushboxDatabase = container "Pushbox Database" {
                    tags "Database"
                    description "Stores device commands for customers"
                    technology "MySQL"
                }
                settingsApplication = container "Settings Single-Page Application" {
                    tags "Web Browser"
                    description "Provides account settings and profile management"
                    technology "TypeScript and React"
                }
                stripeDatabase = container "Stripe Database" {
                    tags "Database,Payments"
                    description "Stores customer, subscription, and invoice data from Stripe"
                    technology "Firestore"
                }
                oauthDatabase = container "OAuth Database" {
                    tags "Database"
                    description "Stores OAuth client data and tokens"
                    technology "MySQL"
                }
            }
        }

        # people relationships, person to system
        accountCustomer -> accountPaymentSystem "Views account/payment settings, makes purchases, requests support, and logs in with"
        accountCustomer -> contentServerApplication "Changes/resets password, verifies email, and logs in with"
        accountCustomer -> contentServerServer "Visits login or settings page using" "HTTPS"
        accountCustomer -> firefoxBrowser "Uses"
        accountCustomer -> firefoxMobile "Uses"
        accountCustomer -> nextPaymentsApplication "Purchases subscriptions/upgrades with" "Payments3"
        accountCustomer -> nextPaymentsServer "Visits checkout page using" "HTTPS" "Payments3"
        accountCustomer -> paymentsServer "Visits checkout or payment management page using" "HTTPS" "Payments2"
        accountCustomer -> paymentsServer "Visits payment management page using" "HTTPS" "Payments3"
        accountCustomer -> paymentsApplication "Purchases subscriptions/upgrades and manages subscriptions with" "" "Payments2"
        accountCustomer -> paymentsApplication "Manages subscriptions with" "" "Payments3"
        accountCustomer -> supportedProduct "Uses and purchases subscriptions to use"
        accountCustomer -> settingsApplication "Views and updates account security settings, profile, and payment management link"

        accountDeveloper -> adminPanelApplication "Views and updates customer account settings and OAuth client information"
        accountDeveloper -> adminPanelServer "Visits admin panel using" "HTTPS"

        supportStaff -> adminPanelApplication "Views and updates customer account settings"
        supportStaff -> adminPanelServer "Visits admin panel using" "HTTPS"
        supportStaff -> zendesk "Supports customers with"

        productManager -> stripe "Configures products/pricing/capabilities with" "Dashboard / Metadata" "Payments,Payments2"
        productManager -> stripe "Configures pricing details with" "Dashboard" "Payments3"
        productManager -> hCMS "Configures products, coupons, upgrades, and entitlement logic with" "hCMS" "Payments3"

        # system level relationships
        accountPaymentSystem -> accountCustomer "Sends transactional emails to" "" "email"
        accountPaymentSystem -> itMarketingDataIntegration "Sends account and payment data to"
        accountPaymentSystem -> pushSystem "Sends account alerts to devices with" "webpush"
        accountPaymentSystem -> supportedProduct "Provides login credentials, profile data, and entitlements to"
        accountPaymentSystem -> hCMS "Fetches Payments Configuration from" "GraphQL API" "Payments3"
        accountPaymentSystem -> stripe "Uses"
        accountPaymentSystem -> appStore "Tracks iOS payments with"
        accountPaymentSystem -> googlePlay "Tracks Android payments with"
        accountPaymentSystem -> zendesk "Files support requests with" "REST API"

        acoustic -> accountCustomer "Sends marketing emails to" "" "email"

        itMarketingDataIntegration -> acoustic "Sends processed email and account data to"
        
        stripe -> paypal "Processes invoices for PayPal customers with" "${PAYMENTS_NAME} Integration" "Payments"

        # containers relationships
        accountEventsTopic -> eventBrokerQueue "Sends account events to" "SQS"
        adminPanelApplication -> adminPanelServer "Uses"

        adminPanelServer -> adminPanelApplication "Delivers to the employee's web browser"
        adminPanelServer -> authServerDatabase "Uses"
        adminPanelServer -> authServerRedis "Uses"
        adminPanelServer -> oauthDatabase "Uses"
        adminPanelServer -> stripeDatabase "Uses"
        adminPanelServer -> stripe "Uses"

        authBouncesApplication -> authServerDatabase "Uses"
        
        authServerApplication -> accountEventsTopic "Sends account events to" "SNS"
        authServerApplication -> appStore "Validates iOS receipts and gets notifications with"
        authServerApplication -> authServerDatabase "Uses"
        authServerApplication -> authServerRedis "Uses"
        authServerApplication -> browserIdVerifierApplication "Verifies BrowserID assertions with"
        authServerApplication -> customsServerApplication "Uses"
        authServerApplication -> eventBrokerApplication "Sends customer events to" "SQS"
        authServerApplication -> googlePlay "Validates Android receipts and gets notifications with"
        authServerApplication -> hCMS "Fetches product configuration from" "GraphQL API" "Payments3"
        authServerApplication -> oauthDatabase "Uses"
        authServerApplication -> paypal "Integrates Stripe invoicing with"
        authServerApplication -> profileServerApplication "Sends profile cache clear requests to" "SQS"
        authServerApplication -> pushboxDatabase "Uses"
        authServerApplication -> pushSystem "Sends push notifications to devices with" "webpush"
        authServerApplication -> stripe "Uses"
        authServerApplication -> stripeDatabase "Uses"
        authServerApplication -> zendesk "Files support requests with" "REST API"

        contentServerApplication -> authServerApplication "Uses"
        contentServerApplication -> contentServerServer "Uses"
        customsServerApplication -> customsServerCache "Uses"
        contentServerApplication -> profileServerApplication "Uses"

        contentServerServer -> contentServerApplication "Delivers to the customer's web browser"
        contentServerServer -> settingsApplication "Delivers to the customer's web browser"

        eventBrokerApplication -> eventBrokerLoginDatabase "Uses"
        eventBrokerApplication -> eventBrokerPubSub "Uses"
        eventBrokerApplication -> supportedProduct "Sends customer events to" "webhook"
        eventBrokerQueue -> eventBrokerApplication "Receives customer events from" "SQS"

        firefoxMobile -> authServerApplication "Uses"
        firefoxBrowser -> authServerApplication "Uses"
        firefoxBrowser -> contentServerServer "Uses"

        graphqlApplication -> authServerApplication "Uses"
        graphqlApplication -> authServerDatabase "Uses"
        graphqlApplication -> authServerRedis "Uses"
        graphqlApplication -> oauthDatabase "Uses"

        nextPaymentsServer -> authServerDatabase "Uses"
        nextPaymentsServer -> authServerRedis "Uses"
        nextPaymentsServer -> hCMS "Fetches product configuration from" "GraphQL API" "Payments3"
        nextPaymentsServer -> nextPaymentsApplication "Delivers to the customer's web browser"
        nextPaymentsServer -> paypal "Integrates Stripe invoicing with"
        nextPaymentsServer -> stripe "Uses"

        paymentsApplication -> authServerApplication "Uses"

        paymentsServer -> paymentsApplication "Delivers to the customer's web browser"

        profileServerApplication -> authServerApplication "Uses"
        profileServerApplication -> profileServerDatabase "Uses"
        profileServerApplication -> profileServerImageBucket "Stores and fetches profile images from"
        profileServerApplication -> profileServerRedis "Uses"

        pushSystem -> accountCustomer "Pushes notifications to" "webpush,apns,gcm"
        pushSystem -> firefoxBrowser "Pushes notifications to" "webpush"
        pushSystem -> firefoxMobile "Pushes notifications to" "apns,gcm"

        settingsApplication -> graphqlApplication "Uses"
        settingsApplication -> profileServerApplication "Uses"

        supportedProduct -> authServerApplication "Verifies oauth tokens with"
        supportedProduct -> profileServerApplication "Gets profile data from"
    }

    views {
        systemlandscape "SystemLandscape" {
            include *
            exclude relationship==pushSystem->accountPaymentSystem relationship==accountPaymentSystem->paypal relationship.tag==Payments2
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
            description "Systems for subscription handling 2.5 & 3.0"
            include accountCustomer accountPaymentSystem paymentProviders supportedProduct supportStaff zendesk productManager hCMS
            exclude relationship==accountPaymentSystem->paypal relationship==supportedProduct->accountPaymentSystem relationship.tag==Payments2
        }

        container accountPaymentSystem "Containers" {
            include * productManager
            exclude relationship==stripe->paypal firefoxBrowser firefoxMobile pushSystem relationship.tag==Payments2
        }

        container accountPaymentSystem "ContainersPaymentSystem2_5" {
            title "[Container] Subscription Platform"
            description "Containers for Subscription Platform 2.5"
            include element.tag==Payments
            exclude relationship==stripe->paypal firefoxBrowser firefoxMobile pushSystem element.tag==Payments3 relationship.tag==Payments3
        }

        container accountPaymentSystem "ContainersPaymentSystem3" {
            title "[Container] Subscription Platform 3.0"
            description "Containers for Subscription Platform 3"
            include element.tag==Payments element.tag==Payments3 
            exclude relationship==stripe->paypal firefoxBrowser firefoxMobile pushSystem relationship.tag==Payments2
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

        dynamic accountPaymentSystem "EventBrokerSystem" "Summarizes how an account event propagates to relying parties" {
            title "[Dynamic] Event Broker"
            authServerApplication -> accountEventsTopic "Sends an account event to"
            accountEventsTopic -> eventBrokerQueue "Queue subscriber gets account events sent to"
            eventBrokerQueue -> eventBrokerApplication "Sends the account event to"
            eventBrokerApplication -> eventBrokerLoginDatabase "Stores relying party for each account in"
            eventBrokerLoginDatabase -> eventBrokerApplication "Retrieves relying parties that the account has logged into"
            eventBrokerLoginDatabase -> eventBrokerApplication "Retrieves webhook URL for each relying party"
            eventBrokerApplication -> eventBrokerPubSub "Stores the account event for each relying party in"
            eventBrokerPubSub -> eventBrokerApplication "Attemps to deliver the event to each relying party via"
            eventBrokerApplication -> supportedProduct "Forwards the account event to" "webhook"
        }

        branding {
            logo "https://mozilla.design/files/2019/06/mozilla-logo-bw-rgb-1024x293.png"
        }

        styles {
            element "Payments3" {
                background #DF7823
            }
            
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
            element "Group:${ORGANZATION_NAME}" {
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
            element "Google Cloud Platform - Cloud PubSub" {
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

        themes "https://static.structurizr.com/themes/amazon-web-services-2022.04.30/theme.json" "https://static.structurizr.com/themes/google-cloud-platform-v1.5/theme.json"
    }
}
