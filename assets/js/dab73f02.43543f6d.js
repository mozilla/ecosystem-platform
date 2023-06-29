"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[9529],{65370:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));t(8209);const r={title:"React Style Guide"},s=void 0,l={unversionedId:"reference/style-guides/react-style-guide",id:"reference/style-guides/react-style-guide",title:"React Style Guide",description:"Current as of July 10, 2022",source:"@site/docs/reference/style-guides/react-style-guide.md",sourceDirName:"reference/style-guides",slug:"/reference/style-guides/react-style-guide",permalink:"/ecosystem-platform/reference/style-guides/react-style-guide",draft:!1,editUrl:"https://github.com/mozilla/ecosystem-platform/edit/master/docs/reference/style-guides/react-style-guide.md",tags:[],version:"current",frontMatter:{title:"React Style Guide"},sidebar:"docs",previous:{title:"Node Style Guide",permalink:"/ecosystem-platform/reference/style-guides/node-style-guide"},next:{title:"Tests in CircleCI",permalink:"/ecosystem-platform/reference/tests-in-circleci"}},i={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Basic Rules",id:"basic-rules",level:2},{value:"Hooks and Function Components over Class Components",id:"hooks-and-function-components-over-class-components",level:2},{value:"Custom Hooks",id:"custom-hooks",level:3},{value:"Mixins",id:"mixins",level:2},{value:"Naming",id:"naming",level:2},{value:"Alignment",id:"alignment",level:2},{value:"Quotes",id:"quotes",level:2},{value:"Spacing",id:"spacing",level:2},{value:"Props",id:"props",level:2},{value:"Refs",id:"refs",level:2},{value:"Parentheses",id:"parentheses",level:2},{value:"Wrapping",id:"wrapping",level:2},{value:"Tags",id:"tags",level:2},{value:"Methods",id:"methods",level:2},{value:"Ordering",id:"ordering",level:2},{value:"Import organizing",id:"import-organizing",level:2},{value:"Context",id:"context",level:2},{value:"Pitfalls",id:"pitfalls",level:3}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Current as of ",(0,o.kt)("inlineCode",{parentName:"p"},"July 10, 2022")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This guide is based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbnb/javascript/tree/master/react"},"Airbnb React/JSX Style Guide")," with minor adjustments to fit our implementations."),(0,o.kt)("p",null,"Note: When ever possible there should be an eslint rule enforcing the styles discussed in this guide."),(0,o.kt)("h2",{id:"basic-rules"},"Basic Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Only include one React component per file.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"However, multiple Stateless, or Pure, Components are allowed per file. eslint: react/no-multi-comp."))),(0,o.kt)("li",{parentName:"ul"},"Always use TSX syntax.")),(0,o.kt)("h2",{id:"hooks-and-function-components-over-class-components"},"Hooks and Function Components over Class Components"),(0,o.kt)("p",null,"Regardless of whether or not the component has state, it is encouraged to always use function components over Class components except in rare instances where we need access to underlying lifecycle methods ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes"},"unavailable to hooks"),"."),(0,o.kt)("p",null,"If your component does have state, consider making use of the React provided ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-state.html"},"useState hook"),"."),(0,o.kt)("p",null,"To perform any side effects, such as the React class lifecycle methods, make use of the ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-effect.html"},"useEffect hook"),"."),(0,o.kt)("h3",{id:"custom-hooks"},"Custom Hooks"),(0,o.kt)("p",null,'When you write stateful logic with hooks that you need to duplicate in another component, or you need to implement logic already present in another component, follow the DRY principle and extract it into a more generic "custom" hook. Components using a shared custom hook don\'t actually share state because all state and effects inside of each call are isolated, similar to using React hooks like ',(0,o.kt)("inlineCode",{parentName:"p"},"useState")," across components."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Read the ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-custom.html"},"React documentation on custom hooks")," for more explanations and examples.")),(0,o.kt)("p",null,'For example, we have multiple components in our codebase that need to execute something on escape keypress, like hiding a modal. We wrote the logic to "dismiss" a modal on keypress like so...'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// ... component setup and creation of a function called `onDismiss` that utilizes `useState` ...\n\nuseEffect(() => {\n  const handler = ({ key }: KeyboardEvent) => {\n    if (key === 'Escape') {\n      onDismiss();\n    }\n  };\n  window.addEventListener('keydown', handler);\n  return () => window.removeEventListener('keydown', handler);\n}, [onDismiss]);\n")),(0,o.kt)("p",null,"This calls the function ",(0,o.kt)("inlineCode",{parentName:"p"},"onDismiss")," when the ",(0,o.kt)("inlineCode",{parentName:"p"},"'Escape'")," key is pressed. Because we later had multiple modals and other components that we want to execute a function on ",(0,o.kt)("inlineCode",{parentName:"p"},"'Escape'")," keypress, to avoid copying and pasting this logic into every component it was extracted into ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/hooks.tsx")," with a slightly more generic function name to be executed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export function useEscKeydownEffect(onEscKeydown: Function) {\n  useEffect(() => {\n    const handler = ({ key }: KeyboardEvent) => {\n      if (key === 'Escape') {\n        onEscKeydown();\n      }\n    };\n    window.addEventListener('keydown', handler);\n    return () => window.removeEventListener('keydown', handler);\n  }, [onEscKeydown]);\n}\n")),(0,o.kt)("p",null,"Now each component can define its own function to be executed on this keypress, and we can easily use it across our components by passing in that function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// ... component setup and creation of a function called `onDismiss` that utilizes `useState` ...\n\nuseEscKeydownEffect(onDismiss);\n")),(0,o.kt)("p",null,"Custom hook extraction also eliminates duplicate tests since tests can be written for the hook instead of testing similar logic across various components."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks.tsx")," grows to be too large, consider storing them in a ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks/")," directory instead."),(0,o.kt)("h2",{id:"mixins"},"Mixins"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html"},"Do not use mixins"),"."),(0,o.kt)("p",null,"Why? Mixins introduce implicit dependencies, cause name clashes, and cause snowballing complexity. Most use cases for mixins can be accomplished in better ways via components, higher-order components, or utility modules."),(0,o.kt)("h2",{id:"naming"},"Naming"),(0,o.kt)("p",null,"This is a copy of what can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://airbnb.io/javascript/react/#naming"},"Airbnb styleguide"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Extensions: Use .tsx extension for React components."),(0,o.kt)("li",{parentName:"ul"},"Filename: Use PascalCase for filenames. E.g., ReservationCard.tsx."),(0,o.kt)("li",{parentName:"ul"},"Reference Naming: Use PascalCase for React components and camelCase for their instances. eslint: ",(0,o.kt)("inlineCode",{parentName:"li"},"react/jsx-pascal-case"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\nimport reservationCard from './ReservationCard';\n\n// good\nimport ReservationCard from './ReservationCard';\n\n// bad\nconst ReservationItem = <ReservationCard />;\n\n// good\nconst reservationItem = <ReservationCard />;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Component Naming: Use the filename as the component name. For example, ReservationCard.tsx should have a reference name of ReservationCard. However, for root components of a directory, use index.tsx as the filename and use the directory name as the component name:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\nimport Footer from './Footer/Footer';\n\n// bad\nimport Footer from './Footer/index';\n\n// good\nimport Footer from './Footer';\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Higher-order Component Naming: Use a composite of the higher-order component\u2019s name and the passed-in component\u2019s name as the displayName on the generated component. For example, the higher-order component withFoo(), when passed a component Bar should produce a component with a displayName of withFoo(Bar).",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Why? A component\u2019s displayName may be used by developer tools or in error messages, and having a value that clearly expresses this relationship helps people understand what is happening.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\nexport default function withFoo(WrappedComponent) {\n  return function WithFoo(props) {\n    return <WrappedComponent {...props} foo />;\n  }\n}\n\n// good\nexport default function withFoo(WrappedComponent) {\n  function WithFoo(props) {\n    return <WrappedComponent {...props} foo />;\n  }\n\n  const wrappedComponentName = WrappedComponent.displayName\n    || WrappedComponent.name\n    || 'Component';\n\n  WithFoo.displayName = `withFoo(${wrappedComponentName})`;\n  return WithFoo;\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Props Naming: Avoid using DOM component prop names for different purposes.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Why? People expect props like style and className to mean one specific thing. Varying this API for a subset of your app makes the code less readable and less maintainable, and may cause bugs.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// bad\n<MyComponent style="fancy" />\n\n// bad\n<MyComponent className="fancy" />\n\n// good\n<MyComponent variant="fancy" />\n')),(0,o.kt)("h2",{id:"alignment"},"Alignment"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Follow these alignment styles for JSX syntax. eslint: ",(0,o.kt)("inlineCode",{parentName:"li"},"react/jsx-closing-bracket-location")," ",(0,o.kt)("inlineCode",{parentName:"li"},"react/jsx-closing-tag-location"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// bad\n<Foo superLongParam="bar"\n     anotherSuperLongParam="baz" />\n\n// good\n<Foo\n  superLongParam="bar"\n  anotherSuperLongParam="baz"\n/>\n\n// if props fit in one line then keep it on the same line\n<Foo bar="bar" />\n\n// children get indented normally\n<Foo\n  superLongParam="bar"\n  anotherSuperLongParam="baz"\n>\n  <Quux />\n</Foo>\n\n// bad\n{showButton &&\n  <Button />\n}\n\n// bad\n{\n  showButton &&\n    <Button />\n}\n\n// good\n{showButton && (\n  <Button />\n)}\n\n// good\n{showButton && <Button />}\n\n// good\n{someReallyLongConditional\n  && anotherLongConditional\n  && (\n    <Foo\n      superLongParam="bar"\n      anotherSuperLongParam="baz"\n    />\n  )\n}\n\n// good\n{someConditional ? (\n  <Foo />\n) : (\n  <Foo\n    superLongParam="bar"\n    anotherSuperLongParam="baz"\n  />\n)}\n')),(0,o.kt)("h2",{id:"quotes"},"Quotes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Always use double quotes (\") for JSX attributes, but single quotes (') for all other JS. eslint: ",(0,o.kt)("inlineCode",{parentName:"li"},"jsx-quotes"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Why? Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\n<Foo bar='bar' />\n\n// good\n<Foo bar=\"bar\" />\n\n// bad\n<Foo style={{ left: \"20px\" }} />\n\n// good\n<Foo style={{ left: '20px' }} />\n")),(0,o.kt)("h2",{id:"spacing"},"Spacing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Always include a single space in your self-closing tag. eslint: ",(0,o.kt)("inlineCode",{parentName:"li"},"no-multi-spaces"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"react/jsx-tag-spacing"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\n<Foo/>\n\n// very bad\n<Foo                 />\n\n// bad\n<Foo\n />\n\n// good\n<Foo />\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do not pad JSX curly braces with spaces. eslint: ",(0,o.kt)("inlineCode",{parentName:"li"},"react/jsx-curly-spacing"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\n<Foo bar={ baz } />\n\n// good\n<Foo bar={baz} />\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Always use camelCase for prop names.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// bad\n<Foo\n  UserName="hello"\n  phone_number={12345678}\n/>\n\n// good\n<Foo\n  userName="hello"\n  phoneNumber={12345678}\n/>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Omit the value of the prop when it is explicitly true. eslint: ",(0,o.kt)("inlineCode",{parentName:"li"},"react/jsx-boolean-value"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\n<Foo\n  hidden={true}\n/>\n\n// good\n<Foo\n  hidden\n/>\n\n// good\n<Foo hidden />\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Always include an alt prop on ",(0,o.kt)("inlineCode",{parentName:"li"},"<img>")," tags. If the image is presentational, alt can be an empty string or the ",(0,o.kt)("inlineCode",{parentName:"li"},"<img>"),' must have role="presentation". eslint: ',(0,o.kt)("inlineCode",{parentName:"li"},"jsx-a11y/alt-text"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// bad\n<img src="hello.jpg" />\n\n// good\n<img src="hello.jpg" alt="Me waving hello" />\n\n// good\n<img src="hello.jpg" alt="" />\n\n// good\n<img src="hello.jpg" role="presentation" />\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do not use words like \u201cimage\u201d, \u201cphoto\u201d, or \u201cpicture\u201d in ",(0,o.kt)("inlineCode",{parentName:"li"},"<img>")," alt props. eslint: ",(0,o.kt)("inlineCode",{parentName:"li"},"jsx-a11y/img-redundant-alt"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Why? Screenreaders already announce img elements as images, so there is no need to include this information in the alt text.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// bad\n<img src="hello.jpg" alt="Picture of me waving hello" />\n\n// good\n<img src="hello.jpg" alt="Me waving hello" />\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use only valid, non-abstract ARIA roles. eslint: jsx-a11y/aria-role")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// bad - not an ARIA role\n<div role="datepicker" />\n\n// bad - abstract ARIA role\n<div role="range" />\n\n// good\n<div role="button" />\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do not use accessKey on elements. eslint: ",(0,o.kt)("inlineCode",{parentName:"li"},"jsx-a11y/no-access-key"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Why? Inconsistencies between keyboard shortcuts and keyboard commands used by people using screenreaders and keyboards complicate accessibility.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// bad\n<div accessKey="h" />\n\n// good\n<div />\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Avoid using an array index as key prop, prefer a stable ID. eslint: ",(0,o.kt)("inlineCode",{parentName:"li"},"react/no-array-index-key"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Why? Not using a stable ID ",(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318"},"is an anti-pattern")," because it can negatively impact performance and cause issues with component state.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\n{todos.map((todo, index) =>\n  <Todo\n    {...todo}\n    key={index}\n  />\n)}\n\n// good\n{todos.map(todo => (\n  <Todo\n    {...todo}\n    key={todo.id}\n  />\n))}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use spread props sparingly.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Why? Otherwise you\u2019re more likely to pass unnecessary props down to components. And for React v15.6.1 and older, you could ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html"},"pass invalid HTML attributes to the DOM"),".")))),(0,o.kt)("p",null,"Exceptions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Spreading objects with known, explicit props. This can be particularly useful when testing React components with Mocha\u2019s beforeEach construct.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export default function Foo {\n  const props = {\n    text: '',\n    isPublished: false\n  }\n\n  return (<div {...props} />);\n}\n")),(0,o.kt)("p",null,"Notes for use: Filter out unnecessary props when possible. Also, use ",(0,o.kt)("a",{parentName:"p",href:"prop-types-exact"},"prop-types-exact")," to help prevent bugs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// good\nfunction Example(props) {\n  const { irrelevantProp, ...relevantProps  } = props;\n  return <WrappedComponent {...relevantProps} />\n}\n\n// bad\nfunction Example(props) {\n  return <WrappedComponent {...props} />\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Whenever we pass a value in via a prop that matches the name of the prop, we should prefer ",(0,o.kt)("inlineCode",{parentName:"li"},"{...{ propName }}")," syntactic sugar. It looks nicer, is more readable, and is slightly easier to update later.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\n<MyComponent foo={foo} />\n\n// good\n<MyComponent {...{ foo }} />\n\n// bad\n<MyComponent foo={foo} bar={bar} baz={baz} />\n\n// good\n<MyComponent {...{ foo, bar, baz }} />\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Whenever we render a ",(0,o.kt)("inlineCode",{parentName:"li"},"className")," on a component, or really anything that's going to cause a property to render on a DOM element, we should NOT make the default value an empty string anywhere in the component tree, but it should be ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined")," instead. This is because those properties will render on those DOM elements unnecessarily.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// bad\n<div className="" /> // renders <div class=" "></div>\n\n// good\n<div className={undefined} /> // renders <div></div>\n')),(0,o.kt)("h2",{id:"refs"},"Refs"),(0,o.kt)("p",null,"Pretty much use what Airbnb has. Are there other things we can include?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Always use ref callbacks. eslint: ",(0,o.kt)("inlineCode",{parentName:"li"},"react/no-string-refs"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// bad\n<Foo\n  ref="myRef"\n/>\n\n// good\n<Foo\n  ref={(ref) => { this.myRef = ref; }}\n/>\n')),(0,o.kt)("h2",{id:"parentheses"},"Parentheses"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Wrap JSX tags in parentheses when they span more than one line. eslint: ",(0,o.kt)("inlineCode",{parentName:"li"},"react/jsx-wrap-multilines"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// bad\nfunction Example() {\n  return <MyComponent variant="long body" foo="bar">\n           <MyChild />\n         </MyComponent>;\n}\n\n// good\nfunction Example() {\n  return (\n    <MyComponent variant="long body" foo="bar">\n      <MyChild />\n    </MyComponent>\n  );\n}\n\n// good, when single line\nfunction Example() {\n  const body = <div>hello</div>;\n  return <MyComponent>{body}</MyComponent>;\n}\n')),(0,o.kt)("h2",{id:"wrapping"},"Wrapping"),(0,o.kt)("p",null,"Use a React fragment, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"<></>"),", instead of a generic element wrapper like ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>")," when returning elements that don't need a DOM wrapper to prevent unnecessary DOM elements from being rendered"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// bad\nfunction Example() {\n  return (\n    <div>\n      <h1>Foo</h1>\n      <p>Bar</p>\n    </div>\n  )\n}\n\n// good\nfunction Example() {\n  return (\n    <>\n      <h1>Foo</h1>\n      <p>Bar</p>\n    </>\n  )\n}\n")),(0,o.kt)("h2",{id:"tags"},"Tags"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Always self-close tags that have no children. eslint: ",(0,o.kt)("inlineCode",{parentName:"li"},"react/self-closing-comp"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// bad\n<Foo variant="stuff"></Foo>\n\n// good\n<Foo variant="stuff" />\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If your component has multi-line properties, close its tag on a new line. eslint: ",(0,o.kt)("inlineCode",{parentName:"li"},"react/jsx-closing-bracket-location"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// bad\n<Foo\n  bar="bar"\n  baz="baz" />\n\n// good\n<Foo\n  bar="bar"\n  baz="baz"\n/>\n')),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use arrow functions to close over local variables. It is handy when you need to pass additional data to an event handler. Although, make sure they ",(0,o.kt)("a",{parentName:"li",href:"https://www.bignerdranch.com/blog/choosing-the-best-approach-for-react-event-handlers/"},"do not massively hurt performance"),", in particular when passed to custom components that might be PureComponents, because they will trigger a possibly needless rerender every time.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function ItemList(props) {\n  return (\n    <ul>\n      {props.items.map((item, index) => (\n        <Item\n          key={item.key}\n          onClick={(event) => { doSomethingWith(event, item.name, index); }}\n        />\n      ))}\n    </ul>\n  );\n}\n")),(0,o.kt)("h2",{id:"ordering"},"Ordering"),(0,o.kt)("p",null,"Ordering for function components."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"State variables using the useState hook"),(0,o.kt)("li",{parentName:"ol"},"Side effects using the useEffect hook"),(0,o.kt)("li",{parentName:"ol"},"Render")),(0,o.kt)("h2",{id:"import-organizing"},"Import organizing"),(0,o.kt)("p",null,"Your file imports should be organized using the ",(0,o.kt)("inlineCode",{parentName:"p"},"organizeImports")," feature of the TypeScript language service API via ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/prettier-plugin-organize-imports"},"prettier-plugin-organize-imports")),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React Context"),' provides a way to make certain state or prop values "global" to React applications or to portions of React apps. This is most commonly used when deeply nested components are present and "prop drilling", or passing props through many intermediate elements, is a maintenance and development burden. Prop drilling can be alleviated through a pattern of Context "providers" which provide access to data stored in Context objects that are then consumed by components that need the data, skipping prop drilling from intermediate elements. '),(0,o.kt)("p",null,"For example, we could have one ",(0,o.kt)("inlineCode",{parentName:"p"},"AppContext")," object for app-global data and add user data into it. If an ",(0,o.kt)("inlineCode",{parentName:"p"},"<AppContext.Provider>")," is wrapped around entire application, any component should be able to consume that user data like ",(0,o.kt)("inlineCode",{parentName:"p"},"const { uid } = useContext(AppContext)"),". We could also have a different provider wrapping only a portion of the application."),(0,o.kt)("p",null,"We can also abstract away pulling in ",(0,o.kt)("inlineCode",{parentName:"p"},"useContext")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AppContext")," for all consumers of ",(0,o.kt)("inlineCode",{parentName:"p"},"AppContext")," by creating a simple custom hook to do this for us. For example, in Settings, we created a custom hook like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export function useAccount() {\n  const { account } = useContext(AppContext);\n  if (!account) {\n    throw new Error('Are you forgetting an AppContext.Provider?');\n  }\n  return account;\n}\n")),(0,o.kt)("p",null,"This allows us to more simply pull in ",(0,o.kt)("inlineCode",{parentName:"p"},"useAccount")," and retrieve data with ",(0,o.kt)("inlineCode",{parentName:"p"},"const { uid } = useAccount();")," in consuming components, and additionally gives developers a clue when the expected value isn't present which is especially useful in testing."),(0,o.kt)("h3",{id:"pitfalls"},"Pitfalls"),(0,o.kt)("p",null,"Using Context isn't free. Every time the value of a Context object changes, any consumers of that component will rerender. Therefore, it should be used for pieces of data that update infrequently."),(0,o.kt)("p",null,"New Context Providers should be created with thoughtfulness to the ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html#before-you-use-context"},'"Before You Use Context"')," section of the React docs."),(0,o.kt)("p",null,"Additionally, consider consuming Context values in a parent component and passing those values down one level into child components rather than calling ",(0,o.kt)("inlineCode",{parentName:"p"},"useContext")," in every child component which can be heavy."))}c.isMDXComponent=!0}}]);