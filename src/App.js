import React from 'react';
import './style.css';
import A from './a';
import B from './b';
import C from './c';
import ButtonContext from './ButtonContext';
import ButtonSwitch from './buttonSwitch'

export default function App() {
  const text = 'Button';
  return (
    <div>
      <h1>I am learning react</h1>
      <ButtonContext.Provider value={{ text }}>
        {/* <A />
        <B/>
        <C /> */}


<ButtonSwitch flag={false} text={() => <>pppp</>}/>

      </ButtonContext.Provider>
    </div>
  );
}
