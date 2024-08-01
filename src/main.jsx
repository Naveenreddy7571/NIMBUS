import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CommentProvider } from "./CommentContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CommentProvider>
  <App />
  </CommentProvider>

);
