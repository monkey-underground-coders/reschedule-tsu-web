import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import store from "#/engine/store";
import history from "#/engine/history";

export interface AppWrapperProps {
  children: any;
}

const AppWrapper = ({ children }: AppWrapperProps) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>{children}</React.Fragment>
    </ConnectedRouter>
  </Provider>
);

export default AppWrapper;
