import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  html,
  body {
    font-size: 62.5%;
    box-sizing: border-box;
    min-width: 375px;
    border:0;
    padding:0;
    margin: 0;
  }

  * {
    font-family: AppleSDGothicNeo, "Apple SD Gothic Neo", Roboto, sans-serif;
  }

  html, body, div, span, h1, h2, h3, h4, h5, h6, p,
  a, dl, dt, dd, ol, ul, li, form, label, table {
    margin: 0 auto;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  
  button {
    background-color: transparent;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    -webkit-tap-highlight-color : transparent;
  }

  ol, ul {
    list-style: none;
  }

  a, a:visited {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
