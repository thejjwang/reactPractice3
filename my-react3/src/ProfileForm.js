import React from "react"
import { useState, useEffect } from "react";
import NameInput from "./NameInput";
import AgeInput from "./AgeInput";
import BioInput from "./BioInput";
const ProfileForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [bio, setBio] = useState('');
  
    return (
      <form>
        <h2>Profile</h2>
        <NameInput name={name} setName={setName} />
        <AgeInput age={age} setAge={setAge} />
        <BioInput bio={bio} setBio={setBio} />
        <button disabled={name.length < 3 && bio.length < 10} >Submit</button>
  
        <div>
          <h3>Current Profile Info:</h3>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Bio: {bio}</p>
        </div>
      </form>
    );
 
}

export default ProfileForm;