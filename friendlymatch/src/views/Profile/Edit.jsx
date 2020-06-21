import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, TextField, MenuItem } from "@material-ui/core";
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";
import "./Edit.css";
import { withFirebase } from "../../services";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Edit({firebase, history}) {
  const classes = useStyles();


  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [height, setHeight] = useState();
  const [tShirt, setTShirt] = useState();
  const [age, setAge] = useState();
  const [birthday, setBirthday] = useState();
  const [position, setPosition] = useState();

  const currentUser = firebase.auth().currentUser;

  useEffect(()=>{
    if(currentUser)
      firebase
        .database()
        .ref("Users")
        .child(currentUser.uid)
        .once("value", (snapshot)=>{
          let user = snapshot.val();
          setFirstName(user.firstName);
          setLastName(user.lastName);
          setHeight(user.height);
          setTShirt(user.tShirt);
          setAge(user.age);
          setBirthday(user.birthday);
          setPosition(user.position);
        });
  }, [firebase, currentUser]);


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
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .database()
      .ref("Users")
      .child(firebase.auth().currentUser.uid)
      .update(
        {
          firstName: firstName,
          lastName: lastName,
          height: height,
          tShirt: tShirt,
          age: age,
          birthday: birthday,
          position: position,
        },
        (result) => {
          console.log("result", result);
          history.push("/Profile");
        }
      );
  };
  return (
    <>
      <Header>
        <Menu />
      </Header>
      <div className={classes.root}>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <b>Edit Profile </b>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="formContainerSignUp">
        <form className="container" action="#" onSubmit={handleSubmit}>
          <Input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            type="number"
            id="height"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <Input
            type="number"
            id="tShirt"
            placeholder="T-shirt Number"
            value={tShirt}
            onChange={(e) => setTShirt(e.target.value)}
          />
          <Input
            type="number"
            id="age"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <div className="divHorizontal">
            <Input
              type="text"
              id="a"
              placeholder="Date of Birth"
              disabled={true}
            />
            <Input
              type="date"
              id="birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
          <div className="EditButtonColor">
            <TextField
              id="select-posicao"
              select
              label="Choose your position "
              variant="outlined"
              // value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              {positionField.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="EditButtonColor">
              <Button name="Save Profile" type="submit" btnColor="success" />
          </div>
        </form>
      </div>
    </>
  );
}

export default withFirebase(Edit);