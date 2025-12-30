import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./contexts/cartContext.jsx";
import { TableProvider } from "./contexts/tableContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TableProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </TableProvider>
    </BrowserRouter>
  </React.StrictMode>
);
