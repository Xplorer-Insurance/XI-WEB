import React from "react";
import { createHashRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Users } from "../pages/users/Users";
import { Layout } from "../components/layout/Layout";
import { ImportUsers } from "../pages/import-users/ImportUsers";

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
        {
          path: "/import-users",
          element: <ImportUsers />,
        },
        {
          path: "*",
          element: <Navigate to={"/"}/>,
        }
      ],
    },
  ]);
};
