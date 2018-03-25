import React, { Component}  from 'react';
import {
  Switch,
  Route,
  Router,
  BrowserRouter
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { history } from './redux-module';
import App from './App';

import {
  InstagramWidget,
  NotFound,
} from './components';

class DefaultRoute extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div></div>
    );
  }
}

const MyRouter = () => (
  <Router history={history}>
    <div>
      <App history={history}>
        <Switch>
          <Route path='/' component={DefaultRoute} />
          <Route component={NotFound.Page} />
        </Switch>
      </App>
    </div>
  </Router>
);

export default MyRouter;
