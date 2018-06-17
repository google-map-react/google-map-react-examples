import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// styles
import './index.css';

// components
import App from './App';
import Main from './modules/Main';

// utils
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact component={Main} path="/" />
        <Route component={Main} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'),
);
registerServiceWorker();
