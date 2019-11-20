# @wm.madfaa/eslint-config

It lints your typescript projects with ease, based on the popular code style

## Features

-  prettier support, thanks to [eslint-plugin-prettier](prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)
- with [react](https://reactjs.org/), [react-hooks](https://reactjs.org/docs/hooks-intro.html)
  and [jest](https://jestjs.io/) support

## Installation

The default export contains all default Airbnb ESLint rules, including
ECMAScript 6+, and the ones listed below. It requires some peerDependencies as
well.

Install the package with

```sh
npm install @wm.madfaa/eslint-config --save-dev

# or
yarn add @wm.madfaa/eslint-config -D
```

Then install the correct versions of each peerDependency package, which are
listed by the command:

```sh
npm info "@wm.madfaa/eslint-config@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```sh
npx install-peerdeps --dev @wm.madfaa/eslint-config

# or
yarn add @wm.madfaa/eslint-config -D --peer
```

## Usage

Now add the config to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@wm.madfaa/eslint-config"
  }
}
```

to your `.eslintrc`:

```json
{
  "extends": "@wm.madfaa/eslint-config"
}
```

or `.eslintrc.js`:

```js
module.exports = {
  extends: '@wm.madfaa/eslint-config',
}
```
