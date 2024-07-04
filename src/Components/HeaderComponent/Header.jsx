import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../Utils/store";
import { addItems } from "../Utils/cartSlice";

const HeaderComponent = () => {
  const cartSlice = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(addItems("chickoo"));
  }
  return (
    <div className="header">
      <img
        src="https://th.bing.com/th/id/OIP.Vb1XOVvFFz84zFewqUa8GgHaHa?rs=1&pid=ImgDetMain"
        alt="logo"
        className="logo"
      />
      <nav className="nav">
        <ul className="restList">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Kart{cartSlice.length}</li>
          <Link to="/mart">
            <li>InstaMart</li>
          </Link>
          <button onClick={handleClick}>Add</button>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
