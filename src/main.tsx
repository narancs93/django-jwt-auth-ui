import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "uikit/dist/css/uikit-core.min.css";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit-core.js";
import "uikit/dist/js/uikit.js";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
