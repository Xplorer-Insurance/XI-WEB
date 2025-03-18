import { Button } from "@mantine/core";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`

export const StyledButton = styled(Button)`
  /* width: 250px; */
  height: 40;
  color: #49726C;
  background-color: #F0F3F4;
  padding: 0px 20px;
  border: 1px solid #49726C;
  transition: all 0.3s;
  border-radius: 10px;
  margin-top: 20px;

  &:hover {
    color: #49726C;
    background-color: #D1D5DB;
    border: 1px solid #49726C;
    transition: background-color 0.3s;
  }
  &:focus, &:active {
    outline: none; 
    box-shadow: none;
  }
`