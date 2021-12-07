import React, { useContext, useState } from 'react';
import ButtonContext from './ButtonContext';
import ButtonSwitch from './buttonSwitch';
import useCustomHook from './useCustomHook';

const childC = () => <>abc</>;

function A() {
  const con = useContext(ButtonContext);
  const {flag, handleClick} = useCustomHook(true);

  return (
    <div>
      <ButtonSwitch flag={flag} text={childC} />
      <button onClick={handleClick}>A {con.text}</button>
    </div>
  );
}

export default A;
