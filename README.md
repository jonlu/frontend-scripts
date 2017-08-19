<h1 align="center">
  FrontEnd Scripts
 </h1>

<pre align="center">
  $ create-react-app my-app --scripts-version frontend-scripts
</pre>

FrontEnd Scripts makes it easy to spin up a react app with all of the functionality to be desired from the OG
[Create React App](https://github.com/facebookincubator/create-react-app).

## Quick Overview
```bash
create-react-app my-app --scripts-version frontend-scripts
cd my-app
npm start
```
Then open http://localhost:3000/ to see your app.
When you’re ready to deploy to production, create a minified bundle with `npm run build`, just like usual.

## What's new

### Bundled packages:
- [Redux](http://redux.js.org) & [Redux-Thunk](https://github.com/gaearon/redux-thunk)
- [Redux Devtools](https://github.com/gaearon/redux-devtools)
- [React Router v4](https://reacttraining.com/react-router/web/guides/philosophy)
- [Lodash](https://lodash.com/)

### Bundled configs:
- Hot Module Replacement for JS (CRA only supports hot reloading for CSS)
- Absolute path for everything under the `src` folder
  - Reduces the extra `../../` for imports
  - eg: `import SomeComponent from 'components/SomeComponent'`
- [Babel Transform Decorators](https://www.npmjs.com/package/babel-plugin-transform-decorators)
- [Babel React CSS Modules (configured for scss)](https://github.com/gajus/babel-plugin-react-css-modules)

### Bundled eye-candy:
- [Standard JS linting](https://standardjs.com)
- [Webpack Dashboard](https://github.com/FormidableLabs/webpack-dashboard)

## Breaking differences:

### babel-plugin-react-css-modules
This boilerplate adds support for CSS-Modules with an `scss` flavor.

*What this means*:
1. All imported `.scss` files are by default treated as local modules.
2. Styles are applied slightly differently:
  1. Use the `styleName` prop for a local style
  2. Use the `className` prop for a global style (`src/styles/global.scss`)

>Note: all .css files are treated as they normally would be.

Please refer to the original documentation for everything else:

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.
