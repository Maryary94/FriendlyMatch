import React from "react";

import "./SignIn.css";

import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";
import Header from "../../components/Header/Header";

export default function SingIn() {
  return (
    <>
      <Header></Header>
      <h3>Welcome Registration</h3>
      <div className="formContainerSignIn">
        <form className="container">
          <Input
            type="number"
            id="pin"
            placeholder="Pin"
            smallText="Send Again"
          />

          <div>
            <Button name="Continue" type="submit" btnColor="success" />
          </div>
        </form>
      </div>
    </>
  );
}
