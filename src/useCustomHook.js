import { useState } from 'react';

const useCustomHook = (initialVal) => {
  const [flag, setFlag] = useState(initialVal);

  const handleClick = () => {
    setFlag(!flag);
  };

  return [flag, handleClick];
};

export default useCustomHook;
