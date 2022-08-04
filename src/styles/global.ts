import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  body {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyles;
