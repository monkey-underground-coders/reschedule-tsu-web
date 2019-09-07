import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchFaculties } from "#/engine/actions/schedule";
import { routes, AppRoute } from "#/mappings/routes_app";
import { Route, Switch } from "react-router";
import Sidebar from "../Sidebar";

const renderedRoutes = (() => {
  const appRoutes = routes.map((route: AppRoute) => <Route {...route} />);
  return <Switch>{appRoutes}</Switch>;
})();

interface ApplicationProps {
  fetchFaculties: () => Promise<void>;
}

const Application = (props: ApplicationProps) => {
  const [sidebarActive, setSidebarActive] = useState(true);

  useEffect(() => {
    props.fetchFaculties();
  }, []);

  return (
    <div className="wrapper skin-white">
      <Sidebar active={sidebarActive} />

      <div className="schedule">{renderedRoutes}</div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchFaculties,
};

export default connect(
  null,
  mapDispatchToProps,
)(Application);
