# Examples for [google-map-react library](https://github.com/google-map-react/google-map-react) &middot; [![Build Status](https://travis-ci.org/google-map-react/google-map-react-examples.svg?branch=master)](https://travis-ci.org/google-map-react/google-map-react-examples)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Stack

- [React](https://facebook.github.io/react) rendering
- [React-router](https://reacttraining.com/react-router/) for routing
- [Styled components](https://www.styled-components.com/) for styling our components

## Examples

- [Main](https://google-map-react.github.io/google-map-react-examples/default) ([source](https://github.com/google-map-react/google-map-react-examples/blob/master/src/examples/Main.js))
- [Heatmap](https://google-map-react.github.io/google-map-react-examples/heatmap) ([source](https://github.com/google-map-react/google-map-react-examples/blob/master/src/examples/Heatmap.js))
- [Searchbox](https://google-map-react.github.io/google-map-react-examples/searchbox) ([source](https://github.com/google-map-react/google-map-react-examples/blob/master/src/examples/Searchbox.js))
- [Autocomplete](https://google-map-react.github.io/google-map-react-examples/autocomplete) ([source](https://github.com/google-map-react/google-map-react-examples/blob/master/src/examples/Searchbox.js))
- [Marker and Info Window using React Component](https://google-map-react.github.io/google-map-react-examples/marker-info-window) ([source](https://github.com/google-map-react/google-map-react-examples/blob/master/src/examples/MarkerInfoWindow.js))
- [Marker and Info Window using Google Maps API Object](https://google-map-react.github.io/google-map-react-examples/marker-info-window-gmaps-obj) ([source](https://github.com/google-map-react/google-map-react-examples/blob/master/src/examples/MarkerInfoWindowGmapsObj.js))

## Getting started

### Installation

Although I prefer yarn, you can use either yarn or npm:

- `npm install` or simply `yarn`

### Run development

- `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### Run production build

- `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
By default, it also [includes a service worker](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app) so that your app loads from local cache on future visits.

Your app is ready to be deployed.

### Deploy to GH pages

- `npm run deploy` or `yarn deploy`

This will push a branch named `gh-pages` to the repository, which will be used by GH to render the latest version of our site.
