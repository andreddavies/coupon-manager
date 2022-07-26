import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/global";
import { ThemeDefault } from "../styles/theme";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const ThemeProviderWrapper = ({ children }: Props): React.ReactElement => {
  return (
    <ThemeProvider theme={ThemeDefault}>
      <GlobalStyles theme={ThemeDefault} />

      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
