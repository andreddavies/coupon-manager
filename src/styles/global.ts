import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    ::after,
    ::before {
      box-sizing: border-box;
    }
  }

  :root h1,h2,h3,h4,h5,p,span,a,label,div { font-family: "Roboto", Roboto, Noto, sans-serif; }
`;
