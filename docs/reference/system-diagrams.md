---
title: System Diagrams
---

Current as of `February 1st, 2023`

## FxA / Subscription Platform universe

The software architecture diagrams in FxA and SubPlat use the [c4 model](https://c4model.com) to separate layers and [structurizr](https://structurizr.com/) to render them.

Instructions for working on these can be found in the [architecture README](https://github.com/mozilla/ecosystem-platform/tree/master/architecture-diagrams).

## System Landscapes (Level 1)

### Entire FxA / Subscription Platform

System Landscapes Key:
![](../../static/diagrams/structurizr-1-SystemLandscape-key.png)

![](../../static/diagrams/structurizr-1-SystemLandscape.png)

### Subscription Platform

Subscription Platform Landscapes Key:
![](../../static/diagrams/structurizr-1-PaymentSystemLandscape-key.png)

![](../../static/diagrams/structurizr-1-PaymentSystemLandscape.png)

### Account Authentication Specific

![](../../static/diagrams/structurizr-1-AccountAuthenticationSystemLandscape.png)

### Account Messaging Specific

![](../../static/diagrams/structurizr-1-AccountSystemLandscape.png)

## Container Diagram (Level 2)

### Entire FxA / Subscription Platform

Containers Key:
![](../../static/diagrams/structurizr-1-Containers-key.png)

![](../../static/diagrams/structurizr-1-Containers.png)

### Subscription Platform 2.5

Subscription Platform 2.5 Key:
![](../../static/diagrams/structurizr-1-ContainersPaymentSystem2_5-key.png)

![](../../static/diagrams/structurizr-1-ContainersPaymentSystem2_5.png)

### subscription Platform 3.0

Subscription Platform 3.0 Key:
![](../../static/diagrams/structurizr-1-ContainersPaymentSystem3-key.png)

![](../../static/diagrams/structurizr-1-ContainersPaymentSystem3.png)

### Send Tab

![](../../static/diagrams/structurizr-1-SendTab.png)

# A few additional diagrams

There are a few more private diagrams maintained by the operations group about
how we have our cloud services set up. If you're an employee, you can see
them here:

- [Mozilla accounts Auth Server Logical Diagram][fxa_auth_diagram]
- [Mozilla accounts Content Server Logical Diagram][fxa_content_diagram]
- [Mozilla accounts Profile Server Logical Diagram][fxa_profile_diagram]

[fxa_auth_diagram]: https://mana.mozilla.org/wiki/display/SVCOPS/FxA+Auth+Server+Logical+Diagram
[fxa_content_diagram]: https://mana.mozilla.org/wiki/display/SVCOPS/FxA+Content+Server+Logical+Diagram
[fxa_profile_diagram]: https://mana.mozilla.org/wiki/display/SVCOPS/FxA+Profile+Server+Logical+Diagram
