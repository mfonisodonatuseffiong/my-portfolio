import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Swiper global styles
import "swiper/css";
import "swiper/css/pagination";

// ✅ Bootstrap styles and JS bundle
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
