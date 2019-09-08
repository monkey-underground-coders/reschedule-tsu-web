import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "#/components/AppWrapper";
import Application from "#/components/Application";

it("renders root components without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <AppWrapper>
      <Application />
    </AppWrapper>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
