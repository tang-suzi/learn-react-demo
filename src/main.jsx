import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "@/store";
import { Provider } from "react-redux";
import "@ant-design/v5-patch-for-react-19";

const root = document.getElementById("root");
debugger;
createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
