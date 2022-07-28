import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./store";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RouterProvider from "./components/Providers/RouterProvider";
import ThemeProviderWrapper from "./components/Providers/ThemeProviderWrapper";

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ThemeProviderWrapper>
          <Header />
          <RouterProvider />
          <Footer />
        </ThemeProviderWrapper>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
