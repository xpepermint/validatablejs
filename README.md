![Build Status](https://travis-ci.org/xpepermint/validatablejs.svg?branch=master)&nbsp;[![NPM Version](https://badge.fury.io/js/validatable.svg)](https://badge.fury.io/js/validatable)&nbsp;[![Dependency Status](https://gemnasium.com/xpepermint/validatablejs.svg)](https://gemnasium.com/xpepermint/validatablejs)

# validatable.js

> A library for synchronous and asynchronous input validation.

This is a light weight open source package, written with [TypeScript](https://www.typescriptlang.org), for use on **server or in browser**. The source code is available on [GitHub](https://github.com/xpepermint/validatablejs) where you can also find our [issue tracker](https://github.com/xpepermint/validatablejs/issues).

## Related Projects

* [Contextable.js](https://github.com/xpepermint/contextablejs): Simple, unopinionated and minimalist framework for creating context objects with support for unopinionated ORM, object schemas, type casting, validation and error handling and more.
* [ObjectSchema.js](https://github.com/xpepermint/objectschemajs): Advanced schema enforced JavaScript objects.
* [Typeable.js](https://github.com/xpepermint/typeablejs): A library for checking and casting types.
* [Handleable.js](https://github.com/xpepermint/handleablejs): A library for synchronous and asynchronous error handling.

## Install

Run the command below to install the package.

```
$ npm install --save validatable
```

## Example

```js
import {Validator} from 'validatable';

let v = new Validator();

let e = await v.validate(
  'John Smith', // value to validate
  [ // list of validations
    {
      name: 'presence', // validator name
      message: 'must be present' // validator options
    }
  ]
); // -> list of ValidatorError instances or an empty array
```

See the `./tests` folder for details.

## API

**ValidationError(recipe, value, code)**

> Validation error class which holds information about the invalid value.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| recipe | Object | Yes | - | Validator recipe object.
| value | Any | Yes | - | The value which failed to pass the validation.
| code | Integer | No | 422 | Error status code.

**Validator({firstErrorOnly, validators, context})**

> A core validation class.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| firstErrorOnly | Boolean | No | false | When set to `true`, the validation stops after the first validation error.
| validators | Object | No | built-in validators | Object with custom validators (this variable is merged with built-in validators thus you can override a validator key if you need to).
| context | Object | No | null | A context reference which is applied to each validator method.

```js
import {Validator} from 'validatable';

let v = new Validator({
  firstErrorOnly: true,
  validators: {
    async coolness ({value, recipe}}) { return value === 'cool' } // custom validator
  },
  context: null
});
```

**Validator.prototype.createValidationError(value, recipe)**: ValidationError

> Validates a value against the provided options.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| value | Any | Yes | - | A value to validate.
| recipe | Object | No | null | A configuration object describing a validator.

**Validator.prototype.validate(value, recipes)**: Promise<Boolean>

> Validates a value against the provided options.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| value | Any | Yes | - | A value to validate.
| recipes | Array | Yes | [] | A configuration object describing validators.

```js
let value = 'John Smith';
let recipes = [
  {
    name: 'presence', // validator name
    message: 'must be present' // validation error message
  }
];
await v.validate(value, recipes);
```

### Built-in Validators

#### absence

> Validates that the specified field is blank.

#### arrayExclusion

> Validates that the specified field is not in an array of values.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| values | Array | Yes | - | Array of restricted values.

#### arrayInclusion

> Validates that the specified field is in an array of values.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| values | Array | Yes | - | Array of allowed values.

#### block

> Validates the specified field against the provided block function. If the function returns true then the field is treated as valid.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| block | Function,Promise | Yes | - | Synchronous or asynchronous function (e.g. `async () => true`)

```js
let recipe = {
  name: 'block',
  message: 'must be present',
  async block ({value, recipe}) { return true }
};
```

#### BSONObjectID

> Validates that the specified field is a valid hex-encoded representation of a [MongoDB ObjectID](http://docs.mongodb.org/manual/reference/object-id/).

#### numberSize

> Validates the size of a number.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| min | Number | No | - | Allowed minimum value.
| minOrEqual | Number | No | - | Allowed minimum value (allowing equal).
| max | Number | No | - | Allowed maximum value.
| maxOrEqual | Number | No | - | Allowed maximum value (allowing equal).

#### presence

> Validates that the specified field is not blank.

#### stringBase64

> Validates that the specified field is base64 encoded string.

#### stringDate

> Validates that the specified field is a date string.

| Option | Type | Required | Default | Description
|--------|------|----------|----------|-----------
| iso | Boolean | No | false | When `true` only ISO-8601 date format is accepted.

#### stringEmail

> Validates that the specified field is an email.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| allowDisplayName | Boolean | No | false | When set to true, the validator will also match `name <address>`.
| allowUtf8LocalPart | Boolean | No | false | When set to false, the validator will not allow any non-English UTF8 character in email address' local part.
| requireTld | Boolean | No | true | When set to false, email addresses without having TLD in their domain will also be matched.

#### stringExclusion

> Checks if the string does not contain the seed.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| seed | String | Yes | - | The seed which should exist in the string.

#### stringFQDN

> Validates that the specified field is a fully qualified domain name (e.g. domain.com).

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| requireTld | Boolean | No | true | Require top-level domain name.
| allowUnderscores | Boolean | No | false | Allow string to include underscores.
| allowTrailingDot | Boolean | No | false | Allow string to include a trailing dot.

#### stringHexColor

> Validates that the specified field is a hexadecimal color string.

#### stringHexadecimal

> Validates that the specified field is a hexadecimal number.

#### stringInclusion

> Checks if the string contains the seed.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| seed | String | Yes | - | The seed which should exist in the string.

#### stringJSON

> Validates that the specified field is a stringified JSON string.

#### stringLength

> Validates the length of the specified field.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| bytes | Boolean | No | false | When `true` the number of bytes is returned.
| min | Number | No | - | Allowed minimum number of characters.
| minOrEqual | Number | No | - | Allowed minimum value number of characters (allowing equal).
| max | Number | No | - | Allowed maximum number of characters.
| maxOrEqual | Number | No | - | Allowed maximum number of characters (allowing equal).

#### stringLowercase

> Validates that the specified field is lowercase.

#### stringMatch

> Validates that the specified field matches the pattern.

| Key | Type | Required | Default | Description
|-----|------|----------|---------|------------
| pattern | String | Yes | - | Regular expression pattern.
| modifiers | String | No | - | Regular expression modifiers.

#### stringUppercase

> Validates that the specified field is uppercase.

#### stringUUID

> Validates that the specified field is a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| version | Integer | No | - | UUID version (1, 2, 3, 4 or 5).

## License (MIT)

```
Copyright (c) 2016 Kristijan Sedlak <xpepermint@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
