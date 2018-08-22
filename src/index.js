import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
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
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'),
);

registerServiceWorker();
