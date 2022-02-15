# @hongbusi/eslint-config

<!-- [![npm](https://img.shields.io/npm/v/@hongbusi/eslint-config)](https://npmjs.com/package/@hongbusi/eslint-config) -->

## Usage

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

### Config VSCode auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
