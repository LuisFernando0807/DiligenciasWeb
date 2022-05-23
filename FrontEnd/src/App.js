import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./modules/auth/screens/login/AuthLoginScreen";
import Menu from "./modules/components/MenuGlobal";
import ConsultaDiligencia from "./modules/client/components/QueryDiligenciaForm";
import Layout from "./Layout";
import LayoutFooter from "./LayoutFooter";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Layout>
          <Route exact path="/menu" component={Menu} />
          <br />
          <Route
            exact
            path="/consulta-diligencia"
            component={ConsultaDiligencia}
          />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
