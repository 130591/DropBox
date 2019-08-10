import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

// ROUTES COMPONENTS
import Home from "./pages/home";
import Files from "./pages/box";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/files/:id" component={Files} />
      </Switch>
    </BrowserRouter>
  );
};
