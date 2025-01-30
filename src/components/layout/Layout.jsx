// components/Layout.jsx
import React from "react";
import styled from "styled-components";
import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../navbar/Navbar";

const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Main = styled(Box)`
  flex: 1;
  background-color: transparent;
  color: white;
  overflow-y: auto;
`;

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Sidebar />

      <Main>
        <Outlet />
      </Main>
    </LayoutWrapper>
  );
};
