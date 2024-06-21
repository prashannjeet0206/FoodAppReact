import React from "react";
import ReactDom from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent/Header";
import BodyComponent from "./Components/BodyComponent/Body";

const AppLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
