import React from "react";

import "./Header.css";

export default function Header(props) {
  return (
    <>
      <div className="header">
        {props.children}
        <i className={`${props.iconLeft} iconFontAwesome `}></i>
        <span className="text">{props.title}</span>
        <i className={`${props.iconRight} iconFontAwesome `}></i>
      </div>
    </>
  );
}
