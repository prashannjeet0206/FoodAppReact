import React from "react";
import { Img_Url } from "../Constants/Constant";

const Restaraunt = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  locality,
}) => {
  return (
    <>
      <div className="card">
        <img src={Img_Url + cloudinaryImageId} alt="" className="cardImg" />
        <h2>{name}</h2>
        <h3>{avgRating}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h5>{locality}</h5>
      </div>
    </>
  );
};

export default Restaraunt;
