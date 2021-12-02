import React, { useState } from 'react';

const ButtonSwitch = ({ Component, flag }) => {
  return <>{flag ? <Component /> : <div> I am Image </div>}</>;
};
export default ButtonSwitch;
