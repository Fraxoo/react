import { useState } from "react";


export function DadJoke() {
    // J'initialise la blague
    const [joke, setJoke] = useState("Attends je réfléchis...");

    function tellJoke() {
        const headers = new Headers();
        headers.append("Accept", "text/plain");

        fetch("https://icanhazdadjoke.com", { headers })
            .then(res => res.text())
            .then(joke => setJoke(joke)); // Je modifie la blague
    }

  
    return (
        <div>
            <p>{joke}</p>
            <button onClick={tellJoke}>Dire la blague</button>
        </div>
    );
}