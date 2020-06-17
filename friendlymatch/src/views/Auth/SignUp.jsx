import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
import "./SignUp.css";

import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";
import Header from "../../components/Header/Header";
import { withFirebase } from "../../services";
import { useEffect } from "react";

function SignUp({firebase}) {
  let firstName, lastName, phone, birthday, position;
  const positionField = [
    {
      value: " Lateral Esquerdo",
      label: " Lateral Esquerdo",
    },
    {
      value: "Lateral Direito",
      label: "Lateral Direito",
    },
    {
      value: " Ponta de Lança",
      label: " Ponta de Lança",
    },
    {
      value: "Extermo Direito",
      label: "Extermo Direito",
    },
    {
      value: " Extermo Esquerdo",
      label: " Extermo Esquerdo",
    },
    {
      value: "Guarda Redes",
      label: "Guarda Redes",
    },
    {
      value: " Médio",
      label: " Médio",
    },
    {
      value: "Defesa Direito",
      label: "Defesa Direito",
    },
    {
      value: "Defesa Esquerdo",
      label: "Defesa Esquerdo",
    },
    {
      value: "Defesa Central",
      label: "Defesa Central",
    },
  ];


  useEffect(()=>{
    console.log(firebase.auth().currentUser);
  }, [firebase])

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("handleSignUp", firebase.auth().currentUser);
    firebase.database().ref("Users").child(firebase.auth().currentUser.uid).update({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      birthday: birthday,
      position: position,
    }, (result)=>{
      console.log("result", result);
    })
  }

  return (
    <>
      <Header
        // title=" Welcome Registration"
        iconLeft={"fas fa-times"}
        // iconRight={"fas fa-times"}
      />

      <h3 className="title">Welcome Registration</h3>

      <div className="formContainerSignUp">
        <form className="container" action="#" onSubmit={handleSignUp}>
          <Input type="text" id="firstName" placeholder="First Name" onChange={e => firstName = e.target.value} />
          <Input type="text" id="lastName" placeholder="Last Name" onChange={e => lastName = e.target.value} />
          <Input type="text" id="phone" placeholder="Phone Number" onChange={e => phone = e.target.value} />
          <div className="divHorizontal">
            <Input
              type="text"
              id="a"
              placeholder="Date of Birth"
              disabled={true}
            />
            <Input type="date" id="birthday" onChange={e => birthday = e.target.value}/>
          </div>
          <div className="selectPosicao">
            <TextField
              id="select-posicao"
              select
              label="   "
              onChange={e => position = e.target.value}
              helperText="Escolha o posição que deseja jogar"
            >
              {positionField.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <Button name="Continue" type="submit" btnColor="success" />
          </div>
        </form>
      </div>
    </>
  );
}

export default withFirebase(SignUp);