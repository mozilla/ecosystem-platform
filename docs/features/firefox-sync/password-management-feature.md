---
id: password-management-feature
title: Password Management
sidebar_label: Password Management and Syncing
---

# Password Storage and Syncing

The [Firefox Lockwise](https://lockwise.firefox.com/) product provides users access to their usernames and passwords stored on their Firefox account connected devices and applications so that they can easily sign in to their websites and apps. The Firefox mobile applications and Firefox desktop implementations allow users to save, edit, delete and sync encrypted username and password form data and HTTP authentication credentials.

**Feature owner**: Personal Data Protection team

## Desktop Password Management

### Features
- Locally encrypted storage of username and password information
- Create, Update and Delete (CRUD) operations for login data
- Syncing of logins for devices and apps connected via Firefox Accounts
- Import functionality from existing login storage such as Firefox (desktop or mobile) and Lockwise
- Search
- De-duping
- Parsing and sanitizing origin data
- Insecure warnings
- Form Autofill

## Fennec Password Management
Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko.

## Mobile Password Management powered by the **Logins Component**
- **Component Owner**: Firefox Sync team.
- **Component Source**: [mozilla/application-services](https://github.com/mozilla/application-services/tree/master/components/logins) repository

The **logins component** first reached production users with the implementation in the Lockwise mobile application.   A client application can depend on the logins component to store, modify and optionally sync credentials for the purpose of password management or simplifying web authentication through form autofill.

### Why should I use the logins component?
Building password management support via the Login component means that a team can have a core shared codebase in Rust, wrapped in native language bindings for supported platforms. Adding password syncing to a browser or browser-like application can be accomplished without having to worry about all the implementation details involved with syncing, storing and encrypting username and password data.

### What features are currently supported?
- Locally encrypted storage of username and password information
- Create, Update and Delete (CRUD) operations for login data
- Syncing of logins for devices and apps connected via Firefox Accounts
- Import functionality from existing login storage such as Firefox (desktop or mobile) and Lockwise
- Data migration functionality from Fennec to Firefox Preview storage

### Where can I learn more?
The [logins component readme](https://github.com/mozilla/application-services/blob/master/components/logins/README.md) details how to use, test, measure and monitor it.

### Success stories
Maybe?

#### Lockwise for iOS and Android
Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko.
