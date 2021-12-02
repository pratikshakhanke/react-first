import React, { useContext, useState } from 'react';
import ButtonContext from './ButtonContext';
import ButtonSwitch, { handleClick } from './buttonSwitch';

function A() {
  const [flag, setFlag] = useState(true);
  const con = useContext(ButtonContext);
  
  const handleClick = () => {
    setFlag(!flag);
  };

  return (
    <div>
      <ButtonSwitch flag={flag} Component={() => <h3>I am A ON</h3>} />
      <button onClick={handleClick}>A {con.text}</button>
    </div>
  );
}

export default A;
