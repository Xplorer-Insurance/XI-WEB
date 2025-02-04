import { Paper } from "@mantine/core";
import styled from "styled-components";

export const Navbar = styled(Paper)`
  position: absolute;
  width: 255px;
  margin-top: 50px;
  height: calc(100vh - 100px);
  background-color: #CBD1CE;
  border-radius: 0px 40px 40px 0px;
  color: white;
  padding: 40px;
  overflow-y: auto;
  z-index: 1000;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LogoImage = styled.img`
  width: 100%;
  height: auto;
  margin: 16px 0px 50px -5px;
  cursor: pointer;
`