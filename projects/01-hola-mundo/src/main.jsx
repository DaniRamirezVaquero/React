// import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));



// React.Fragment es un componente que no se renderiza en el DOM, es como un div vacio
root.render(
  <App/>
)