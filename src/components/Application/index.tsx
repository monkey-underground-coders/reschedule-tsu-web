import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StoreState } from "#/engine/types";
import { fetchFaculties } from "#/engine/actions/schedule";

interface ApplicationProps {
  fetchFaculties: any;
}

const Application = (props: ApplicationProps) => {
  useEffect(() => {
    props.fetchFaculties(123);
  }, []);
  return <div>App</div>;
};

const mapStateToProps = (state: StoreState) => ({});
const mapDispatchToProps = {
  fetchFaculties,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application);
