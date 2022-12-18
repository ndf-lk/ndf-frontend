import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";

//@ts-ignore
window.require = (name) => new URL(name, import.meta.url).href;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
