import React, { useState } from 'react';

const ButtonSwitch = ({ text: Text, flag }) => {
  const testName = "Pratiksha"

  return <>
    {flag ? <Text/> : <div> I am Image </div>}
    <button> Send to Apps </button>
  </>;
};
export default ButtonSwitch;
