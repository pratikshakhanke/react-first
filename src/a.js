import React, { useContext, useState } from 'react';
import ButtonContext from './ButtonContext';
import ButtonSwitch from './buttonSwitch';

const childC = () => <h3>I am A ON</h3>;

function A() {
  const [flag, setFlag] = useState(true);
  const con = useContext(ButtonContext);

  const handleClick = () => {
    setFlag(!flag);
  };

  return (
    <div>
      <ButtonSwitch flag={flag} Component={childC} />
      <button onClick={handleClick}>A {con.text}</button>
    </div>
  );
}

export default A;
