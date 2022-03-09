# configs

ESLint config & Prettier config for my personal projects.

## Eslint config

[![npm](https://img.shields.io/npm/v/@hongbusi/eslint-config)](https://npmjs.com/package/@hongbusi/eslint-config)

### Install

``` bash
yarn add eslint @hongbusi/eslint-config -D
```

### Config `.eslintrc`

``` json
{
  "extends": [
    "@hongbusi"
  ]
}
```

### Config `.eslintignore`

``` txt
dist
public
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint \"**/*.{vue,ts,js}\""
  }
}
```

建议不要在使用 `eslint` 的时候再去使用 `prettier`。这个配置已经做了相当多的格式化 lint，把剩下的灵活性和样式留给开发人员。

## Prettier Config

[![npm](https://img.shields.io/npm/v/@hongbusi/prettier-config)](https://npmjs.com/package/@hongbusi/prettier-config)

### Install

``` bash
yarn add prettier @hongbusi/prettier-config -D
```

### Extend this config

In `package.json`:

``` json
{
  "prettier": "@hongbusi/prettier-config"
}
```