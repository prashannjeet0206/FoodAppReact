import React from "react";
import { useParams } from "react-router-dom";

const Menu = () => {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <h1>Menu</h1>
      <p>Paul's Kitchen</p>
      <p>Id:{id}</p>
    </div>
  );
};

export default Menu;
