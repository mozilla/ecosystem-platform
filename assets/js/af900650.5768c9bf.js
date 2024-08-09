"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[2092],{5550:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(74848),i=r(28453);const a={id:"sub-plat-strapi",title:"SubPlat - Strapi",sidebar_label:"Subscription Platform - Strapi"},s="Managing Subscriptions with Strapi",o={id:"relying-parties/reference/sub-plat-strapi",title:"SubPlat - Strapi",description:"Product managers and Relying parties can manage Mozilla Subscriptions with Strapi, a headless content management system (CMS).",source:"@site/docs/relying-parties/reference/sub-plat-strapi.md",sourceDirName:"relying-parties/reference",slug:"/relying-parties/reference/sub-plat-strapi",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-strapi",draft:!1,unlisted:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/relying-parties/reference/sub-plat-strapi.md",tags:[],version:"current",frontMatter:{id:"sub-plat-strapi",title:"SubPlat - Strapi",sidebar_label:"Subscription Platform - Strapi"},sidebar:"docs",previous:{title:"Subscription Coupons",permalink:"/ecosystem-platform/relying-parties/reference/sub-plat-coupons"},next:{title:"Using APIs",permalink:"/ecosystem-platform/relying-parties/reference/using-apis"}},c={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Managing Content",id:"managing-content",level:2},{value:"Creating a new product",id:"creating-a-new-product",level:2},{value:"... what if my product has multiple locales?",id:"-what-if-my-product-has-multiple-locales",level:3},{value:"... what if my product is currency-specific or a multiple currency offering?",id:"-what-if-my-product-is-currency-specific-or-a-multiple-currency-offering",level:3},{value:"... what if my product has tiered plans?",id:"-what-if-my-product-has-tiered-plans",level:3},{value:"... what if my product is a bundle?",id:"-what-if-my-product-is-a-bundle",level:3},{value:"... what if my product can be upgraded from or to another product?",id:"-what-if-my-product-can-be-upgraded-from-or-to-another-product",level:3},{value:"... what if my product has archived plans?",id:"-what-if-my-product-has-archived-plans",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"managing-subscriptions-with-strapi",children:"Managing Subscriptions with Strapi"}),"\n",(0,n.jsxs)(t.p,{children:["Product managers and Relying parties can manage Mozilla Subscriptions with ",(0,n.jsx)(t.a,{href:"https://strapi.io/",children:"Strapi"}),", a headless content management system (CMS)."]}),"\n",(0,n.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsxs)(t.p,{children:["You can log into Strapi through ",(0,n.jsx)(t.a,{href:"https://sso.mozilla.com/dashboard",children:"Mozilla Dashboard"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If you do not have access to Subscription Platform in Strapi, please let us know in the ",(0,n.jsx)(t.code,{children:"#subscription-platform"})," Slack channel."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"managing-content",children:"Managing Content"}),"\n",(0,n.jsx)(t.p,{children:"Content Manager is where all content entries can be found once they are created. To find specific entries to view, edit, or delete, you can search and filter down relevant content within each collection type (e.g. capabilities, common content, etc)."}),"\n",(0,n.jsx)(t.p,{children:'A new content entry can be added by clicking the "Create new entry" button located at the top right of the collection type\'s page.'}),"\n",(0,n.jsx)("img",{src:r(99200).A,alt:"Create new Entry",width:"760"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Content models"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Capability"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"Required."})," Capabilities enabled by the subscription product that services honor, and that customers are entitled to depending on the offering purchased.",(0,n.jsx)("br",{})," - Product managers are to provide the name(s) of capabilities and the Stripe Product ID (from Stripe) to SubPlat Engineers. ",(0,n.jsx)("br",{})," - SubPlat Engineers are to add capabilities (and link the related service) into Strapi. ",(0,n.jsx)("br",{})," - Product managers are to add capability(ies) to the Capabilities field in Offering."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Common content"}),(0,n.jsxs)(t.td,{children:["Optional. Content used on multiple pages (e.g., Privacy Notice URL, TOS URL, Success Action Button URL, etc.), not specific to a certain component. If the product offering is available in other locales, translation fields appear in this entry, once locales have been selected.",(0,n.jsx)("br",{}),"- Product managers are to create and add this entry to Offering, if applicable."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Coupon Config"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"WORK IN PROGRESS - Keep coupon configuration in Stripe until further notice"}),(0,n.jsx)("br",{}),"Optional. Coupon configuration options of the Stripe Promotion Codes valid in specified countries for the product offering. ",(0,n.jsx)("br",{}),"- Product managers are to create and add this entry to Offering, if applicable."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IAP"}),(0,n.jsxs)(t.td,{children:["Optional. IAP configurations that include the Apple App Store productIds and/or Google Play product SKUs (now called product IDs) that are mapped to this Offering. ",(0,n.jsx)("br",{}),"- Product managers are to create and add this entry to Offering, if applicable."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Offering"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"Required."})," The configuration of the subscription product. This entry includes the Stripe Product ID from Stripe of the product offering, and requires the Capabilities and Purchase entries.",(0,n.jsx)("br",{}),"If the product has multiple tiers, each tier should be a separate offering (e.g., 123Done Basic, 123Done Pro, 123Done Premium, etc).",(0,n.jsx)("br",{}),"If the product has legacy single-currency product plans, add their Stripe Plan IDs in the Stripe Legacy Plans field.",(0,n.jsx)("br",{}),"If applicable, this entry should be added to a Subgroup if a customer is able to upgrade from or to this product offering (see Subgroup). ",(0,n.jsx)("br",{}),"- Product managers are to create this entry.",(0,n.jsx)("br",{})," ",(0,n.jsx)(t.strong,{children:"NOTE: The Countries field is currently a feature that is work in progress. Please reach out if countries are missing in which the product is available"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Purchase"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"Required."})," This entry requires the related Purchase Details and Offering entries to the product offering.",(0,n.jsx)("br",{}),"The Stripe Plan Choices field should only include the Stripe Plan IDs of the new multi-currency plans that should be available on the Checkout page for this product.",(0,n.jsx)("br",{}),"Note: Legacy single-currency product plans should be added to the Stripe Legacy Plans field in Offering.",(0,n.jsx)("br",{}),"- Product managers are to create and add this entry to Offering."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Purchase Details"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"Required."})," Details related to the product offering, such as product name and webIconURL. If the product offering is available in other locales, translation fields appear in this entry, once locales have been selected. As a reminder, product managers can either create a pull request to add the product icons to the repo, or share the icons with SubPlat Engineers, to add to the CDN for the webIconURL.",(0,n.jsx)("br",{}),"- Product managers are to create and add this entry to Purchase."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Service"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"Required."})," Mapping of the services to relevant OAuth configuration of the product and its capabilities. ",(0,n.jsx)("br",{}),"- Product managers and SubPlat engineers are to confirm the OAuth ID of the product (assigned from Accounts team). ",(0,n.jsx)("br",{}),"- SubPlat Engineers are to add service (and link the related capabilities) into Strapi. ",(0,n.jsx)("br",{}),"- Product managers are to add service in the Service field in Offering."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Subgroup"}),(0,n.jsxs)(t.td,{children:["Optional. A collection of subscription products in which only one product is active at a time. The order of the offerings in the Offering field is the order in which a customer can upgrade from and to within the sub group.",(0,n.jsx)("br",{}),"- Product managers are to create this entry and add Offerings, if applicable."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"creating-a-new-product",children:"Creating a new product"}),"\n",(0,n.jsx)(t.p,{children:"A subscription product can be entered into Strapi by creating an Offering entry, in which you will need the Stripe Product ID from Stripe. While you can start creating entries in Strapi in any order, we recommend first creating and/or checking that the following entries exists, as they will ultimately be needed in the Offering entry:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Common Content"}),"\n",(0,n.jsx)(t.li,{children:"Purchase Details"}),"\n",(0,n.jsxs)(t.li,{children:["Purchase","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"A Purchase entry requires a Purchase Details entry"}),"\n",(0,n.jsx)(t.li,{children:"NOTE: You will need to come back to this entry to select and save the respective offering once it has been created"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Capability","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If the capabilities for the product offering are not yet in Strapi, please let us know in the ",(0,n.jsx)(t.code,{children:"#subscription-platform"})," Slack channel."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"If applicable, create and add the following to the product offering:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Coupon Config"}),"\n",(0,n.jsx)(t.li,{children:"IAP"}),"\n",(0,n.jsx)(t.li,{children:"Sub group"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:'Once all entries are complete and ready to ship, be sure to set the status of all related content entries to the product offering to "Published". Once set to "Published" status, you may need to refresh the checkout page of the product offering to see the changes.'}),"\n",(0,n.jsx)(t.h3,{id:"-what-if-my-product-has-multiple-locales",children:"... what if my product has multiple locales?"}),"\n",(0,n.jsx)(t.p,{children:"In the side panel for Common Content and Purchase Details entries, there is an Internationalization section with a dropdown menu for locales. Select the locale in the dropdown and complete the necessary translation fields. Once saved, be sure to publish the entry as well."}),"\n",(0,n.jsxs)(t.p,{children:["If locales are missing from the dropdown menu, please let us know in the ",(0,n.jsx)(t.code,{children:"#subscription-platform"})," Slack channel."]}),"\n",(0,n.jsx)("img",{src:r(3547).A,alt:"Selecting locale",width:"400"}),"\n",(0,n.jsx)(t.h3,{id:"-what-if-my-product-is-currency-specific-or-a-multiple-currency-offering",children:"... what if my product is currency-specific or a multiple currency offering?"}),"\n",(0,n.jsx)(t.p,{children:"There is no need to include currency in Strapi."}),"\n",(0,n.jsx)(t.h3,{id:"-what-if-my-product-has-tiered-plans",children:"... what if my product has tiered plans?"}),"\n",(0,n.jsx)(t.p,{children:"Each tiered plan should have its own Offering with the product name and tier level in the Internal Name (e.g. 123Done Basic, 123Done Pro, 123Done Premium, etc)."}),"\n",(0,n.jsx)(t.admonition,{title:"Each tiered plan should have its own Stripe Product ID",type:"note"}),"\n",(0,n.jsx)(t.h3,{id:"-what-if-my-product-is-a-bundle",children:"... what if my product is a bundle?"}),"\n",(0,n.jsx)(t.p,{children:"In Offering, include the capabilities for the product in the Capabilities field."}),"\n",(0,n.jsx)(t.p,{children:'For example, in the "123 Foxkeh" Offering below, the capabilities "123donePro" (for 123 Done Pro Plus) and "foxkeh" (for Cooking with Foxkeh) are included in the Capabilities field.'}),"\n",(0,n.jsx)("img",{src:r(69625).A,alt:"Bundle",width:"500"}),"\n",(0,n.jsx)(t.h3,{id:"-what-if-my-product-can-be-upgraded-from-or-to-another-product",children:"... what if my product can be upgraded from or to another product?"}),"\n",(0,n.jsx)(t.p,{children:"Once the Offering has been created, you can add it to either a new or existing Subgroup. In Subgroup, you will see an Offering field. The order of the offerings in this field outlines the order in which each offering can be upgraded from and to within the subgroup. Add the Offering to this field, and move it to the appropriate position."}),"\n",(0,n.jsx)(t.p,{children:'For example, in the "123Done Pro to Bundle" Subgroup below, the Subgroup shows that customers are able to upgrade from "123Done Pro" to "123Done Pro Plus" to "123 Foxkeh".'}),"\n",(0,n.jsx)("img",{src:r(86190).A,alt:"Subgroup",width:"500"}),"\n",(0,n.jsx)(t.h3,{id:"-what-if-my-product-has-archived-plans",children:"... what if my product has archived plans?"}),"\n",(0,n.jsx)(t.p,{children:"In Offering, add the Stripe Plan ID(s) of the archived plan(s) in the Stripe Legacy Plans field."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},69625:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/subplat-strapi-bundle-43cbcf225355fef6001bbabafd4780f3.png"},3547:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/subplat-strapi-locale-08d545f7752b95c2f447ecb102639f8a.png"},99200:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/subplat-strapi-new-entry-5c8f9d3a87bccccf96957ea6dd4f194e.png"},86190:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/subplat-strapi-subgroup-9f1fa2f3c51b3479665c314ad1cc3775.png"},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(96540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);