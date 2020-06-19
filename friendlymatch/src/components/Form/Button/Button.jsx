import React from "react";

export default function Button(props) {
  return (
    <>
      <button id={props.id} type={props.type} className={`btn btn-${props.btnColor}`} onClick={props.onClick}>
        {props.name}
      </button>
    </>
  );
}
