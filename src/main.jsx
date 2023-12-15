import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";

import { PersistGate } from "redux-persist/lib/integration/react";

import App from "./App.jsx";

// Redux
import { store, persistor } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);
