# retrying

[![NPM Version][npm-image]][npm-url]
[![Node Version][node-image]][node-url]

retry a function

## Installation

```bash
npm i retrying -S
```

## Usage

```typescript
import retry from 'retrying';
// for commonjs -> const retry = require('retrying').default;

function test() {
  throw new Error('12123');
  // return 1;
}

retry(test, { delay: 1000 })
  .then((ret) => {
    console.log(ret);
  })
  .catch((err) => {
    console.error(err);
  });
```

## Examples

examples are listed at [examples](https://github.com/cooperhsiung/retrying/tree/master/examples)

## Todo

- [ ] xx

## License

MIT

[npm-image]: https://img.shields.io/npm/v/retrying.svg
[npm-url]: https://www.npmjs.com/package/retrying
[node-image]: https://img.shields.io/badge/node.js-%3E=8-brightgreen.svg
[node-url]: https://nodejs.org/download/
