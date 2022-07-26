import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import store from "./store";
import ThemeProviderWrapper from "./pages/ThemeProviderWrapper";

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProviderWrapper>
        <div>
          <h2>Gerenciador de Cupom</h2>
        </div>
      </ThemeProviderWrapper>
    </ReduxProvider>
  );
}

export default App;
