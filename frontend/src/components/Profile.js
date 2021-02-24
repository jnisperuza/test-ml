import React from "react";

const Profile = () => {
  return (
    <div className="Profile">
      <a
        href="https://jnisperuza.github.io/#/home"
        target="_blank"
        rel="noreferrer"
      >
        <figure className="Profile__photo">
          <img
            src={process.env.PUBLIC_URL + "/img/profile.jpg"}
            alt="profile"
          />
        </figure>
        <span className="Profile__name">
          <p>Jeison</p>
          <img
            src={
              process.env.PUBLIC_URL + "/img/arrow-down-sign-to-navigate.png"
            }
            alt="navigate"
          />
        </span>
      </a>
    </div>
  );
};

export default Profile;
