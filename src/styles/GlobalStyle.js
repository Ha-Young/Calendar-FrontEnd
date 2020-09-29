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
`;
