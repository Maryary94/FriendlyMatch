import React from "react";
import Header from "../../components/Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, TextField, MenuItem } from "@material-ui/core";
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";
import "./Create.css";
import { Link } from "react-router-dom";

import LeftArrow from "../../components/Icons/LeftArrow/LeftArrow";

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

export default function CreateGame() {
  const classes = useStyles();
  const Field = [
    {
      value: "10 ",
      label: " 10",
    },
    {
      value: "12",
      label: "12",
    },
    {
      value: " 14",
      label: " 14",
    },
    {
      value: "16",
      label: "16",
    },
    {
      value: " 18",
      label: " 18",
    },
    {
      value: "20",
      label: "20",
    },
    {
      value: " 22",
      label: " 22",
    },
    {
      value: "24",
      label: "24",
    },
    {
      value: "26",
      label: "26",
    },
  ];
  let gameName, location, price, birthday, playersWanted;
  return (
    <>
      <Header>
        <LeftArrow link="/Games" />
      </Header>
      <div className={classes.root}>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <b>Create new Game </b>
                <p>
                  <small>Details</small>
                </p>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="formContainerSignUp">
        <form className="container">
          <Input
            type="text"
            id="GameName"
            placeholder="Game Name"
            onChange={(e) => (gameName = e.target.value)}
          />
          <Input
            type="text"
            id="Location"
            placeholder="Name or Location"
            onChange={(e) => (location = e.target.value)}
          />

          <div className="divHorizontal">
            <Input type="text" id="a" placeholder="Date" disabled={true} />
            <Input
              type="date"
              id="date"
              onChange={(e) => (birthday = e.target.value)}
            />
          </div>
          <div className="divHorizontal">
            <Input type="text" id="a" placeholder="Time" disabled={true} />
            <Input
              type="time"
              id="time"
              onChange={(e) => (birthday = e.target.value)}
            />
          </div>
          <div className="ButtonGame">
            <TextField
              id="select-players"
              select
              label="Players Wanted"
              onChange={(e) => (playersWanted = e.target.value)}
              variant="outlined"
            >
              {Field.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Input
            type="number"
            id="Price"
            placeholder="Price to pay"
            onChange={(e) => (price = e.target.value)}
          />
          <div className="ButtonGame">
            <Link to="/Games" className="GrupoColor">
              <Button name="Create Game" type="submit" btnColor="success" />
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
