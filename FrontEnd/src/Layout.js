import React from "react";
import Header from "./modules/components/HeaderGlobal";
import { useHistory } from "react-router-dom";

function Layout(props) {
  const history = useHistory();
  return (
    <>
      <Header history={history} />
      {props.children}
    </>
  );
}

export default Layout;
