[![Build Status](https://travis-ci.org/itsmichaeldiego/google-map-react-examples.svg?branch=master)](https://travis-ci.org/itsmichaeldiego/google-map-react-examples)
# Examples for [google-map-react library](https://github.com/google-map-react/google-map-react)

`google-map-react` is a component written over a small set of the [Google Maps API](https://developers.google.com/maps/). It allows you to render any React component on the Google Map. It is fully isomorphic and can render on a server. Additionally, it can render map components in the browser even if the Google Maps API is not loaded. It uses an internal, tweakable hover algorithm - every object on the map can be hovered.

It allows you to create interfaces like this [example](http://itsmichaeldiego.github.io/google-map-react-examples/) *(You can scroll the table, zoom/move the map, hover/click on markers, and click on table rows)*

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
