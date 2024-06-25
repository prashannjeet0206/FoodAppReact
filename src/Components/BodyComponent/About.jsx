import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const AboutUS = () => {
  return (
    <div>
      <h1>About-us</h1>
      <Profile name={"Prashannjeet"} />
    </div>
  );
};

export default AboutUS;
