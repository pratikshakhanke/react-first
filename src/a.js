import React, { useContext, useState } from 'react';
import ButtonContext from './ButtonContext';
import ButtonSwitch from './buttonSwitch';

 function A() {
  const con = useContext(ButtonContext);
  

  return (
    <div>
      <h3>I am A</h3>
      <button >A {con.text}</button>
    </div>
  );
}

export default ButtonSwitch(A)