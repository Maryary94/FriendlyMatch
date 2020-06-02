import React from "react";

import "./Login.css";
import logo from "../../img/logo.png";

import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";

export default function Login() {
  return (
    <>
      <div className="formContainerLogin">
        <form className="container">
          <img
            className="image"
            src={logo}
            alt="Logo FriendlyMatch"
            class="img-thumbnail"
          />

          <Input type="number" id="phone" placeholder="Phone" />

          <Button name="Enter" type="submit" btnColor="success" />
          <p className="terms">
            By signin up you agree with the{" "}
            <a href="http://localhost:3000/Login">Terms of Service</a> and{" "}
            <a href="http://localhost:3000/Login">Privacy Policy</a>
          </p>
        </form>
      </div>
    </>
  );
}
