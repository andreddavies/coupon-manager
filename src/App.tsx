import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RouterProvider from "./components/Providers/RouterProvider";
import ThemeProviderWrapper from "./components/Providers/ThemeProviderWrapper";

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProviderWrapper>
            <Header />
            <RouterProvider />
            <Footer />
          </ThemeProviderWrapper>
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
