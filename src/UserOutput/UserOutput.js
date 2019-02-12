import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className = 'UserOutput'>
    <p>This is a good practice</p>
    <p>Never is too late to start doing something new
      <strong> {props.username}-san </strong>
    </p>
  </div>
  )
}

export default userOutput;
