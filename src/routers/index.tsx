import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Detail } from "../pages/detail";
import { Home } from "../pages/home";
export const DefaultRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <Detail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
