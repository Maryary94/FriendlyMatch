import React from 'react';

export default function Input(props) {
  return (
    <>
      <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type={props.type}
          className="form-control"
          id={props.id}
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" className="form-text text-muted">
          {props.smallText}
        </small>
      </div>
    </>
  );
}
