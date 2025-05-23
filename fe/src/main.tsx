import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // ✅ Đổi HashRouter thành BrowserRouter
import { TempoDevtools } from "tempo-devtools";

TempoDevtools.init();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/"> {/* ✅ Thêm basename */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
