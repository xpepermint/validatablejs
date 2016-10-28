![Build Status](https://travis-ci.org/xpepermint/validatablejs.svg?branch=master)&nbsp;[![NPM Version](https://badge.fury.io/js/validatable.svg)](https://badge.fury.io/js/validatable)&nbsp;[![Dependency Status](https://gemnasium.com/xpepermint/validatablejs.svg)](https://gemnasium.com/xpepermint/validatablejs)

# validatable.js

> A library for synchronous and asynchronous validation.

## Install

```
$ npm install --save validatable
```

## Example

```js
import {Validator} from 'validatable';

let v = new Validator({
  firstErrorOnly: true,
  errorBuilder: async (name, value, {message}) => ({name, message}), // for custom error messages
  validators: { // custom validators (will be merged with built-in validators; existing validators can be overridden)
    coolness: async (value, definition) => value === 'cool'
  },
  context: null // context is applied to each validator
});

let errors = await v.validate(
  'John Smith',
  {
    presence: { // built-in validator name
      message: 'must be present' // error message (can be a function)
    },
    coolness: { // custom validator name
      message: 'must be cool' // error message (can be a function)
    }
  }
); // -> [{name: 'presence', message: 'must be present'}]
```

## API

**Validator(options)**

> A core validation class.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| firstErrorOnly | Boolean | No | false | When set to `true`, only the first error is returned otherwise all validation errors are returned.
| errorBuilder | Function/Promise | No | (name, value, {message}) => message | A method for constructing a custom validation error message.
| validators | Object | No | built-in validators | Object with custom validators (this variable is merged with built-in validators thus you can override a validator key if you need to).
| context | Object | No | null | A custom context reference which is applied to each validator method.

**Validator.prototype.validate(value, definitions):Boolean;**

> Validates a value against the provided options.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| value | Any | Yes | - | A value to validate.
| definitions | Object | Yes | - | A configuration object describing validations.

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

#### blockValue

> Validates the specified field against the provided block function. If the function returns true then the field is treated as valid.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| block | Function | Yes | - | Synchronous or asynchronous function (e.g. `async () => true`)

```js
let definition = {
  block: async (value, definition) => true,
  message: 'must be present'
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

#### stringCreditCard

> Validates that the specified field is a credit card number.

#### stringDate

> Validates that the specified field is a date string.

| Option | Type | Required | Default | Description
|--------|------|----------|----------|-----------
| format | String | No | - | Date format (possible value is `iso8601`).

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

#### stringIP

> Validates that the specified field is an IP.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| version | Integer | No | - | IP version (4 or 6).

#### stringISBN

> Validates that the specified field is an [International Standard Book Number](https://en.wikipedia.org/wiki/International_Standard_Book_Number).

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| version | Integer | No | - | IP version (10 or 13).

#### stringISIN

> Validates that the specified field is an [International Securities Identification](https://en.wikipedia.org/wiki/International_Securities_Identification_Number).

#### stringJSON

> Validates that the specified field is a stringified JSON string.

#### stringLength

> Validates the length of the specified field.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| min | Number | No | 0 | Minimum number of characters.
| max | Number | No | - | Maximum number of characters.

#### stringLowercase

> Validates that the specified field is lowercase.

#### stringMACAddress

> Validates that the specified field is a MAC address.

#### stringMatch

> Validates that the specified field matches the pattern.

| Key | Type | Required | Default | Description
|-----|------|----------|---------|------------
| pattern | String | Yes | - | Regular expression pattern.
| modifiers | String | No | - | Regular expression modifiers.

#### stringUppercase

> Validates that the specified field is uppercase.

#### stringURL

> Validates that the specified field is an URL.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| protocols | Array | No | ['http', 'https', 'ftp'] | List of known protocols (e.g. http, https, ftp).
| requireTld | Boolean | No | true | Require top-level domain name.
| requireProtocol | Boolean | No | true | Require URL protocol.
| requireValidProtocol | Boolean | No | true | Require a valid protocol.
| allowUnderscores | Boolean | No | false | Allow using underscores.
| allowTrailingDot | Boolean | No | false | Allow trailing dot.
| allowProtocolRelativeUrls | Boolean | No | false | Allow protocol relative urls (e.g. //foobar.com)

#### stringUUID

> Validates that the specified field is a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| version | Integer | No | - | UUID version (3, 4 or 5).

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
