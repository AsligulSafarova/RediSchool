import React from 'react';
import "./Buton.styles.scss";


const BUTTON_TYPE_CLASSES = {
      google:"google",
      inverted: "inverted"
}

export default function Button({children, buttonType,...props}) {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...props}>
      {children}
    </button>
  )}
