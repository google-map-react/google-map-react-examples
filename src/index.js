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

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Main} />
        {/* New examples here */}
        <Redirect exact from="*" to="/" />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'),
);

registerServiceWorker();
