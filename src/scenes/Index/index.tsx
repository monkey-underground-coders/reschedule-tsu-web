import React from "react";
import { fetchFaculties, getFacultyGroups } from "#/engine/actions/schedule";
import { StoreState, Faculty } from "#/engine/types";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";

interface IndexProps extends RouteComponentProps<any> {
  faculties: Faculty[];
  fetchFaculties: () => Promise<void>;
  getFacultyGroups: (faculty: Faculty) => Promise<void>;
}

const Index = (props: IndexProps) => {
  const getFacultyGroups = (faculty: Faculty) => {
    props
      .getFacultyGroups(faculty)
      .then(() => {
        // props.history.push("/");
      })
      .catch(() => {});
  };

  const renderedFaculties = props.faculties.map((faculty: Faculty, index: number) => {
    return (
      <div key={index} onClick={() => getFacultyGroups(faculty)}>
        {faculty}
      </div>
    );
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
  getFacultyGroups,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Index),
);
