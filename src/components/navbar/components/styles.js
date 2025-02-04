import { Box } from "@mantine/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SideLinkContainer = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 7px 0px;
  border-bottom: 1px solid #49726C;
`

export const StyledLink = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 7px;
  width: 100%;
  padding: 7px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${({ active }) => (active ? "#49726C" : "transparent")};
  svg {
    position: relative;
    top: -2px;
    color: ${({ active }) => (active ? "white" : "#49726C")};
    transition: color 0.3s;
  }
  p {
    font-size: 18px;
    color: ${({ active }) => (active ? "white" : "#49726C")};
    text-decoration: none;
    transition: color 0.3s;
  }
  &:hover {
    background-color: #49726C;
    transition: background-color 0.3s;
    p {
      color: white;
      transition: color 0.3s;
    }
    svg {
      color: white;
      transition: color 0.3s;
    }
  }
`