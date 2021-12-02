import React, { useContext, useState } from 'react';
import ButtonContext from './ButtonContext';
import ButtonSwitch from './buttonSwitch';

export default function C() {
  const con = useContext(ButtonContext);
  const [flag, setFlag] = useState(true);

  function handleClick() {
    setFlag(!flag);
  }
  return (
    <div>
      <ButtonSwitch flag={flag} Component={() => <h3>I am C</h3>} />

      <button onClick={handleClick}>C {con.text}</button>
    </div>
  );
}
