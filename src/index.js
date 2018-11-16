import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

// examples:
import Home from './Home';
import Main from './examples/Main';
import SearchBox from './examples/Searchbox';
import Autocomplete from './examples/Autocomplete';

// styles
import './index.css';

// components
import App from './App';

// utils
import registerServiceWorker from './registerServiceWorker';

const defaultPath = process.env.REACT_APP_BASE_PATH;

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path={defaultPath} component={Home} />
        {/* New examples here */}
        <Route path={`${defaultPath}default`} component={Main} />
        <Route path={`${defaultPath}searchbox`} component={SearchBox} />
        <Route path={`${defaultPath}autocomplete`} component={Autocomplete} />
        <Redirect exact from="*" to={defaultPath} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'),
);

registerServiceWorker();
