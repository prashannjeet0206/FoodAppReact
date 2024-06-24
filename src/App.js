import React from "react";
import ReactDom from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent/Header";
import BodyComponent from "./Components/BodyComponent/Body";
import AboutUS from "./Components/BodyComponent/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./Components/BodyComponent/Error";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/BodyComponent/Contact";
import Menu from "./Components/BodyComponent/RestaurantMenu";

const AppLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <AboutUS />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu/:id",
        element: <Menu />,
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
