import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
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
          <li>Kart</li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
