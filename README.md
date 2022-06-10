# TypeScript npx Template with Parcel

[![Package Publish](https://github.com/HuakunShen/typescript-npx-parcel-template/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/HuakunShen/typescript-npx-parcel-template/actions/workflows/npm-publish.yml)

[![Test Building](https://github.com/HuakunShen/typescript-npx-parcel-template/actions/workflows/test-build.yml/badge.svg)](https://github.com/HuakunShen/typescript-npx-parcel-template/actions/workflows/test-build.yml)


[![npm version](https://badge.fury.io/js/ts-npx-parcel-template.svg)](https://badge.fury.io/js/ts-npx-parcel-template)

[![Number of Downloads](https://img.shields.io/npm/dt/ts-npx-parcel-template)](https://www.npmjs.com/package/ts-npx-parcel-template)

## How To Run?

```bash
npx ts-npx-parcel-template
npx ts-npx-parcel-template@latest # if you don't get the latest version
```

## Setup

```bash
npm i
```

## Development

Method 2 and 3 support auto-reload.

### Method 1

`npm start:ts`: run `index.ts` directly using `ts-node`

### Method 2

`npm run dev`: run `index.ts` with `ts-node` and `nodemon`

### Method 3

`npm run watch`: build automatically

`npm run start`: run produced JS file

## Production Build

`npm run build`

`"bin": "dist/index.cjs"` in `package.json` specifies where the npx executable is.

## Publish

Update `"version"` in `package.json`.

```bash
npm login
npm publish
```


