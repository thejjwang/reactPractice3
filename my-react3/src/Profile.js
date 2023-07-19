import React, { useState } from 'react';

// initialize state with bio and state with the social medias
// toggle those states between true or false to toggle and display them
// toggle the states accordingly if its true make it false to hide it
// display with 2 buttons that control the 2 toggles

const Profile = () => {
  const [toggle, setToggle] = useState(true);


  return (
    <div>
      <h2>Profile</h2>
      <div>
        <button onClick={() => setToggle(!toggle)}>{toggle ? 'Bio' : 'Social Media'}</button>
        {toggle && (
          <div>
            <h3>Bio:</h3>
            <p>Write your bio here...</p>
          </div>
        )}
        {!toggle && (
          <div>
            <h3>Social Media Links:</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        )}
      </div>    
    </div>
  );
};

export default Profile;
