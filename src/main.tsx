import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { router } from "./Router";
import "./styles/globals.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
