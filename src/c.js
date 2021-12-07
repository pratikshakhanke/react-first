import React, { useContext, useState } from 'react';
import ButtonContext from './ButtonContext';
import ButtonSwitch from './buttonSwitch';
import useCustomHook from './useCustomHook';

export default function C() {
  const con = useContext(ButtonContext);
  const [flag, handleClick] = useCustomHook(true);

  return (
    <div>
      <ButtonSwitch flag={flag} Component={() => <h3>I am C</h3>} />

      <button onClick={handleClick}>C {con.text}</button>
    </div>
  );
}
