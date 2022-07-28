import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./store";
import RouterProvider from "./components/Providers/RouterProvider";
import ThemeProviderWrapper from "./components/Providers/ThemeProviderWrapper";
import Header from "./components/Header";

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ThemeProviderWrapper>
          <Header />
          <RouterProvider />
        </ThemeProviderWrapper>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
