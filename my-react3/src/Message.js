
import React from 'react';

const Message = ({name,age}) => {
  const message = 'Hello, World!';


  return (
    <div>
      <h1>Name: {name} Age: {age}</h1>
    </div>
  );
};

export default Message;

