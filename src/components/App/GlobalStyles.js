import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  button {
    background-color: #FFFFFF;
    border: none;
    outline: none;
    padding: 0.2em;

    &:hover {
      background-color: #EEEEEE;
      cursor: pointer;
    }
  }
`;

export default GlobalStyles;
