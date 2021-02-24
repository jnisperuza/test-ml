import React from "react";
import { NavLink } from "react-router-dom";

const InformationPage = (props) => {
  const { message } = props;

  return (
    <div className="InformationPage">
      <img
        src={process.env.PUBLIC_URL + "/img/box.png"}
        alt="Information page :("
      />
      {message && <span>{message}</span>}
      <NavLink to="/">Ir al inicio</NavLink>
    </div>
  );
};

export default InformationPage;
