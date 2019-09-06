import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFaculties } from "#/engine/actions/schedule";
import { routes, AppRoute } from "#/mappings/routes_app";
import { Route, Switch } from "react-router";

interface ApplicationProps {
  fetchFaculties: () => Promise<void>;
}

const Application = (props: ApplicationProps) => {
  useEffect(() => {
    props.fetchFaculties();
  }, []);

  const appRoutes = routes.map((route: AppRoute) => <Route {...route} />);

  return <Switch>{appRoutes}</Switch>;
};

const mapDispatchToProps = {
  fetchFaculties,
};

export default connect(
  null,
  mapDispatchToProps,
)(Application);
