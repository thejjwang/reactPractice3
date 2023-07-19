import React from "react";

const NameInput = ({ name, setName }) => {

    return (
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="button">Submit</button>
      </div>
    );
};

export default NameInput;