/*!
 * always-callback <https://github.com/tunnckoCore/always-callback>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isAsyncFn = require('is-async-function')
var makeCallback = require('make-callback')

module.exports = function alwaysCallback (fn) {
  if (isAsyncFn(fn)) {
    return fn
  }

  return makeCallback(fn)
}
