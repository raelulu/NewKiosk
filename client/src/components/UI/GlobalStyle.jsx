import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'SUITE-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

*{
  font-family: 'SUITE-Regular';
}

    @media (min-width: 1200px) {
      body {
          max-width: 1200px;
          margin: 0 auto;
        }
      }
`;

export default GlobalStyle;
