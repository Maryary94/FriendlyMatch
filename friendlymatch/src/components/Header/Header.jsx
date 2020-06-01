import React from "react";

import "./Header.css";

export default function Header(props) {
  return (
    <>
      <div className="header">
        <i className={`${props.iconLeft} iconFontAwesome `}></i>
        <span className="text">{props.title}</span>
        <i className={`${props.iconRight} iconFontAwesome `}></i>
      </div>
    </>
  );
}
