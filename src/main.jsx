import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App/index";
import "./index.css";
import { StoreProvider } from "./Context/StoreContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
