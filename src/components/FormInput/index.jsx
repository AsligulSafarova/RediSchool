import React from 'react';
import "./FormInput.scss";

export default function FormInput({ label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form_input" {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value?.length ? "shrink" : ""} form_input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}