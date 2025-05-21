---
title: Node Style Guide
---

Current as of `January 18, 2023`

## Code Standards

These code standards apply to new packages in the FxA monorepo, such as:

- `packages/fxa-graphql-api`
- `packages/fxa-event-broker`

Most of the standards in the code is enforced with [Prettier][2] and [ESLint][1].

### Style

We use the [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html#source-organization) for our base code style.

Code should also follow the [Do's and Don'ts of TypeScript](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html).

### Structure

#### Software Architecture

The FxA repository uses [Nx](https://nx.dev/) to manage its monorepo, with a hybrid structure of legacy [package-based repos](https://nx.dev/concepts/integrated-vs-package-based#package-based-repos) while new applications and libraries are handled as if part of an [integrated repo](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos). New libraries and applications should use a layered architecture separating domain logic from data access, keeping these libraries separate from application specific presentation logic (see [PresentationDomainDataLayering](https://martinfowler.com/bliki/PresentationDomainDataLayering.html) for additional background).

From **bottom-up**, these layers should approximately map to:

- Data Access - Database query code and types, Redis client/functions, Paypal client, Firestore client, etc. (following a [Repository](https://martinfowler.com/eaaCatalog/repository.html) style pattern).
- Data Mapper - Domain/Feature specific logic around the Data Access layer, enforcing domain specific logic that returns its own types and errors, separating domain object logic from the underlying data store and access. These typically appear in the code-base as `*Manager` classes.
- Domain Objects - Higher level business logic around a specific domain, they may utilize multiple data mappers or other domain objects. An example of a domain object would be a class that handles business logic about a customers subscription or is responsibile for loading, saving, and deleting accounts.
- Services - NestJS specific Service classes that orchestrate multiple domain objects for a given domain/feature. An example would be an account service utilizing the account domain object, as well as other domain objects to trigger relying party notifications around account actions, sending email regarding an account state change, etc. Services will frequently be assembled in a heirarchy and require other services to perform their function.

#### Organize by Feature

(This is [present in the Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html#organize-by-feature), but bears repeating)

Code should be organized by feature, not by type.

Don't:

```
app/
├── controllers/
│   └── auth.ts
├── models/
│   └── auth.ts
├── validators/
│   └── auth.ts
```

Do:

```
app/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.model.ts
│   └── auth.validator.ts
```

If a feature has many DTOs, models, etc., a hybrid approach may be used, organized by feature first:

```
app/
├── auth/
│   ├── dto/
│   ├── model/
│   |   └── auth.model.ts
│   ├── auth.controller.ts
│   └── auth.validator.ts
```

Tests should be organized alongside the code being tested, with the `.spec.ts` suffix or `.in.spec.ts` for integration tests:

```
app/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.controller.spec.ts
│   ├── auth.controller.in.spec.ts
```

##### Config

If your feature requires configuration, add a config file to the folder, and make use of `class-validator` for schema validation.

```
app/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.config.ts
```

`class-validator` example:
```typescript
import { IsString } from 'class-validator';

export class DBConfig {
  @IsString()
  public readonly dbPath!: string;
}
```

#### NestJS File Naming Conventions

##### File Naming for Class

```typescript
export class PascalCaseSuffix {} //= pascal-case.suffix.ts
// Except for suffix, PascalCase to hyphen-case
class FooBarNaming {} //= foo-bar.naming.ts
class FooController {} //= foo.controller.ts
// These are both DTO's, which the package namespace should reflect rather than
// adding DTO to every class name and file name.
class BarQueryInput {} //= dto/bar-query.input.ts
class BarResultPayload {} //= dto/bar-result.payload.ts

abstract class BaseAccount {} //= baseAccount.ts
```

#### Interface and Abstract Naming

- Avoid prefixing with `I` or `Interface`, as this impacts readability and the type of object is separate from the name.
- Don't include `Abstract` in the name of abstract classes, as this is the type. Prefer `Base` or `Default` prefix.

```typescript
interface User {}
interface CustomUser extends User {}
interface ThirdCustomUser extends CustomUser {}
abstract class BaseAccount {}
```

#### Enum Naming

- Always use PascalCase for your enum keys
- Prefer Enums over `as const` notation on an object

```typescript
enum Example {
  PropertyOne = 'abc',
  PropertyTwo = 'abc2',
}
```

#### Index Exporting

1. It is recommended to place index.ts in each folder and export. Unless it's a special case, it is imported from a folder instead of directly from a file.

Don't:

```typescript
import { FooController } from './feature/foo.controller';
import { BarController } from './feature/bar.controller';
```

Do:

```typescript
import { FooController, BarController } from './feature';
```

2. Preferred method is to place only one file or folder name at the end of the path.

Don't:

```typescript
import { UtilService } from '../common/providers/util.service';
```

Do:

```typescript
import { UtilService } from '../common';
```

### TypeScript

#### Types

All types of a feature should be co-located with the rest of the files.

```
app/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.types.ts
```

#### Tests

All tests should be written in TypeScript. Tests should utilize factory functions, added to a separate `*.factories.ts` file, to generate objects for testing. Generating additional fake data for factory functions can be done with the `faker` library.

```
app/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.types.ts
│   ├── auth.factories.ts
```

Example:

```typescript
export interface User {
  id: string;
  name: string;
  email: string;
}
```

```typescript
import { faker } from '@faker-js/faker';
import { User } from './auth.types.ts'

export const UserFactory = (override: Partial<User>): User => ({
  id: faker.datatype.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  ...override,
});
```

#### Never use Type Asserts

Type asserts should not be used in any situation. Instead, use one of the following options:

1. Check if the variable is null/undefined, and if so throw an error

Do:

```typescript
function example(arg?: string) {
  if (typeof arg !== 'string') {
    throw new Error('arg is required for example');
  }

  // arg is now of type 'string'
}
```

Don't:

```typescript
function example(arg?: string) {
  return arg!.substring(0, 20);
}
```

2. Return early if it matches the desired behavior

Do:

```typescript
function example(arg?: string) {
  if (!arg) return;

  // arg is now of type 'string'
}
```

3. Fallback to a default

Do:

```typescript
const DEFAULT_VALUE = 'example';

function example(arg?: string) {
  const argWithDefault = arg || DEFAULT_VALUE;

  // argWithDefault is of type 'string'
}
```

4. Narrow the type with conditions

Do:

```typescript
interface MyType {
  prop: string;
}
interface AnotherType {
  prop2: string;
}
function otherFunc(): MyType | AnotherType;

function example(): MyType {
  const result = otherFunc();

  if (!('prop' in result)) throw new Error('result was of an unexpected type');

  // result is now of type MyType
  return result;
}
```

Don't:

```typescript
function example(): MyType {
  const result = otherFunc();
  return result as unknown as MyType;
}
```

#### Use `satisfies`

Prior to TypeScript 4.9, new literal objects could be identified as a type, but would not be narrowed. Our code uses TypeScript 4.9 or greater, so [`satisfies`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator) should be preferred.

Don't:

```typescript
interface Vibe {
  mood: 'happy' | 'sad';
}

const vibe: Vibe = {
  mood: 'happy',
  // (property) Vibe.mood: "happy" | "sad"
};

vibe.mood;
// (property) mood: "happy" | "sad"
```

Do:

```typescript
interface Vibe {
  mood: 'happy' | 'sad';
}

const vibe = {
  mood: 'happy',
  // (property) Vibe.mood: "happy" | "sad"
} satisfies Vibe;

vibe.mood;
// (property) mood: "happy"
```

See [additional examples of using `satisfies`](https://www.learningtypescript.com/articles/the-satisfies-operator).

## Legacy Code Packages

### Style

Legacy code has no defined style-guide beyond that enforced by ESLint.

[ESLint][1] configuration is provided for each legacy package which enforces its requirements, it will be run by default during `git commit`.

[Prettier][2] is used to format the code.

### Structure

A structural convention separates route handling code from library code by prefixing the route handlers with `routes`.

Tests are located in a file hierarchy that mirrors the code being tested, for example a file in a package called:

`fxa-auth-server/lib/bounces.js`

Has a corresponding test at:

`fxa-auth-server/tests/local/bounces.js`

### Async/Await

Some legacy code packages may still have callbacks and/or promises in use. New code should use async/await syntax.

### TypeScript

Packages that have TypeScript in them should have all new files created with TypeScript. Legacy code tests are all in JavaScript, and will remain that way until fully deprecated.

[1]: https://eslint.org/
[2]: https://prettier.io/
