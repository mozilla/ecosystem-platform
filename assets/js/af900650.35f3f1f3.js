"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[2092],{13927:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"relying-parties/reference/sub-plat-strapi","title":"SubPlat - Strapi","description":"Product managers and Relying parties can manage Mozilla Subscriptions with Strapi, a headless content management system (CMS).","source":"@site/docs/relying-parties/reference/sub-plat-strapi.md","sourceDirName":"relying-parties/reference","slug":"/relying-parties/reference/sub-plat-strapi","permalink":"/ecosystem-platform/relying-parties/reference/sub-plat-strapi","draft":false,"unlisted":false,"editUrl":"https://github.com/mozilla/ecosystem-platform/edit/master/docs/relying-parties/reference/sub-plat-strapi.md","tags":[],"version":"current","frontMatter":{"id":"sub-plat-strapi","title":"SubPlat - Strapi","sidebar_label":"Subscription Platform - Strapi"},"sidebar":"docs","previous":{"title":"Subscription Coupons","permalink":"/ecosystem-platform/relying-parties/reference/sub-plat-coupons"},"next":{"title":"Using APIs","permalink":"/ecosystem-platform/relying-parties/reference/using-apis"}}');var i=t(74848),r=t(28453);const a={id:"sub-plat-strapi",title:"SubPlat - Strapi",sidebar_label:"Subscription Platform - Strapi"},o="Managing Subscriptions with Strapi",s={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Managing Content",id:"managing-content",level:2},{value:"Creating a new product",id:"creating-a-new-product",level:2},{value:"... what if my product has multiple locales?",id:"-what-if-my-product-has-multiple-locales",level:3},{value:"... what if my product is currency-specific or a multiple currency offering?",id:"-what-if-my-product-is-currency-specific-or-a-multiple-currency-offering",level:3},{value:"... what if my product has tiered plans?",id:"-what-if-my-product-has-tiered-plans",level:3},{value:"... what if my product is a bundle?",id:"-what-if-my-product-is-a-bundle",level:3},{value:"... what if my product can be upgraded from or to another product?",id:"-what-if-my-product-can-be-upgraded-from-or-to-another-product",level:3},{value:"... what if my product has archived plans?",id:"-what-if-my-product-has-archived-plans",level:3}];function c(A){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...A.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"managing-subscriptions-with-strapi",children:"Managing Subscriptions with Strapi"})}),"\n",(0,i.jsxs)(e.p,{children:["Product managers and Relying parties can manage Mozilla Subscriptions with ",(0,i.jsx)(e.a,{href:"https://strapi.io/",children:"Strapi"}),", a headless content management system (CMS)."]}),"\n",(0,i.jsx)(e.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(e.p,{children:["There are separate Strapi instances for each environment - ",(0,i.jsx)(e.a,{href:"https://special-dream-8c48be3fee.strapiapp.com/admin/auth/login",children:"stage"})," / ",(0,i.jsx)(e.a,{href:"https://bold-life-f3ef2932ad.strapiapp.com/admin/auth/login",children:"production"}),"."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["If you do not have access to Subscription Platform in Strapi, please let us know in the ",(0,i.jsx)(e.code,{children:"#subscription-platform"})," Slack channel."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"managing-content",children:"Managing Content"}),"\n",(0,i.jsx)(e.p,{children:"Content Manager is where all content entries can be found once they are created. To find specific entries to view, edit, or delete, you can search and filter down relevant content within each collection type (e.g. capabilities, common content, etc)."}),"\n",(0,i.jsx)(e.p,{children:'A new content entry can be added by clicking the "Create new entry" button located at the top right of the collection type\'s page.'}),"\n",(0,i.jsx)("img",{src:t(99200).A,alt:"Create new Entry",width:"760"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Content models"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Capability"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.strong,{children:"Required."})," Capabilities enabled by the subscription product that services honor, and that customers are entitled to depending on the offering purchased.",(0,i.jsx)("br",{})," - Product managers are to provide the name(s) of capabilities and the Stripe Product ID (from Stripe) to SubPlat Engineers. ",(0,i.jsx)("br",{})," - SubPlat Engineers are to add capabilities (and link the related service) into Strapi. ",(0,i.jsx)("br",{})," - Product managers are to add capability(ies) to the Capabilities field in Offering."]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Common content"}),(0,i.jsxs)(e.td,{children:["Optional. Content used on multiple pages (e.g., Privacy Notice URL, TOS URL, Success Action Button URL, etc.), not specific to a certain component. If the product offering is available in other locales, select the desired locale in the dropdown menu located on the top right of the page, and fill in translations.",(0,i.jsx)("br",{}),"- SubPlat Engineers are to add locales if missing from the dropdown menu. ",(0,i.jsx)("br",{}),"- Product managers are to create and add this entry to Offering, if applicable."]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Coupon Config"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.strong,{children:"WORK IN PROGRESS - Keep coupon configuration in Stripe until further notice"}),(0,i.jsx)("br",{}),"Optional. Coupon configuration options of the Stripe Promotion Codes valid in specified countries for the product offering. ",(0,i.jsx)("br",{}),"- Product managers are to create and add this entry to Offering, if applicable."]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"IAP"}),(0,i.jsxs)(e.td,{children:["Optional. IAP configurations that include the Apple App Store productIds and/or Google Play product SKUs (now called product IDs) that are mapped to this Offering. ",(0,i.jsx)("br",{}),"- Product managers are to create and add this entry to Offering, if applicable."]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Offering"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.strong,{children:"Required."})," The configuration of the subscription product. This entry includes the Stripe Product ID from Stripe of the product offering, and requires the Capabilities and Purchase entries.",(0,i.jsx)("br",{}),"If the product has multiple tiers, each tier should be a separate offering (e.g., 123Done Basic, 123Done Pro, 123Done Premium, etc).",(0,i.jsx)("br",{}),"If the product has legacy single-currency product plans, add their Stripe Plan IDs in the Stripe Legacy Plans field.",(0,i.jsx)("br",{}),"If applicable, this entry should be added to a Subgroup if a customer is able to upgrade from or to this product offering (see Subgroup). ",(0,i.jsx)("br",{}),"- Product managers are to create this entry.",(0,i.jsx)("br",{})," ",(0,i.jsx)(e.strong,{children:"NOTE: The Countries field is currently a feature that is work in progress. Please reach out if countries are missing in which the product is available"})]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Purchase"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.strong,{children:"Required."})," This entry requires the related Purchase Details and Offering entries to the product offering.",(0,i.jsx)("br",{}),"The Stripe Plan Choices field should only include the Stripe Plan IDs of the new multi-currency plans that should be available on the Checkout page for this product.",(0,i.jsx)("br",{}),"Note: Legacy single-currency product plans should be added to the Stripe Legacy Plans field in Offering.",(0,i.jsx)("br",{}),"- Product managers are to create and add this entry to Offering."]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Purchase Details"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.strong,{children:"Required."})," Details related to the product offering, such as product name and webIconURL. If the product offering is available in other locales, select the desired locale in the dropdown menu located on the top right of the page. ",(0,i.jsx)("br",{}),"As a reminder, product managers can either create a pull request to add the product icons to the repo, or share the icons with SubPlat Engineers, to add to the CDN for the webIconURL.",(0,i.jsx)("br",{}),"- SubPlat Engineers are to add locales if missing from the dropdown menu. ",(0,i.jsx)("br",{}),"- Product managers are to create and add this entry to Purchase."]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Service"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.strong,{children:"Required."})," Mapping of the services to relevant OAuth configuration of the product and its capabilities. ",(0,i.jsx)("br",{}),"- Product managers and SubPlat engineers are to confirm the OAuth ID of the product (assigned from Accounts team). ",(0,i.jsx)("br",{}),"- SubPlat Engineers are to add service (and link the related capabilities) into Strapi. ",(0,i.jsx)("br",{}),"- Product managers are to add service in the Service field in Offering."]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Subgroup"}),(0,i.jsxs)(e.td,{children:["Optional. A collection of subscription products in which only one product is active at a time. The order of the offerings in the Offering field is the order in which a customer can upgrade from and to within the sub group.",(0,i.jsx)("br",{}),"- Product managers are to create this entry and add Offerings, if applicable."]})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"creating-a-new-product",children:"Creating a new product"}),"\n",(0,i.jsx)(e.p,{children:"A subscription product can be entered into Strapi by creating an Offering entry, in which you will need the Stripe Product ID from Stripe. While you can start creating entries in Strapi in any order, we recommend first creating and/or checking that the following entries exists, as they will ultimately be needed in the Offering entry:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Common Content"}),"\n",(0,i.jsx)(e.li,{children:"Purchase Details"}),"\n",(0,i.jsxs)(e.li,{children:["Purchase","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"A Purchase entry requires a Purchase Details entry"}),"\n",(0,i.jsx)(e.li,{children:"NOTE: You will need to come back to this entry to select and save the respective offering once it has been created"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Capability","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["If the capabilities for the product offering are not yet in Strapi, please let us know in the ",(0,i.jsx)(e.code,{children:"#subscription-platform"})," Slack channel."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"If applicable, create and add the following to the product offering:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Coupon Config"}),"\n",(0,i.jsx)(e.li,{children:"IAP"}),"\n",(0,i.jsx)(e.li,{children:"Sub group"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:'Once all entries are complete and ready to ship, be sure to set the status of all related content entries to the product offering to "Published" and check that the Published tab includes all desired information. Once set to "Published" status, you may need to refresh the checkout page of the product offering to see the changes.'}),"\n",(0,i.jsx)(e.h3,{id:"-what-if-my-product-has-multiple-locales",children:"... what if my product has multiple locales?"}),"\n",(0,i.jsx)(e.p,{children:"In Common Content and Purchase Details entries, there is a dropdown menu for locales located on the top right of the page. Select the desired locale and complete the necessary translation fields (if convenient, you can also fill in fields from another locale using the button next to the dropdown). Once saved, be sure to publish the entry as well."}),"\n",(0,i.jsxs)(e.p,{children:["If locales are missing from the dropdown menu, please let us know in the ",(0,i.jsx)(e.code,{children:"#subscription-platform"})," Slack channel."]}),"\n",(0,i.jsx)("img",{src:t(45913).A,alt:"Selecting locale",width:"400"}),"\n",(0,i.jsx)(e.h3,{id:"-what-if-my-product-is-currency-specific-or-a-multiple-currency-offering",children:"... what if my product is currency-specific or a multiple currency offering?"}),"\n",(0,i.jsx)(e.p,{children:"There is no need to include currency in Strapi."}),"\n",(0,i.jsx)(e.h3,{id:"-what-if-my-product-has-tiered-plans",children:"... what if my product has tiered plans?"}),"\n",(0,i.jsx)(e.p,{children:"Each tiered plan should have its own Offering with the product name and tier level in the Internal Name (e.g. 123Done Basic, 123Done Pro, 123Done Premium, etc)."}),"\n",(0,i.jsx)(e.admonition,{title:"Each tiered plan should have its own Stripe Product ID",type:"note"}),"\n",(0,i.jsx)(e.h3,{id:"-what-if-my-product-is-a-bundle",children:"... what if my product is a bundle?"}),"\n",(0,i.jsx)(e.p,{children:"In Offering, include the capabilities for the product in the Capabilities field."}),"\n",(0,i.jsx)(e.p,{children:'For example, in the "123 Foxkeh" Offering below, the capabilities "123donePro" (for 123 Done Pro Plus) and "foxkeh" (for Cooking with Foxkeh) are included in the Capabilities field.'}),"\n",(0,i.jsx)("img",{src:t(69625).A,alt:"Bundle",width:"500"}),"\n",(0,i.jsx)(e.h3,{id:"-what-if-my-product-can-be-upgraded-from-or-to-another-product",children:"... what if my product can be upgraded from or to another product?"}),"\n",(0,i.jsx)(e.p,{children:"Once the Offering has been created, you can add it to either a new or existing Subgroup. In Subgroup, you will see an Offering field. The order of the offerings in this field outlines the order in which each offering can be upgraded from and to within the subgroup. Add the Offering to this field, and move it to the appropriate position."}),"\n",(0,i.jsx)(e.p,{children:'For example, in the "123Done Pro to Bundle" Subgroup below, the Subgroup shows that customers are able to upgrade from "123Done Pro" to "123Done Pro Plus" to "123 Foxkeh".'}),"\n",(0,i.jsx)("img",{src:t(86190).A,alt:"Subgroup",width:"500"}),"\n",(0,i.jsx)(e.h3,{id:"-what-if-my-product-has-archived-plans",children:"... what if my product has archived plans?"}),"\n",(0,i.jsx)(e.p,{children:"In Offering, add the Stripe Plan ID(s) of the archived plan(s) in the Stripe Legacy Plans field."})]})}function d(A={}){const{wrapper:e}={...(0,r.R)(),...A.components};return e?(0,i.jsx)(e,{...A,children:(0,i.jsx)(c,{...A})}):c(A)}},69625:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/subplat-strapi-bundle-43cbcf225355fef6001bbabafd4780f3.png"},45913:(A,e,t)=>{t.d(e,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAggAAADgCAYAAABmdJ6lAAAAAXNSR0IArs4c6QAAAJZlWElmTU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAACQAAAAAQAAAJAAAAABAASShgAHAAAAEgAAAISgAQADAAAAAQABAACgAgAEAAAAAQAAAgigAwAEAAAAAQAAAOAAAAAAQVNDSUkAAABTY3JlZW5zaG90r4VLJgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAdZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjI0PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjUyMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlVzZXJDb21tZW50PlNjcmVlbnNob3Q8L2V4aWY6VXNlckNvbW1lbnQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgqn8sLuAAAAHGlET1QAAAACAAAAAAAAAHAAAAAoAAAAcAAAAHAAABngbcIRHAAAGaxJREFUeAHsnXeAFLUex390PGlKU0BUsKCogEhTUThpgjSVg0cTePSO9CYdFRBFOg/hKOJTVBREig9BQECagPIEBB4+jt4VTukvv9ybZXdndyd7k52bu/3mj9uZJJNkPpObfCf5JUmXmHj5JsGBAAiAAAiAAAiAgBeBdBAIXjRwCAIgAAIgAAIgIAlAIKAigAAIgAAIgAAImAhAIJiQwAMEQAAEQAAEQAACAXUABEAABEAABEDARAACwYQEHiAAAiAAAiAAAhAIqAMgAAIgAAIgAAImAhAIJiTwAAEQAAEQAAEQgEBAHQABEAABEAABEDARgEAwIYEHCIAACIAACIAABALqAAiAAAiAAAiAgIkABIIJCTxAAARAAARAAAQgEFAHQAAEQAAEQAAETAQgEExI4AECIAACIAACIACBgDoAAiAAAiAAAiBgIgCBYEICDxAAARAAARAAAQgE1AEQAAEQAAEQAAETAQgEExJ4gAAIgAAIgAAIQCCgDoAACIAACIAACJgIQCCYkMADBEAABEAABEAAAgF1AARAAARAAARAwEQAAsGEBB4gAAIgAAIgAAIQCKgDIAACIAACIAACJgIQCCYk8AABEAABEAABEIBAQB0AARAAARAAARAwEYBAMCGBBwiAAAiAAAiAAAQC6gAIgAAIgAAIgICJAASCCQk8QAAEQAAEQAAEIBBQB0AABEAABEAABEwEIBBMSOABAiAAAiAAAiAAgYA6AAIgAAIgAAIgYCIAgWBCAg8QAAEQAAEQAAEIBNQBEAABEAABEAABEwEIBBMSeIAACIAACIAACEAgoA6AAAiAAAiAAAiYCEAgmJDAAwRAAARAAARAAAIBdQAEQAAEQAAEQMBEAALBhAQeIAACIAACIAACEAioAyAAAiAAAiAAAiYCEAgmJPAAARAAARAAARCAQEAdAAEQAAEQAAEQMBGAQDAhgQcIgAAIgAAIgAAEAuoACIAACIAACICAiQAEggkJPEAABEAABEAABCAQUAdAAARAAARAAARMBCAQTEjgAQIgAAIgAAIgAIGAOgACIAACIAACIGAiAIFgQgIPEAABEAABEAABCATUARAAARAAARAAARMBCAQTEniAAAiAAAiAAAhAIKAOgAAIgAAIgAAImAhAIJiQwAMEQAAEQAAEQAACAXUABEAABEAABEDARAACwYQEHiAAAiAAAiAAAhAIqAMgAAIgAAIgAAImAhAIJiTwAAEQAAEQAAEQgEBAHQABEAABEAABEDARgEAwIYEHCIAACIAACIAABALqAAiAAAiAAAiAgIkABIIJCTxAAARAAARAAAQgEFAHQAAEQAAEQAAETAQgEExI4AECIAACIAACIACBgDoAAiAAAiAAAiBgIgCBYEICDxAAARAA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"},99200:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/subplat-strapi-new-entry-5c8f9d3a87bccccf96957ea6dd4f194e.png"},86190:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/subplat-strapi-subgroup-9f1fa2f3c51b3479665c314ad1cc3775.png"},28453:(A,e,t)=>{t.d(e,{R:()=>a,x:()=>o});var n=t(96540);const i={},r=n.createContext(i);function a(A){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function o(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(i):A.components||i:a(A.components),n.createElement(r.Provider,{value:e},A.children)}}}]);