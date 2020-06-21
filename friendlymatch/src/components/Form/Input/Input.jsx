import React from "react";
import "./Input.css";

export default function Input(props) {
  return (
    <>
      <div className="form-group noMarginInput">
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type={props.type}
          className="form-control "
          id={props.id}
          placeholder={props.placeholder}
          aria-describedby="emailHelp"
          disabled={props.disabled}
          onChange={props.onChange}
          value={props.value}
        />
        <small id="emailHelp" className="form-text text-muted">
          {props.smallText}
        </small>
      </div>
    </>
  );
}
