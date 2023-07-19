import React from "react";
const NumbersList = ({array}) => {
    console.log(array);
    const filteredArr = array.filter(number => number % 3 !== 0);

    return (
        <div>
            {filteredArr.map((number, index) => <li key={index}>{number}</li>)}
        </div>
    )
}

export default NumbersList;