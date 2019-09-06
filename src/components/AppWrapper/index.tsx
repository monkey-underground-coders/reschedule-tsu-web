import React from "react";
import { Provider } from "react-redux";
import store from "#/engine/store";
import history from "#/engine/history";

export interface AppWrapperProps {
  children: any;
}

const AppWrapper = ({ children }: AppWrapperProps) => (
  <Provider store={store}>
    <React.Fragment>{children}</React.Fragment>
  </Provider>
);

export default AppWrapper;
