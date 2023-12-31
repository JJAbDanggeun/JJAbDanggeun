import { createGlobalStyle } from "styled-components";
import LondrinaBlack from "./fonts/Londrina_Solid/LondrinaSolid-Black.ttf";
import LondrinaRegular from "./fonts/Londrina_Solid/LondrinaSolid-Regular.ttf";
import LondrinaLight from "./fonts/Londrina_Solid/LondrinaSolid-Light.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "LondrinaBlack";
    src: local('LondrinaBlack'), local('LondrinaBlack');
    font-style: normal;
    src: url(${LondrinaBlack}) format('truetype');
  }
  @font-face {
    font-family: "LondrinaRegular";
    src: local('LondrinaRegular'), local('LondrinaRegular');
    font-style: normal;
    src: url(${LondrinaRegular}) format('truetype');
  }
  @font-face {
    font-family: "LondrinaLight";
    src: local('LondrinaLight'), local('LondrinaLight');
    font-style: normal;
    src: url(${LondrinaLight}) format('truetype');
  }
`;