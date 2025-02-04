import React from "react";
import { createHashRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Users } from "../pages/users/Users";
import { Layout } from "../components/layout/Layout";

export const createRouter = () => {
  return createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/usuarios",
          element: <Users />,
        },
      ],
    },
  ]);
};
