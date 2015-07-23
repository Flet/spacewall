module.exports = spacewall

var apod = require('apod')
var fs = require('fs')
var path = require('path')
var req = require('request')
var tmp = require('os-tmpdir')()
var wallpaper = require('wallpaper')

function spacewall (opts) {
  opts = opts || {}

  apod.apiKey = opts.key || process.env.NASA_API_KEY || 'DEMO_KEY'

  if (opts.random) {
    apod.random(processApod)
  } else {
    apod(processApod)
  }

  function processApod (err, data) {
    if (err) {
      console.error(err)
      return
    }

    var dest = path.join(tmp, path.parse(data.url).base)
    req(data.url).pipe(fs.createWriteStream(dest))

    wallpaper.set(dest, function (err) {
      if (err) console.error(err)
    })

    if (!opts.silent) outputData(data)
  }

  function outputData (data) {
    if (opts.title) {
      console.log(data.title)
      return
    }

    if (opts.json) {
      console.log(data)
      return
    }

    console.log(data.title)
    console.log(data.explanation)

    if (apod.apiKey === 'DEMO_KEY') {
      console.log('*** Get your NASA developer key to avoid rate limits!')
      console.log('*** https://api.nasa.gov/api.html#authentication')
    }

  }
}
