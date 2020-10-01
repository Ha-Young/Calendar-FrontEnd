import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }

  * {
    box-sizing: content-box;
  }

  h5 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  a:link {
    color: black;
    text-decoration: none;
  }

  a:visited {
    color: black;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    text-align: center;
  }
`;
