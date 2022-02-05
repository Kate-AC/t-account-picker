import * as React from "react";
import ReactDOM from "react-dom";
require.context("../assets/scss/browser_action", true, /\.(sa|sc|c)ss$/);

const ConfigWindow = () => {
  return <></>;
}

(() => {
  ReactDOM.render(<ConfigWindow />, document.getElementById("root"));
})();