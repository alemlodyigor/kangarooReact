import React from 'react'

const Button = (props) => {
  return <button className={props.className} onClick={props.onAction} id={props.id || ''} >{props.children}</button>
}

export default Button