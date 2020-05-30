import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import './App.css';

import Login from './Views/Auth/Login';

function App() {
  return (
    <Switch>
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      {/* <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route path="/login" exact render={(props) => <Login {...props} />} /> */}
      <Route path="/" exact render={(props) => <div>Isto é o home</div>} />
      <Redirect to="/" />
    </Switch>
  );
}

export default withRouter(App);
