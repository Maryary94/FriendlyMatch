import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import "./App.css";

import Login from "./views/Auth/Login";
import SignUp from "./views/Auth/SignUp";

function App() {
  return (
    <Switch>
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route path="/SignUp" exact render={(props) => <SignUp {...props} />} />
      {/* <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route path="/login" exact render={(props) => <Login {...props} />} /> */}
      <Route
        path="/"
        exact
        render={(props) => <div>Isto é a apresentação do projecto (Home)</div>}
      />
      <Redirect to="/" />
    </Switch>
  );
}

export default withRouter(App);
