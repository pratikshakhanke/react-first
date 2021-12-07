import React, { useContext, useState } from 'react';
import ButtonContext from './ButtonContext';
import ButtonSwitch from './buttonSwitch';
import useCustomHook from './useCustomHook';

const childC = () => <h3>I am B ON</h3>;

export default function B() {
  const con = useContext(ButtonContext);
  const [flag, handleClick] = useCustomHook(true);

  return (
    <div>
      <ButtonSwitch flag={flag} Component={childC} />
      <button onClick={handleClick}>B {con.text}</button>
    </div>
  );
}
