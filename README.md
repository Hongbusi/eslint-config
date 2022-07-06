# @hongbusi/eslint-config

[![npm](https://img.shields.io/npm/v/@hongbusi/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@hongbusi/eslint-config)

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- TypeScript, Vue, React out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install

```bash
pnpm add -D eslint @hongbusi/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@hongbusi"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Suggest

I am not a fan of using eslint and prettier together. This config already doing quite some formatting lint and I would prefer to leave the rest of flexibility and styling to human.

## License

MIT
