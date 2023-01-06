import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./cursoranimation.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div className="flex flex-col justify-end sticky w-32 bottom-0 left-0">
      <div className="cursor"></div>
      <div className="back"></div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
