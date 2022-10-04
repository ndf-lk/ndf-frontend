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
import MainLayout from "./layouts/MainLayout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
