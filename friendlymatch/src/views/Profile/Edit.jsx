import React from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, TextField, MenuItem } from "@material-ui/core";
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";
import "./Edit.css";
import { Link } from "react-router-dom";
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

export default function Edit(firebase) {
  const classes = useStyles();
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
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("handleSignUp", firebase.auth().currentUser);
    firebase
      .database()
      .ref("Users")
      .child(firebase.auth().currentUser.uid)
      .update(
        {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          birthday: birthday,
          position: position,
        },
        (result) => {
          console.log("result", result);
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
        <form className="container" action="#" onSubmit={handleSignUp}>
          <Input
            type="text"
            id="firstName"
            placeholder="First Name"
            onChange={(e) => (firstName = e.target.value)}
          />
          <Input
            type="text"
            id="lastName"
            placeholder="Last Name"
            onChange={(e) => (lastName = e.target.value)}
          />
          <Input
            type="number"
            id="height"
            placeholder="Height"
            onChange={(e) => (lastName = e.target.value)}
          />
          <Input
            type="number"
            id="t-shirt"
            placeholder="T-shirt Number"
            onChange={(e) => (phone = e.target.value)}
          />
          <Input
            type="number"
            id="age"
            placeholder="Age"
            onChange={(e) => (phone = e.target.value)}
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
              onChange={(e) => (birthday = e.target.value)}
            />
          </div>
          <div className="EditButtonColor">
            <TextField
              id="select-posicao"
              select
              label="Choose your position "
              variant="outlined"
              onChange={(e) => (position = e.target.value)}
            >
              {positionField.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="EditButtonColor">
            <Link to="/MyGroups">
              <Button name="Save Profile" type="submit" btnColor="success" />
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
