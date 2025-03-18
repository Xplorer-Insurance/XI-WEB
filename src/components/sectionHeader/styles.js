import { Button, Flex } from "@mantine/core";
import styled from "styled-components";

export const Header = styled(Flex)`
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
`;

export const StyledButton = styled(Button)`
  /* width: 250px; */
  height: 40;
  color: #49726C;
  background-color: #F0F3F4;
  padding: 0;
  padding-left: 20px;
  border: 1px solid #49726C;
  transition: all 0.3s;
  border-radius: 10px;

  &:hover {
    color: #49726C;
    background-color: #D1D5DB;
    border: 1px solid #49726C;
    transition: background-color 0.3s;
  }
`

export const StyledBackButton = styled(Button)`
  color: #49726C;
  background-color: transparent;
  padding: 0px 0px;
  padding-right: 20px;
  border: none;
  transition: all 0.3s;
  border-radius: 10px;

  &:hover {
    color: #49726C;
    background-color: transparent;
    border: none;
    transition: background-color 0.3s;
  }
`

export const StyledRightSectionContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: #49726C;
  padding: 5px 10px;
  margin-left: 10px;
  width: 100%;
  border-radius: 0px 8px 8px 0px;
`

export const StyledSectionTitle = styled.h2`
  font-size: 24px;
  color: #49726C;
`