# @harmoniously/react

React component and `useHarmony` hook for [`harmoniously`](https://www.npmjs.com/package/harmoniously).

<a href="https://www.npmjs.com/package/@harmoniously/react"><img alt="npm" src="https://img.shields.io/npm/v/@harmoniously/react"></a>
<a href="" disabled><img src="https://img.shields.io/badge/node-%3E%3D10-blue.svg?cacheSeconds=2592000" alt="node >= 10"></a>
<a href="https://www.npmjs.com/package/@harmoniously/react"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@harmoniously/react"></a>

## Use

install [via npm](https://www.npmjs.com/package/@harmoniously/react):

```sh
npm i @harmoniously/react
```

## API

_Coming Soon_

## Development

### Commands

TSDX scaffolds your new library inside `/src`, and also sets up a [Parcel-based](https://parceljs.org) playground for it inside `/example`.

The recommended workflow is to run TSDX in one terminal:

```bash
npm start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run either Storybook or the example playground:

#### Storybook

Run inside another terminal:

```bash
yarn storybook
```

This loads the stories from `./stories`.

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

#### Example

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**, we use [Parcel's aliasing](https://parceljs.org/module_resolution.html#aliases).

To do a one-off build, use `npm run build`.

To run tests, use `npm test`.

#### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

### Continuous Integration

#### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [size-limit](https://github.com/ai/size-limit)

### Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.
