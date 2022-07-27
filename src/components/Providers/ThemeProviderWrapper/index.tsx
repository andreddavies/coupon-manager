import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { RootState } from "../../../store";
import GlobalStyles from "../../../styles/global";
import { ThemeDefault } from "../../../styles/theme";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const ThemeProviderWrapper = ({ children }: Props): React.ReactElement => {
  const store = useSelector((state: RootState) => state);
  const { theme } = store;

  return (
    <ThemeProvider theme={ThemeDefault[theme as keyof typeof ThemeDefault]}>
      <GlobalStyles theme={ThemeDefault[theme as keyof typeof ThemeDefault]} />

      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
