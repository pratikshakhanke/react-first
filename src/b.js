import React, { useContext } from 'react';
import ButtonContext from './ButtonContext';

export default function B() {
  const con = useContext(ButtonContext);

  return (
    <div>
      <h3>I am B</h3>
      <button>B {con.text}</button>
    </div>
  );
}
