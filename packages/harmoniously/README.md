# harmoniously

Provides utilities to make scheduling easy while using constraint satisfaction techniques.

<a href="https://www.npmjs.com/package/harmoniously"><img alt="npm" src="https://img.shields.io/npm/v/harmoniously"></a>
<a href="" disabled><img src="https://img.shields.io/badge/node-%3E%3D10-blue.svg?cacheSeconds=2592000" alt="node >= 10"></a>
<a href="https://www.npmjs.com/package/harmoniously"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/harmoniously"></a>

## Use

install [via npm](https://www.npmjs.com/package/harmoniously):

```sh
npm i harmoniously
```

## API

_Coming Soon_

## Commands

TSDX scaffolds your new library inside `/src`.

To run TSDX, use:

```bash
npm start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build`.

To run tests, use `npm test`.

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of your library with `npm run size` and visualize the bundle with `npm run analyze`.

## Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)
