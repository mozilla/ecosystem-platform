---
title: Software Architecture Implementation
---

Current as of `April 16, 2024`

## Introduction
### Motivation

The layered software architecture was introduced to the team in August last year, with some literature explaining the concepts. 

The primary motivation behind this document is to help better understand those concepts, by providing some practical examples, a list of do’s and don’ts and an FAQ section with common questions that came up when first implementing the concepts.

### Required Reading

Before continuing in this document, please make sure to read and consume the following resources. (~15min)

* [Ecosystem Platform Docs - Node Style Guide - Software Architecture](https://mozilla.github.io/ecosystem-platform/reference/style-guides/node-style-guide#software-architecture)
* [Martin Fowler - Presentation Domain Data Layering](https://martinfowler.com/bliki/PresentationDomainDataLayering.html)
* [Martin Fowler - Repository](https://martinfowler.com/eaaCatalog/repository.html)

## Examples

### Generic Diagram

![](../../../../static/diagrams/node-style-guide-layers.png)

Where can I find some good examples of a Repository, Client, Manager, Service hierarchy?

### End to end - libs/payments/stripe/*

* Client => StripeClient ([code](https://github.com/mozilla/fxa/blob/main/libs/payments/stripe/src/lib/stripe.client.ts))
* Manager => StripeManager ([code](https://github.com/mozilla/fxa/blob/main/libs/payments/stripe/src/lib/stripe.manager.ts))
* Service => StripeService ([code](https://github.com/mozilla/fxa/blob/main/libs/payments/stripe/src/lib/stripe.service.ts))

### Repository style pattern - libs/payments/cart

* Repository => cart.repository ([code](https://github.com/mozilla/fxa/blob/main/libs/payments/cart/src/lib/cart.repository.ts))
* Manager => CartManager ([code](https://github.com/mozilla/fxa/blob/main/libs/payments/cart/src/lib/cart.manager.ts))
* Service => CartService ([code](https://github.com/mozilla/fxa/blob/main/libs/payments/cart/src/lib/cart.service.ts))

## Do's and Don'ts

### Do's

* Do make use of the layered architecture whenever possible
* Do add your new or refactored implementations into the integrated repo `libs/*` or `apps/*` directories.
* Do create more, and smaller logical modules of work.
* Do make use of dependency injection.
* Do make use of the *Client, *Repository, *Manager, *Service naming convention.

### Don'ts

* Don’t skip a layer. Services should not call Clients directly.
* Don’t go up the layers. I.e. Client’s should not call Managers, etc.

## FAQ section

### General

<details>
  <summary>Q: Where do I put my business logic?</summary>
  <div>
    Managers should be used for business logic.
  </div>
</details>

<details>
  <summary>Q: Will this only work with NestJs?</summary>
  <div>Nope, can be used anywhere. Outside of NestJs, the Injectable decorator will be ignored, and the class can be instantiated as per normal.</div>
</details>

<details>
  <summary>Q: My Client/Manager/Service is getting really big. What should I do?</summary>
  <div>
    <p>Are there logical and realistic places where the module can be broken up into multiple Client/Manager/Services?</p>
    <p>For example say the StripeManager is getting too large, consider breaking it up into StripeSubscriptionManager and StripeManager?</p>
  </div>
</details>

### Client / Repository

<details>
  <summary>Q: The library I’m using provides an SDK, do I still need a client implementation?</summary>
  <div>No, it’s not required. If the SDK already provides the necessary queries, the Manager can call the SDK directly.</div>
</details>

<details>
  <summary>Q: But why does Stripe Client exist?</summary>
  <div>See the Stripe typings ADR. [ADR link](https://github.com/mozilla/fxa/blob/main/docs/adr/0040-stripe-typings.md)</div>
</details>

<details>
  <summary>Q: When should I use a Repository</summary>
  <div>A typical use case will be for database access.</div>
</details>

### Manager

<details>
  <summary>Q: Can my Manager call a Service?</summary>
  <div>No. Dependencies should not go up a layer.</div>
</details>

<details>
  <summary>Q: Can my Manager call other Managers?</summary>
  <div>Yes.</div>
</details>

<details>
  <summary>Q: Should I catch and handle errors in my Manager?</summary>
  <div>Typically, no. Errors should bubble up, so that they can be properly handled by consumers of Managers.</div>
</details>

### Service

<details>
  <summary>Q: Can my service call a Client directly?</summary>
  <div>
    <p>No. A service should only have Managers and other Services as dependencies.</p>
    <p>Even if no additional logic is needed from the client/repository, simply wrap the client/repository call in a manager method. This might feel unnecessary at the time, but it allows for easy expansion in future if necessary.</p>
  </div>
</details>

## Success stories

### Client migration - Contentful to Strapi

Because of layered Software architecture implementation, the transition from Contentful to Strapi is estimated to be relatively painless. Why is that? 
* The Contentful Client will be replaced by a Strapi client
* The ContentfulManager will remain unchanged
* Therefore all consumers of the ContentfulManager will also not require any changes.

