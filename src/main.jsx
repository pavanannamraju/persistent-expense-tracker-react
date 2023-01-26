import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalProvider, { GlobalContext } from "./context/GlobalContext";
const ele = document.getElementById("root");
const root = ReactDOM.createRoot(ele);
root.render(
    <GlobalProvider>
        <App />
    </GlobalProvider>
);
