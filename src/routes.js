import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
}
