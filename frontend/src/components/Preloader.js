import React from "react";
import { connect } from "react-redux";

const Preloader = (props) => {
  const { showPreloader } = props;
  return (
    <>
      {showPreloader && (
        <div className="Preloader">
          <img
            src={process.env.PUBLIC_URL + "/img/loading.svg"}
            alt="loading..."
          />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { showPreloader } = state.preloader;

  return { showPreloader };
};

export default connect(mapStateToProps)(Preloader);
