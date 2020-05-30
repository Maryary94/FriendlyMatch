import React from "react";

import "./Login.css";

import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";

export default function Login() {
  return (
    <>
      <div className="formContainer">
        <form className="container">
          <Input
            type="text"
            id="idUnico"
            label="Isto é uma label personalizada on the fly"
            smallText="Isto é o texto small"
          />
          <Input
            type="password"
            id="password"
            label="Password"
            smallText="Isto é o texto small para a password"
          />
          <div>
            <Button name="Coisa" type="submit" btnColor="success" />
            <Button name="Cenas" type="submit" btnColor="danger" />
          </div>
        </form>
      </div>
    </>
  );
}
