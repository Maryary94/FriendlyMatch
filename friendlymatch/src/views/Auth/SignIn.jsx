import React from "react";

import "./SignIn.css";

import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";
import Header from "../../components/Header/Header";

export default function SingIn() {
  return (
    <>
      <Header iconLeft={"fas fa-times"} />
      <h3 className="titleIn">Welcome Back</h3>
      <div className="formContainerSignIn">
        <form className="container">
          <Input type="number" id="pin" placeholder="Pin" />
          <a className="sendAgain" href="http://localhost:3000/SignIn">
            Send again
          </a>

          <div>
            <Button name="Continue" type="submit" btnColor="success" />
          </div>
        </form>
      </div>
    </>
  );
}
