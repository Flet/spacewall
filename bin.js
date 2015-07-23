#!/usr/bin/env node
var fs = require('fs')
var argv = require('minimist')(process.argv.slice(2), {
  boolean: ['help', 'random', 'latest', 'version'],
  alias: {
    j: 'json',
    k: 'key',
    r: 'random',
    l: 'latest',
    h: 'help',
    s: 'silent',
    t: 'title',
    v: 'version'
  }
})

if (argv.help) {
  fs.readFile('usage.txt', {encoding: 'utf8'}, function (err, usage) {
    if (err) console.err(err)
    console.log(usage, fetchVersion())
    process.exit(0)
  })
}

if (argv.version) {
  console.log(fetchVersion())
  process.exit(0)
}

function fetchVersion () {
  var pkg = require('./package.json')
  return pkg.version
}

var spacewall = require('./spacewall.js')

spacewall(argv)
