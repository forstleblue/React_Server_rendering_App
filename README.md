# NFL Test App

This project list Nfl players.
## Features

- [**React**](https://reactjs.org/) 16.6.3
- [**React-Router**](https://www.npmjs.com/package/react-router) 4.2.0
- Server-side rendering with [**React Router**](https://github.com/ReactTraining/react-router) 4.x.
- [**Redux**](http://redux.js.org/) predictable state containers.
- Hot reloading using [**Webpack HMR**](https://webpack.js.org/concepts/hot-module-replacement/).
- [**Webpack 3**](https://webpack.js.org/) for both development and production bundles.
- [**Express**](http://expressjs.com/) 4.x server.

## Quickstart

```
git clone https://github.com/forstleblue/React_Server_rendering_App.git your_app
cd your_app
npm install
npm run start
```

## Available Commands

`npm run start` - starts the development server.
Oen http://localhost:3000/
`npm run eslint` Run eslint

## File Structure

### Webpack Config

Webpack for bundling modules. Configuration file is `webpack.config.js`

### Server

It uses Express framework.

If `NODE_ENV` is development, we apply Webpack middlewares for bundling and Hot Module Replacement.

### Client

The `app` directory contains all the shared components, routes and reducers.
`action` folder have all actions for fetching data.
`reducers` folder have app holds app state
`routes` have all routing for this app
`store` for redux store
The `server` runs node js server


