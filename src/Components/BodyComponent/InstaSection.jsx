import React, { useState } from "react";

const InstaSection = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  function handleClickShow() {
    setIsVisible(true);
  }
  function handleClickHide() {
    setIsVisible(false);
  }
  return (
    <div className="about">
      <h3>{title}</h3>
      {isVisible ? (
        <button onClick={handleClickHide}>Hide</button>
      ) : (
        <button onClick={handleClickShow}>Show</button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

export default InstaSection;
