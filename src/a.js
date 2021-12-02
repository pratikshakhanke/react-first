import React, { useContext, useState } from 'react';
import ButtonContext from './ButtonContext';

export default function A() {
  const [flag, setFlag] = useState(true);
  const con = useContext(ButtonContext);
  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <div>
      {flag && <h3>I am A</h3>}
      <button onClick={handleClick}>A {con.text}</button>
    </div>
  );
}
