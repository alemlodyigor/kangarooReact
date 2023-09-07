import React from "react";

const Input = (props) => {
  return (
    <input type={props.type} value={props.value} className={props.className} id={props.id || ''} placeholder={props.placeholder || ''} onInput={props.onAction} required />
  );
};

export default Input;
