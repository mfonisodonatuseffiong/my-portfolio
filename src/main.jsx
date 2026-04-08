import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Swiper global styles
import "swiper/css";
import "swiper/css/pagination";

// ✅ Only Bootstrap JS for collapse functionality
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
