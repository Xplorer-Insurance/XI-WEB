import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }
  :root{
    --black: #0d0d0d;
    --white:  #ededed;
    --pink: #da1090;
    --lightBlue: #0afffb;
    --red: #ff0000;
    --green: #00ff2a ;
    --yellow: #ffea00;
    --darkGrey: #474440;
    --beige: #f0efea;
    --lightGrey: #83807c;
  }

  *::-webkit-scrollbar{
    width: 0px;
    visibility: visible;
  }
  *::-webkit-scrollbar-track{
    background: inherit;
  }
  *::-webkit-scrollbar-thumb{
    border-radius: 20px;
    background: var(--darkGrey);
  }

  html{
    scroll-behavior: smooth;
    overflow-x: hidden;
  }


`;
