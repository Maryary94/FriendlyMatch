import React from "react";
// import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  return (
    <>
      <div className="header">
        {props.children}
        {props.title ? (
          <>
            <i className={`${props.iconLeft} iconFontAwesome `}></i>
            <span className="text">{props.title}</span>
            <i className={`${props.iconRight} iconFontAwesome `}></i>
          </>
        ) : null}
      </div>
    </>
  );
}
