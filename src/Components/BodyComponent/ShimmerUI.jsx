import React from "react";

const ShimmerUI = () => {
  return (
    <div>
      {Array(10)
        .fill("")
        .map((e) => (
          <div className="shimmer"></div>
        ))}
    </div>
  );
};

export default ShimmerUI;
