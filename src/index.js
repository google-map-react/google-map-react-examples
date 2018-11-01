import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

// examples:
import Home from './Home';
import Main from './examples/Main';
import SearchBox from './examples/Searchbox';

// styles
import './index.css';

// components
import App from './App';

// utils
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Router>
      <App>
        <Switch>
          <Route exact path={process.env.REACT_APP_BASE_PATH} component={Home} />
          {/* New examples here */}
          <Route path="/default" component={Main} />
          <Route path="/searchbox" component={SearchBox} />
          <Redirect exact from="*" to={process.env.REACT_APP_BASE_PATH} />
        </Switch>
      </App>
    </Router>
  </div>,
  document.getElementById('root'),
);

registerServiceWorker();
