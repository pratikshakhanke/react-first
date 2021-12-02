import React, { useState } from 'react';

export default function buttonSwitch() {
  const [flag, setFlag] = useState(true);
  const handleClick = () => {
    setFlag(!flag);
  };
}
