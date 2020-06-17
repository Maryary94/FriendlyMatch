import React, { useEffect } from "react";

import "./Login.css";
import logo from "../../img/logo.png";

import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";
import { useState } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { withFirebase } from "../../services";


function Login({firebase, history}) {
  const recaptchaVerifier = useRef();
  const _confirmationResult = useRef();
  const [displayForm, setDisplayForm] = useState("phone");
  let phoneNumber = "";
  const [verificationCode, setVerificationCode] = useState("");

  const handleLogin = useCallback(() => {
    firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier.current).then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      _confirmationResult.current = confirmationResult;
      setDisplayForm("code");
    }).catch(function (error) {
      // Error; SMS not sent
      // ...
      console.error(error);
    });
  }, [firebase, phoneNumber]);


  const handleVerification = useCallback((e) => {
    e.preventDefault();
    _confirmationResult.current.confirm(verificationCode).catch(function (error) {
      // User couldn't sign in (bad verification code?)
      console.error(error);
    });
  }, [verificationCode]);

  useEffect(() => {
    recaptchaVerifier.current = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': function(response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        handleLogin();
      }
    });

    recaptchaVerifier.current.render().then(function(widgetId) {
      recaptchaVerifier.current.reset(widgetId);
    });

  }, [firebase.auth.RecaptchaVerifier, handleLogin]);

  var form;
  if(displayForm === "phone"){
    form = (
      <form id="sign-in-form" action="#" className="container">
        <img
          className="logo_friendlyMatch"
          src={logo}
          alt="Logo FriendlyMatch"
        />

        <Input id="phone" type="text" placeholder="Phone" onChange={e => phoneNumber = e.target.value} />

        <Button id="sign-in-button" name="Enter" btnColor="success" />
        <p className="terms">
          By signin up you agree with the{" "}
          <a href="http://localhost:3000/Login">Terms of Service</a> and{" "}
          <a href="http://localhost:3000/Login">Privacy Policy</a>
        </p>
      </form>
    )
  } else if(displayForm === "code"){
    form = (
      <form id="verification-code-form" action="#" className="container" onSubmit={handleVerification}>
        <Input id="verification-code" type="text" placeholder="Verification Code" onChange={e => setVerificationCode(e.target.value)}/>

        <Button id="btn-verify" name="Confirm" btnColor="success"/>
      </form>
    )
  }

  return (
    <>
      <div className="formContainerLogin">
        {form}
      </div>
    </>
  );
}

export default withFirebase(Login);
