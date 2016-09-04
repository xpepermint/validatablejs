![Build Status](https://travis-ci.org/xpepermint/validatablejs.svg?branch=master)&nbsp;[![NPM Version](https://badge.fury.io/js/validatable.svg)](https://badge.fury.io/js/validatable)&nbsp;[![Dependency Status](https://gemnasium.com/xpepermint/validatablejs.svg)](https://gemnasium.com/xpepermint/validatablejs)

# validatable.js

> A library for synchronous and asynchronous validation.

## Install

```
$ npm install --save validatable
```

## Example

```js
await validate(
  'John Smith',
  {
    presence: {
      message: 'must be present'
    },
    blockValue: {
      block: async (value, definition) => value === 'cool',
      message: 'must be `cool`'
    }
  },
  {
    validateAll: true
  }
); // -> ['must be `cool`']
```

## API

**validate(value, config, {all, format}, context);**

> Validates value against the provided validator. Depends on the type of validator, the method return a value or a promise.

| Option | Type | Required | Description
|--------|------|----------|------------
| value | - | Yes | A value to validate.
| config | Object | Yes | A configuration object with validators.
| allErrors | Boolean | No | Set to `true` to return all error messages otherwise only the first error is returned.
| errorFormat | Function | No | A method for constructing a custom error message.
| context | Object | No | A context to apply to each validator.

```js
validate(
  '192.168.1.1',
  {
    presence: {message: 'is required'},
    stringIP: {version: 6, message: 'invalid V6 IP'}
  },
  {
    allErrors: true,
    errorFormat: (value, definition) => ({message: definition.message})
  }
); // -> [{message: 'invalid V6 IP'}]
```

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
