import React from "react";
import { render } from "react-dom";
import AppWrapper from "#/components/AppWrapper";
import Application from "#/components/Application";
import "#/styles/index.scss";

// import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");
const DOMElement = (
  <AppWrapper>
    <Application></Application>
  </AppWrapper>
);

render(DOMElement, rootElement);
// serviceWorker.unregister();
