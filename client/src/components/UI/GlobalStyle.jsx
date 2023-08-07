import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @media (min-width: 1200px) {
      body {
          max-width: 1200px;
          margin: 0 auto;
        }
      }
`;

export default GlobalStyle;
