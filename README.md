# 🎶🔥 Harmoniously

> quickly create faculty schedules without conflict

## Background

This is the monoreposity for the Harmoniously project. The `packages/` directory contains all of the package source code. All packages are available via npm.

## Packages

### [`harmoniously`](./packages/harmoniously)

Provides utilities to make scheduling easy while using constraint satisfaction techniques

install [via npm](https://www.npmjs.com/package/harmoniously):

```sh
npm i harmoniously
```

<a href="https://www.npmjs.com/package/harmoniously"><img alt="npm" src="https://img.shields.io/npm/v/harmoniously"></a>
<a href="" disabled><img src="https://img.shields.io/badge/node-%3E%3D10-blue.svg?cacheSeconds=2592000" alt="node >= 10"></a>
<a href="https://www.npmjs.com/package/harmoniously"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/harmoniously"></a>

### [`@harmoniously/react`](./packages/harmoniously-react)

React component and `useHarmony` hook for [`harmoniously`](https://www.npmjs.com/package/harmoniously)

install [via npm](https://www.npmjs.com/package/@harmoniously/react):

```sh
npm i @harmoniously/react
```

<a href="https://www.npmjs.com/package/@harmoniously/react"><img alt="npm" src="https://img.shields.io/npm/v/@harmoniously/react"></a>
<a href="" disabled><img src="https://img.shields.io/badge/node-%3E%3D10-blue.svg?cacheSeconds=2592000" alt="node >= 10"></a>
<a href="https://www.npmjs.com/package/@harmoniously/react"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@harmoniously/react"></a>

### [`@harmoniously/shared`](./packages/harmoniously-shared)

Helpers for testing in development [`harmoniously`](https://www.npmjs.com/package/harmoniously)

install [via npm](https://www.npmjs.com/package/@harmoniously/shared):

```sh
npm i @harmoniously/shared
```

### [`@harmoniously/types`](./packages/harmoniously-shared)

Shared types for the [`harmoniously`](https://www.npmjs.com/package/harmoniously) packages

install [via npm](https://www.npmjs.com/package/@harmoniously/types):

```sh
npm i @harmoniously/types
```

## API

_coming soon. still a work in progress_

## Development

### Available Scripts

#### `npm i`

Install all deps and devDeps in main repo. (Use `npm run bootstrap` to install all deps in `packages/`.)

#### `npm run test`

Run all tests in packages.

#### `npm run bootstrap`

Bootstrap the packages by installing all their dependencies and linking any cross-dependencies.

#### `npm run build`

Build all of the packages.

## Used By

Calvin University
