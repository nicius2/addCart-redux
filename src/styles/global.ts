import { createGlobalStyle } from "styled-components";

export const GlobalTheme = createGlobalStyle`
     * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
     }

     body {
          font-family: ${({theme}) => theme.font};
          margin: 8px 16px;
     }
`