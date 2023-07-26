---
title: React Style Guide
---

Current as of `July 10, 2022`

## Introduction

This guide is based on the [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react) with minor adjustments to fit our implementations.

Note: When ever possible there should be an eslint rule enforcing the styles discussed in this guide.

## Basic Rules

- Only include one React component per file.
  - However, multiple Stateless, or Pure, Components are allowed per file. eslint: react/no-multi-comp.
- Always use TSX syntax.

## Hooks and Function Components over Class Components  

Regardless of whether or not the component has state, it is encouraged to always use function components over Class components except in rare instances where we need access to underlying lifecycle methods [unavailable to hooks](https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes).

If your component does have state, consider making use of the React provided [useState hook](https://reactjs.org/docs/hooks-state.html).

To perform any side effects, such as the React class lifecycle methods, make use of the [useEffect hook](https://reactjs.org/docs/hooks-effect.html).

### Custom Hooks

When you write stateful logic with hooks that you need to duplicate in another component, or you need to implement logic already present in another component, follow the DRY principle and extract it into a more generic "custom" hook. Components using a shared custom hook don't actually share state because all state and effects inside of each call are isolated, similar to using React hooks like `useState` across components.

:::info
Read the [React documentation on custom hooks](https://reactjs.org/docs/hooks-custom.html) for more explanations and examples.
:::

For example, we have multiple components in our codebase that need to execute something on escape keypress, like hiding a modal. We wrote the logic to "dismiss" a modal on keypress like so...

```jsx
// ... component setup and creation of a function called `onDismiss` that utilizes `useState` ...

useEffect(() => {
  const handler = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') {
      onDismiss();
    }
  };
  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
}, [onDismiss]);
```

This calls the function `onDismiss` when the `'Escape'` key is pressed. Because we later had multiple modals and other components that we want to execute a function on `'Escape'` keypress, to avoid copying and pasting this logic into every component it was extracted into `lib/hooks.tsx` with a slightly more generic function name to be executed:

```jsx
export function useEscKeydownEffect(onEscKeydown: Function) {
  useEffect(() => {
    const handler = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') {
        onEscKeydown();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onEscKeydown]);
}
```

Now each component can define its own function to be executed on this keypress, and we can easily use it across our components by passing in that function:

```jsx
// ... component setup and creation of a function called `onDismiss` that utilizes `useState` ...

useEscKeydownEffect(onDismiss);
```

Custom hook extraction also eliminates duplicate tests since tests can be written for the hook instead of testing similar logic across various components.

If `hooks.tsx` grows to be too large, consider storing them in a `hooks/` directory instead.

## Mixins

[Do not use mixins](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html).

Why? Mixins introduce implicit dependencies, cause name clashes, and cause snowballing complexity. Most use cases for mixins can be accomplished in better ways via components, higher-order components, or utility modules.

## Naming

This is a copy of what can be found in the [Airbnb styleguide](https://airbnb.io/javascript/react/#naming).

- Extensions: Use .tsx extension for React components.
- Filename: Use PascalCase for filenames. E.g., ReservationCard.tsx.
- Reference Naming: Use PascalCase for React components and camelCase for their instances. eslint: `react/jsx-pascal-case`

```javascript
// bad
import reservationCard from './ReservationCard';

// good
import ReservationCard from './ReservationCard';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
```

- Component Naming: Use the filename as the component name. For example, ReservationCard.tsx should have a reference name of ReservationCard. However, for root components of a directory, use index.tsx as the filename and use the directory name as the component name:

```javascript
// bad
import Footer from './Footer/Footer';

// bad
import Footer from './Footer/index';

// good
import Footer from './Footer';
```

- Higher-order Component Naming: Use a composite of the higher-order component’s name and the passed-in component’s name as the displayName on the generated component. For example, the higher-order component withFoo(), when passed a component Bar should produce a component with a displayName of withFoo(Bar).
  - Why? A component’s displayName may be used by developer tools or in error messages, and having a value that clearly expresses this relationship helps people understand what is happening.

```javascript
// bad
export default function withFoo(WrappedComponent) {
  return function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }
}

// good
export default function withFoo(WrappedComponent) {
  function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  WithFoo.displayName = `withFoo(${wrappedComponentName})`;
  return WithFoo;
}
```

- Props Naming: Avoid using DOM component prop names for different purposes.
  - Why? People expect props like style and className to mean one specific thing. Varying this API for a subset of your app makes the code less readable and less maintainable, and may cause bugs.

```javascript
// bad
<MyComponent style="fancy" />

// bad
<MyComponent className="fancy" />

// good
<MyComponent variant="fancy" />
```

## Alignment

- Follow these alignment styles for JSX syntax. eslint: `react/jsx-closing-bracket-location` `react/jsx-closing-tag-location`

```javascript
// bad
<Foo superLongParam="bar"
     anotherSuperLongParam="baz" />

// good
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

// if props fit in one line then keep it on the same line
<Foo bar="bar" />

// children get indented normally
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Quux />
</Foo>

// bad
{showButton &&
  <Button />
}

// bad
{
  showButton &&
    <Button />
}

// good
{showButton && (
  <Button />
)}

// good
{showButton && <Button />}

// good
{someReallyLongConditional
  && anotherLongConditional
  && (
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    />
  )
}

// good
{someConditional ? (
  <Foo />
) : (
  <Foo
    superLongParam="bar"
    anotherSuperLongParam="baz"
  />
)}
```

## Quotes

- Always use double quotes (") for JSX attributes, but single quotes (') for all other JS. eslint: `jsx-quotes`
  - Why? Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.

```javascript
// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />

// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />
```

## Spacing

- Always include a single space in your self-closing tag. eslint: `no-multi-spaces`, `react/jsx-tag-spacing`

```javascript
// bad
<Foo/>

// very bad
<Foo                 />

// bad
<Foo
 />

// good
<Foo />
```

- Do not pad JSX curly braces with spaces. eslint: `react/jsx-curly-spacing`

```javascript
// bad
<Foo bar={ baz } />

// good
<Foo bar={baz} />
```

## Props

- Always use camelCase for prop names.

```javascript
// bad
<Foo
  UserName="hello"
  phone_number={12345678}
/>

// good
<Foo
  userName="hello"
  phoneNumber={12345678}
/>
```

- Omit the value of the prop when it is explicitly true. eslint: `react/jsx-boolean-value`

```javascript
// bad
<Foo
  hidden={true}
/>

// good
<Foo
  hidden
/>

// good
<Foo hidden />
```

- Always include an alt prop on `<img>` tags. If the image is presentational, alt can be an empty string or the `<img>` must have role="presentation". eslint: `jsx-a11y/alt-text`

```javascript
// bad
<img src="hello.jpg" />

// good
<img src="hello.jpg" alt="Me waving hello" />

// good
<img src="hello.jpg" alt="" />

// good
<img src="hello.jpg" role="presentation" />
```

- Do not use words like “image”, “photo”, or “picture” in `<img>` alt props. eslint: `jsx-a11y/img-redundant-alt`
  - Why? Screenreaders already announce img elements as images, so there is no need to include this information in the alt text.

```javascript
// bad
<img src="hello.jpg" alt="Picture of me waving hello" />

// good
<img src="hello.jpg" alt="Me waving hello" />
```

- Use only valid, non-abstract ARIA roles. eslint: jsx-a11y/aria-role

```javascript
// bad - not an ARIA role
<div role="datepicker" />

// bad - abstract ARIA role
<div role="range" />

// good
<div role="button" />
```

- Do not use accessKey on elements. eslint: `jsx-a11y/no-access-key`
  - Why? Inconsistencies between keyboard shortcuts and keyboard commands used by people using screenreaders and keyboards complicate accessibility.

```javascript
// bad
<div accessKey="h" />

// good
<div />
```

- Avoid using an array index as key prop, prefer a stable ID. eslint: `react/no-array-index-key`
  - Why? Not using a stable ID [is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318) because it can negatively impact performance and cause issues with component state.

```javascript  
// bad
{todos.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}

// good
{todos.map(todo => (
  <Todo
    {...todo}
    key={todo.id}
  />
))}
```

- Use spread props sparingly.
  - Why? Otherwise you’re more likely to pass unnecessary props down to components. And for React v15.6.1 and older, you could [pass invalid HTML attributes to the DOM](https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html).

Exceptions:

- Spreading objects with known, explicit props. This can be particularly useful when testing React components with Mocha’s beforeEach construct.

```javascript
export default function Foo {
  const props = {
    text: '',
    isPublished: false
  }

  return (<div {...props} />);
}
```

Notes for use: Filter out unnecessary props when possible. Also, use `prop-types-exact` to help prevent bugs.

```javascript
// good
function Example(props) {
  const { irrelevantProp, ...relevantProps  } = props;
  return <WrappedComponent {...relevantProps} />
}

// bad
function Example(props) {
  return <WrappedComponent {...props} />
}
```

- Whenever we pass a value in via a prop that matches the name of the prop, we should prefer `{...{ propName }}` syntactic sugar. It looks nicer, is more readable, and is slightly easier to update later.

```javascript
// bad
<MyComponent foo={foo} />

// good
<MyComponent {...{ foo }} />

// bad
<MyComponent foo={foo} bar={bar} baz={baz} />

// good
<MyComponent {...{ foo, bar, baz }} />
```

- Whenever we render a `className` on a component, or really anything that's going to cause a property to render on a DOM element, we should NOT make the default value an empty string anywhere in the component tree, but it should be `undefined` instead. This is because those properties will render on those DOM elements unnecessarily.

```javascript
// bad
<div className="" /> // renders <div class=" "></div>

// good
<div className={undefined} /> // renders <div></div>
```

## Refs

Pretty much use what Airbnb has. Are there other things we can include?

- Always use ref callbacks. eslint: `react/no-string-refs`

```javascript
// bad
<Foo
  ref="myRef"
/>

// good
<Foo
  ref={(ref) => { this.myRef = ref; }}
/>
```

## Parentheses

- Wrap JSX tags in parentheses when they span more than one line. eslint: `react/jsx-wrap-multilines`

```javascript
// bad
function Example() {
  return <MyComponent variant="long body" foo="bar">
           <MyChild />
         </MyComponent>;
}

// good
function Example() {
  return (
    <MyComponent variant="long body" foo="bar">
      <MyChild />
    </MyComponent>
  );
}

// good, when single line
function Example() {
  const body = <div>hello</div>;
  return <MyComponent>{body}</MyComponent>;
}
```

## Wrapping

Use a React fragment, e.g. `<></>`, instead of a generic element wrapper like `<div>` when returning elements that don't need a DOM wrapper to prevent unnecessary DOM elements from being rendered

```javascript
// bad
function Example() {
  return (
    <div>
      <h1>Foo</h1>
      <p>Bar</p>
    </div>
  )
}

// good
function Example() {
  return (
    <>
      <h1>Foo</h1>
      <p>Bar</p>
    </>
  )
}
```

## Tags

- Always self-close tags that have no children. eslint: `react/self-closing-comp`

```javascript
// bad
<Foo variant="stuff"></Foo>

// good
<Foo variant="stuff" />
```

- If your component has multi-line properties, close its tag on a new line. eslint: `react/jsx-closing-bracket-location`

```javascript
// bad
<Foo
  bar="bar"
  baz="baz" />

// good
<Foo
  bar="bar"
  baz="baz"
/>
```

## Methods

- Use arrow functions to close over local variables. It is handy when you need to pass additional data to an event handler. Although, make sure they [do not massively hurt performance](https://www.bignerdranch.com/blog/choosing-the-best-approach-for-react-event-handlers/), in particular when passed to custom components that might be PureComponents, because they will trigger a possibly needless rerender every time.

```javascript
function ItemList(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <Item
          key={item.key}
          onClick={(event) => { doSomethingWith(event, item.name, index); }}
        />
      ))}
    </ul>
  );
}
```

## Ordering

Ordering for function components.

1. State variables using the useState hook
1. Side effects using the useEffect hook
1. Render

## Import organizing

Your file imports should be organized using the `organizeImports` feature of the TypeScript language service API via [prettier-plugin-organize-imports](https://www.npmjs.com/package/prettier-plugin-organize-imports)

## Context

[React Context](https://reactjs.org/docs/context.html) provides a way to make certain state or prop values "global" to React applications or to portions of React apps. This is most commonly used when deeply nested components are present and "prop drilling", or passing props through many intermediate elements, is a maintenance and development burden. Prop drilling can be alleviated through a pattern of Context "providers" which provide access to data stored in Context objects that are then consumed by components that need the data, skipping prop drilling from intermediate elements. 

For example, we could have one `AppContext` object for app-global data and add user data into it. If an `<AppContext.Provider>` is wrapped around entire application, any component should be able to consume that user data like `const { uid } = useContext(AppContext)`. We could also have a different provider wrapping only a portion of the application.

We can also abstract away pulling in `useContext` and `AppContext` for all consumers of `AppContext` by creating a simple custom hook to do this for us. For example, in Settings, we created a custom hook like so:

```jsx
export function useAccount() {
  const { account } = useContext(AppContext);
  if (!account) {
    throw new Error('Are you forgetting an AppContext.Provider?');
  }
  return account;
}
```
This allows us to more simply pull in `useAccount` and retrieve data with `const { uid } = useAccount();` in consuming components, and additionally gives developers a clue when the expected value isn't present which is especially useful in testing.

### Pitfalls

Using Context isn't free. Every time the value of a Context object changes, any consumers of that component will rerender. Therefore, it should be used for pieces of data that update infrequently.

New Context Providers should be created with thoughtfulness to the ["Before You Use Context"](https://reactjs.org/docs/context.html#before-you-use-context) section of the React docs.

Additionally, consider consuming Context values in a parent component and passing those values down one level into child components rather than calling `useContext` in every child component which can be heavy.