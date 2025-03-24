import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  PluginsProvider,
  SchemaProvider,
} from "@satoshibits/react-json-schema-builder";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SchemaProvider>
      <PluginsProvider>
        <App />
      </PluginsProvider>
    </SchemaProvider>
  </StrictMode>,
);
