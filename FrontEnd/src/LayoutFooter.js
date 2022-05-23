import React from "react";
import Footer from "./modules/components/FooterGlobal";
import { useHistory } from "react-router-dom";

function LayoutFooter(props) {
  const history = useHistory();
  return (
    <>
      <Footer history={history} />
      {props.children}
    </>
  );
}

export default LayoutFooter;
