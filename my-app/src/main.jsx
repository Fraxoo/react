import  React  from "react";
import ReactDOM  from "react-dom/client";
import { useState } from "react";

import { App } from "./App";
import { Eleve } from "./Eleve";     // Import du composant App
import { DadJoke } from "./counter";
import { UserProfil } from "./UserProfil";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<DadJoke />);            // Appel du composant App
