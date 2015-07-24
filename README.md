# spacewall

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/spacewall.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/spacewall
[travis-image]: https://img.shields.io/travis/flet/spacewall.svg?style=flat-square
[travis-url]: https://travis-ci.org/flet/spacewall

Set your wallpaper to the NASA Astronomy Photo of the Day and output
information about the image.

## Install

```
npm install -g spacewall
```

## CLI Usage

### Set your wallpaper to the current day's APOD:
```bash
spacewall
```

### ...To a random image
```
spacewall --random
```

### Full Usage

```
  Usage:
      spacewall <flags>

  Flags:
      -k  --key       Provide your NASA developer key (recommended!)
      -l  --latest    Fetch the latest APOD image (default)
      -r  --random    Pick a random image from the archive
      -s  --silent    Suppress all text output
      -t  --title     Output only the title of the image
      -j  --json      Show information as JSON
      -h, --help      Show usage information.
      -v  --version   Show current version.

  By Default, spacewall will use DEMO_KEY. Its limited to 30 requests per hour
  and 50 requests per day.

  Get your own NASA developer key at:
  https://api.nasa.gov/api.html#authentication

  The API key can also be set via the environment variable NASA_API_KEY.
```

## Programmatic Usage

`spacewall` was built primarily as a CLI program, but it can be `require`'d and used directly as well!

```js
var spacewall = require('spacewall')
spacewall({
  key: 'MY_API_KEY',
  latest: true, // default
  random: false,
  silent: false,
  title: false,
  json: false
})
```
Each option works as described in the CLI usage.

## NASA API Developer key
`spacewall` is set up to use the `DEMO_KEY`, which is rate-limited to 30 requests per hour and 50 requests per day. Go [sign up](https://api.nasa.gov/api.html#authentication) for your on NASA API developer key to avoid these limits.

Also, you can tell people "I'm authorized to use NASA's API, no big deal." and they will surely be impressed.

## Fun Tricks

On Ubuntu (and maybe other Linux flavors), this command can be added to a `.profile` to change the wallpaper to a random image and send a notification to the UI with the title:
```bash
notify-send -i computer  "$(spacewall --random --title)
```

Are you using `spacewall` in a fun way? Add your Fun Trick here via a PR!

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
