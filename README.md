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
  errorBuilder: async (value, definition) => ({message: definition.message}),
  validators: {
    coolness: async (value, definition) => value === 'cool'
  },
  context: null
});

let errors = v.validate(
  'John Smith',
  {
    presence: {
      message: 'must be present'
    },
    coolness: {
      message: 'must be cool'
    }
  }
); // -> [{message: 'must be present'}]
```

## API

**Validator(options)**

> A core validation class.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| firstErrorOnly | Boolean | No | false | When set to `true`, only the first error is returned otherwise all validation errors are returned.
| errorBuilder | Function|Promise | No | (value, {message}) => message | A method for constructing a custom validation error message.
| validators | Object | No | Object with custom validators (this variable is merged with built-in validators thus you can override a validator key if you need to).
| context | Object | No | A custom context reference which is applied to each validator method.

**Validator.prototype.validate(value, definitions):Boolean;**

> Validates a value against the provided options.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| value | Any | Yes | - | A value to validate.
| definitions | Object | Yes | - | A configuration object describing validations.

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
