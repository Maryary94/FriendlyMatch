import React from "react";

import "./Header.css";

export default function Header(props) {
  return (
    <>
      <div className="header">
        <div className="text">{props.title}</div>
        <div className="x">{props.x}</div>
        <div className="back">{props.back}</div>
        <div className="backAndSettings">{props.backAndSettings}</div>
        <div className="menuAndSettings">{props.menuAndSettings}</div>
        <div className="xAndCheck">{props.xAndCheck}</div>
        <div className="xAndSend">{props.xAndSend}</div>
      </div>
    </>
  );
}
