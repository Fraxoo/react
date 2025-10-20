import { useState } from "react";


/**
 * 
 * @param {name : string} name
 * @param {lastName : string} lastName 
 */
export function UserProfil({name,lastName}){
    const [user,setUser] = useState({name,lastName});

    function onChangeName(event){
        const newName = event.target.value;
        setUser({...user,name : newName});
    }
    function onChangeLastName(event){
        const newLastName = event.target.value;
        setUser({...user,lastName : newLastName});
    }

    return (
        <div>
            <h2>{user.lastName}</h2>
            <h2>{user.name}</h2>
            <input onChange={onChangeLastName} value={user.lastName}/>
            <input onChange={onChangeName} value={user.name}/>
        </div>
    )
}