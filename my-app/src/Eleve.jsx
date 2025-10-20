export function Eleve({prenom, nom, age})
{
    return (
        <div>
            <h2>{nom}</h2>
            <p>{prenom}</p>
            <p>{age} ans</p>
            <p>{ age>=18 ? "Majeur" : "Mineur" }</p>
        </div>
    );
}