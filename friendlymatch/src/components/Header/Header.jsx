import React from "react";

import "./Header.css";

export default function Header(props) {
  return (
    <>
      <div className="header">
        <i className={`${props.iconLeft} iconFontAwesome `}></i>
        <span className="text">{props.title}</span>
        {/*
        <div className="x">{props.x}</div>
        <div className="back">{props.back}</div>
        <div className="backAndSettings">{props.backAndSettings}</div>
        <div className="menuAndSettings">{props.menuAndSettings}</div>
        <div className="xAndCheck">{props.xAndCheck}</div>
        <div className="xAndSend">{props.xAndSend}</div>
        */}
        <i className={`${props.iconRight} iconFontAwesome `}></i>
        {/*disabled={props.disabled}*/}
      </div>
    </>
  );
}
