// 1. Create a functional component called ColorChanger.
// 2. Declare a state variable `backgroundColor` using the `useState` hook. Initialize it with an initial color value.
// 3. Create a function `changeColor` that will be called when the "Change Color" button is clicked: 
//    - Inside the function, generate a random color value.
//    - Update the `backgroundColor` state with the new color value.
// 4. Create a function `resetColor` that will be called when the "Reset Color" button is clicked:
//    - Inside the function, reset the `backgroundColor` state to the initial color value.
// 5. Render the user interface:
//    - Display a div element with a style attribute:
//      - Set the `backgroundColor` style property to the value of the `backgroundColor` state.
//    - Display a button element with the text "Change Color":
//      - Attach the `changeColor` function to the `onClick` event.
//    - Display a button element with the text "Reset Color":
//      - Attach the `resetColor` function to the `onClick` event.
// 6. Export the `ColorChanger` component as the default export.

import { useState } from "react";
import React from "react";

const initialState = 'red';

const ColorChanger = () => {
    const [backgroundColor, setbackgroundColor] = useState(initialState);

    const changeColor = () => {
        // math random generates between 0 and 1
        // .toString(16) converts the rounded number to a hexadecimal string representation.
        // The 16 specifies the base of the number system, which is hexadecimal (base-16). 
        // This converts the number to a string that represents a random color in hexadecimal format.
        // to get a random color im multiplying it by the maximum value in the RGB color range (256^3 - 1)
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const color = "#"+ randomColor;
        setbackgroundColor(color)
        console.log(color);   
    }
    const resetColor = () => {
        setbackgroundColor(initialState);
    }

    return (
        <div style={{backgroundColor: backgroundColor}}>
            
            <button onClick={changeColor}>Change Color</button>
            <button onClick={resetColor}>Reset Color</button>
        </div>
    )
}

export default ColorChanger;