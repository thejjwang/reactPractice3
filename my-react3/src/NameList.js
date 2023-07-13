// 1. Create a functional component called NameList.
// 2. Initialize names state variable with the initial array of names received as props.
// 3. Initialize newName state variable with an empty string.
// 4. Create a function addName:
//    - Check if newName is not empty.
//    - Create a new array by spreading the existing names array and adding newName at the end.
//    - Update names state with the new array.
//    - Clear newName state by setting it to an empty string.
// 5. Create a function handleChange:
//    - Update newName state with the new value entered by the user.
// 6. Render the user interface:
//    - Display an input field:
//      - Bind value attribute to newName state.
//      - Use onChange event to update newName state.
//    - Display a button with the text "Add":
//      - Attach addName function to onClick event.
//    - Render a list element:
//      - Map over names array.
//      - For each name, render a list item to display the name.
// 7. Export NameList component as the default export.

import React from "react";
import { useState } from "react";
import ListItem from "./ListItem";

const NameList = () => {
    const [names, setNames] = useState([]);
    const [newName, setNewName] = useState('');

    const addName = () => {
        if (newName !== ''){
            const newArr = [...names, newName];
            setNames(newArr);
            setNewName('');
        }
    }
    const handleChange = (e) => {
        setNewName(e.target.value);
    }
    return (
        <>
            <input value={newName} onChange={handleChange}></input>
            <button onClick={addName}>Add</button>
            <ul>
                {names.map(name => (
                    <ListItem name={name}/>
                ))}
            </ul>
        </>
    )
}

export default NameList;