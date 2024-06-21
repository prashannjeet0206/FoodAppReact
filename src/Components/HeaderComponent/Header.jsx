import React from "react";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Kart</li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
