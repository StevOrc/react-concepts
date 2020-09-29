import React, { Fragment } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  HocContainer,
  NavBar,
  NotFound,
  ContextContainer,
  AxiosDymaContainer,
  AxiosMoshConatiner,
} from "../src/components";

function App() {
  return (
    <Fragment>
      <NavBar />
      <main className="container-fluid">
        <Switch>
          <Route path="/hoc" component={HocContainer} />
          <Route path="/context" component={ContextContainer} />
          <Route path="/axios-dyma" component={AxiosDymaContainer} />
          <Route path="/axios-mosh" component={AxiosMoshConatiner} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/hoc" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
