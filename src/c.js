import React, { useContext } from "react";
import ButtonContext from './ButtonContext'

export default function C() {
  const con = useContext(ButtonContext)
  return (
    <div>
      <h3>I am C</h3>
      <button>C {con.text}</button>
    </div>
  );
}
