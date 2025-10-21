import  React  from "react";
import ReactDOM  from "react-dom/client";
import { useState } from "react";

import { App } from "./App";


const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);            // Appel du composant App
