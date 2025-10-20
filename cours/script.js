import { useState } from "react";

function Produit(){
    // Je crée une variable compteur et une fonction setCompteur qui la modifie
    const [compteur,setCompteur] = useState(0); // par défaut compteur = 0
    
    function addProduct(){
        setCompteur(compteur+1);
    }
    
    // Je renvoie le HTML final de mon composant
    return (
        <div>
            <p>Adidas taille 42</p>
            <p>Nombre de produits : {compteur}</p>
            <button onClick={addProduct}>Ajouter au panier</button>
        </div>
    );
}