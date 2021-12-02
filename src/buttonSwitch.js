import React, { useState } from 'react';

const ButtonSwitch = ({ Component, flag }) => {
  return <>{flag ? <Component /> : null}</>;
};
export default ButtonSwitch;
