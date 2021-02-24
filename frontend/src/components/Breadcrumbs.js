import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Breadcrumbs = (props) => {
  const { breadcrumbs } = props;

  return (
    <ul className="breadcrumbs">
      {breadcrumbs.map((breadcrumb, idx) => {
        return <li key={idx}>{breadcrumb.name}</li>;
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const { breadcrumbs } = state.items;

  return { breadcrumbs };
};

export default connect(mapStateToProps)(withRouter(Breadcrumbs));
