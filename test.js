/*!
 * always-callback <https://github.com/tunnckoCore/always-callback>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var test = require('assertit')
var alwaysCallback = require('./index')

test('always-callback:', function () {
  test('should throw TypeError if not a function given', function (done) {
    function fixture () {
      alwaysCallback(12345)
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /is-async-function expect a function/)
    done()
  })
  test('should throw TypeError when not callback given to returned async fn', function (done) {
    function fixture () {
      var JSONParse = alwaysCallback(JSON.parse)
      JSONParse('{"foo":"bar"}')
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /async `fn` .* expect a callback/)
    done()
  })
  test('should JSON.parse(obj) and pass result to callback', function (done) {
    var JSONParse = alwaysCallback(JSON.parse)

    JSONParse('{"foo":"bar"}', function (err, res) {
      test.ifError(err)
      test.deepEqual(res, {foo: 'bar'})
      done()
    })
  })
  test('should JSON.parse(obj) and pass error to callback', function (done) {
    var JSONParse = alwaysCallback(JSON.parse)

    JSONParse('foo~bar~baz', function (err, res) {
      test.ifError(!err)
      test.equal(err.message, 'Unexpected token o')
      test.equal(res, undefined)
      done()
    })
  })
  test('should fs.readFileSync(fp, utf8) and pass result to callback', function (done) {
    var readFile = alwaysCallback(fs.readFileSync)

    readFile('./package.json', 'utf8', function (err, res) {
      test.ifError(err)
      test.ok(res.indexOf('tunnckoCore/always-callback') !== -1)
      done()
    })
  })
  test('should fs.readFileSync(fp, utf8) and pass error to callback', function (done) {
    var readFile = alwaysCallback(fs.readFileSync)

    readFile('./pacfsdfsdfdfkage.json', 'utf8', function (err, res) {
      test.ifError(!err)
      test.ok(err)
      test.equal(err.code, 'ENOENT')
      test.equal(err.syscall, 'open')
      test.equal(err.path, './pacfsdfsdfdfkage.json')
      test.equal(res, undefined)
      done()
    })
  })
  test('should fs.stat(fp) and pass result to callback', function (done) {
    var readFile = alwaysCallback(fs.stat)

    readFile('./package.json', function (err, res) {
      test.ifError(err)
      test.ok(res.isFile())
      done()
    })
  })
  test('should fs.stat(fp) and pass error to callback', function (done) {
    var readFile = alwaysCallback(fs.stat)

    readFile('./packasdfsdfge.json', function (err, res) {
      test.ifError(!err)
      test.ok(err)
      test.equal(err.code, 'ENOENT')
      // test.equal(err.syscall, 'stat') fails on node 1.0 and below
      test.equal(err.path, './packasdfsdfge.json')
      test.equal(res, undefined)
      done()
    })
  })
  test('should fs.readFile(fp, utf8) and pass result to callback', function (done) {
    var readFile = alwaysCallback(fs.readFile)

    readFile('./package.json', 'utf8', function (err, res) {
      test.ifError(err)
      test.ok(res.indexOf('tunnckoCore/always-callback') !== -1)
      done()
    })
  })
  test('should fs.readFile(fp, utf8) and pass error to callback', function (done) {
    var readFile = alwaysCallback(fs.readFile)

    readFile('./package1235678.json', 'utf8', function (err, res) {
      test.ifError(!err)
      test.ok(err)
      test.equal(err.code, 'ENOENT')
      // test.equal(err.syscall, 'open') fails on node 1.0 and below
      test.equal(err.path, './package1235678.json')
      test.equal(res, undefined)
      done()
    })
  })
})
