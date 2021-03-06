# always-callback [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Create callback api for given sync function. Guarantee that given function (sync or async, no matter) will always have callback api and will handle errors correctly.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i always-callback --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

- `<fn>` **{Function}** function to transform
- `return` **{Function}** async function that must have callback

> It is useful for control-flow and hybrid APIs

**Example**

```js
var fs = require('fs')
var alwaysCallback = require('always-callback')

// if sync function given, transform it to async
var parse = alwaysCallback(JSON.parse)
var stringify = alwaysCallback(JSON.stringify)
var readFile = alwaysCallback(fs.readFileSync)

// if asynchronous function given, it remains async
var statFile = alwaysCallback(fs.stat)

parse('{"foo":"bar"}', function (err, res) {
  console.log(err) //=> null
  console.log(res) //=> { foo: 'bar' }
})

stringify({foo: 'bar', baz: 'qux'}, null, 2, function (err, res) {
  //=> it would prettify and stringify json
  console.log(err) //=> null
  console.log(res)
  //=> {
  //   "foo": "bar",
  //   "baz": "qux"
  // }
})

readFile('./package.json', 'utf8', function (err, res) {
  console.log(err) //=> null
  console.log(res) //=> { name: 'always-callback', ... }
})

statFile('./package.json', function (err, res) {
  console.log(err) //=> null
  console.log(res) //=> { dev: 64770, mode: 33204, ... }
})
```


## Related
- [make-callback](https://github.com/tunnckocore/make-callback): Make synchronous function to support callback api
- [handle-callback](https://github.com/hybridables/handle-callback): Initial step for creating hybrid APIs, used by `hybridify`. Handle callback in promise - give promise and callback return promise.
- [handle-arguments](https://github.com/hybridables/handle-arguments): Handles given Arguments object - return separatly last argument (commonly callback) and other arguments as Array. Useful in node-style callback flow.
- [manage-arguments](https://github.com/tunnckocore/manage-arguments): Prevents arguments leakage - managing arguments. From Optimization killers by Petka Antonov.
- [is-async-function](https://github.com/tunnckocore/is-async-function): Check that given function is async (callback) function or not. Trying to guess that based on check if `callback` or `cb` exists in function arguments.
- [is-sync-function](https://github.com/tunnckocore/is-sync-function): Opposite of `is-async-function`. Check that given function is synchronous.
- [is-empty-function](https://github.com/tunnckoCore/is-empty-function): Checks the given function (or fn.toString()) is with empty body - dont have body.




## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/always-callback/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/always-callback
[npmjs-img]: https://img.shields.io/npm/v/always-callback.svg?label=always-callback

[license-url]: https://github.com/tunnckoCore/always-callback/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/always-callback
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/always-callback.svg

[travis-url]: https://travis-ci.org/tunnckoCore/always-callback
[travis-img]: https://img.shields.io/travis/tunnckoCore/always-callback.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/always-callback
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/always-callback.svg

[david-url]: https://david-dm.org/tunnckoCore/always-callback
[david-img]: https://img.shields.io/david/tunnckoCore/always-callback.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
