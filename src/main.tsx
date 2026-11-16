import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se ha encontrado el elemento #root.");
}

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />, {
    onRecoverableError(error, errorInfo) {
      console.error("[HYDRATION ERROR]", error);
      console.error("[HYDRATION COMPONENT STACK]", errorInfo.componentStack);
    },
  });
} else {
  createRoot(rootElement).render(<App />);
}