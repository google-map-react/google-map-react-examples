import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

// examples:
import Main from './examples/Main';

// styles
import './index.css';

// components
import App from './App';

// utils
import registerServiceWorker from './registerServiceWorker';

const BASE_PATH = '/google-map-react-examples/';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path={BASE_PATH} component={Main} />
        {/* New examples here */}
        <Redirect exact from="*" to={BASE_PATH} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'),
);

registerServiceWorker();
