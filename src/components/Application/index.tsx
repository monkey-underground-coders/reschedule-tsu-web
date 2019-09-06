import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StoreState } from "#/engine/types";
import { fetchSchedule } from "#/engine/actions/schedule";

interface ApplicationProps {
  fetchSchedule: any;
}

const Application = (props: ApplicationProps) => {
  useEffect(() => {
    props.fetchSchedule(123);
  }, []);
  return <div>App</div>;
};

const mapStateToProps = (state: StoreState) => ({});
const mapDispatchToProps = {
  fetchSchedule,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application);
