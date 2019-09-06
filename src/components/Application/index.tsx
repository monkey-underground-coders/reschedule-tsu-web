import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StoreState, Faculty } from "#/engine/types";
import { fetchFaculties } from "#/engine/actions/schedule";

interface ApplicationProps {
  faculties: Faculty[];
  fetchFaculties: any;
}

const Application = (props: ApplicationProps) => {
  useEffect(() => {
    props.fetchFaculties();
  }, []);

  const renderedFaculties = props.faculties.map((faculty: Faculty, index: number) => {
    return <div key={index}>{faculty}</div>;
  });

  return (
    <div>
      <h1>Reschedule</h1>
      <div className="faculties-list">{renderedFaculties}</div>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  faculties: state.schedule.faculties,
});

const mapDispatchToProps = {
  fetchFaculties,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application);
