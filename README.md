# @zoroaster/zarathustra

[![npm version](https://badge.fury.io/js/@zoroaster/zarathustra.svg)](https://npmjs.org/package/@zoroaster/zarathustra)

`@zoroaster/zarathustra` is A serverless test runner.

```sh
yarn add -E @zoroaster/zarathustra
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`zarathustra(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`Config`](#type-config)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import zarathustra from '@zoroaster/zarathustra'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `zarathustra(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-config">`Config`</a>__: Options for the program.

|   Name    |   Type    |    Description    | Default |
| --------- | --------- | ----------------- | ------- |
| shouldRun | _boolean_ | A boolean option. | `true`  |
| __text*__ | _string_  | A text to return. | -       |

```js
/* yarn example/ */
import zarathustra from '@zoroaster/zarathustra'

(async () => {
  const res = await zarathustra({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Context Testing][1] 2018

[1]: https://contexttesting.com

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>