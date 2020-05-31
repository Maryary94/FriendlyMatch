import React from "react";

import "./SignUp.css";

import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";
import Header from "../../components/Header/Header";

export default function SignUp() {
  return (
    <>
      <Header title=" Welcome Registration"> </Header>
      <h3>Welcome Registration</h3>
      <div className="formContainer">
        <form className="container">
          <Input type="text" id="firstName" placeholder="First Name" />
          <Input type="text" id="lastName" placeholder="Last Name" />
          <Input type="number" id="phone" placeholder="Email ou maybe Phone!" />
          <divHorizontal>
            <Input type="text" id="a" placeholder="Date of Birth" disabled />
            <Input type="date" id="birthday" />
          </divHorizontal>

          <div>
            <Button name="Continue" type="submit" btnColor="success" />
          </div>
        </form>
      </div>
    </>
  );
}
