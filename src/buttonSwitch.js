import React, { useState } from 'react';

const ButtonSwitch = (Component) => {
  const [flag, setFlag] = useState(true);
  const handleClick = () => {
    setFlag(!flag);
  };

  return <>{flag && Component}</>;
};

export default ButtonSwitch;
