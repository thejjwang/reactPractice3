// Exercise 4:
// 1. Create a functional component called ToggleButton.
// 2. Declare a state variable `isOn` using the `useState` hook. Initialize it with a value of `false`.
// 3. Create a function `toggle` that will be called when the button is clicked:
//    - Inside the function, update the `isOn` state by toggling its value between `true` and `false`.
// 4. Render the user interface:
//    - Display a button element with the text "Toggle".
//      - Attach the `toggle` function to the `onClick` event.
//    - Display a paragraph element to show the current state:
//      - If `isOn` is `true`, display the text "ON".
//      - If `isOn` is `false`, display the text "OFF".
// 5. Export the `ToggleButton` component as the default export.

import { useState } from "react";
import React from "react";

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => setIsOn(isOn ? false : true);
    
    // need to add toString() because the state 
    // needs to be converted to a string 
    return (
        <>
            <button onClick={toggle}>Toggle</button>
            <p>The Current State Is: {isOn.toString()}</p>
        </>
    )

}
export default ToggleButton;