# TypeScript npx Template with Parcel

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


