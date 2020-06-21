import React from "react";
import Header from "../../components/Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, TextField, MenuItem } from "@material-ui/core";
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";
import "./Create.css";
import { Link, useParams } from "react-router-dom";

import LeftArrow from "../../components/Icons/LeftArrow/LeftArrow";
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

function CreateGame({firebase, history}) {
  const {groupId} = useParams();
  const classes = useStyles();
  const Field = [
    {
      value: "10",
      label: "10",
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
  let gameName, location, date, timeOfTheGame, deadline, timeToApply, timeNotification, playersWanted, price;



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", firebase.auth().currentUser);
    firebase
      .database()
      .ref("Games")
      .push(
        {
          groupId: groupId,
          gameName: gameName,
          location: location,
          date: date,
          timeOfTheGame: timeOfTheGame,
          deadline: deadline,
          timeToApply: timeToApply,
          timeNotification: timeNotification,
          playersWanted: playersWanted,
          price: price,
        },
        (error) => {
          if (error) {
            console.error(error);
          } else {
            history.goBack();
          }
        }
      );
  };
  return (
    <>
      <Header>
        <LeftArrow link={"/Games/"+groupId} />
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
        <form className="container" action="#" onSubmit={handleSubmit}>
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
            <Input type="text" id="date" placeholder="Date" disabled={true} />
            <Input
              type="date"
              id="date"
              onChange={(e) => (date = e.target.value)}
            />
          </div>
          <div className="divHorizontal">
            <Input
              type="text"
              id="timeGame"
              placeholder="Time of the Game"
              disabled={true}
            />
            <Input
              type="time"
              id="timeOfTheGame"
              onChange={(e) => (timeOfTheGame = e.target.value)}
            />
          </div>
          <div className="divHorizontal">
            <Input
              type="text"
              id="date"
              placeholder="Deadline"
              disabled={true}
            />
            <Input
              type="date"
              id="date"
              onChange={(e) => (deadline = e.target.value)}
            />
          </div>
          <div className="divHorizontal">
            <Input
              type="text"
              id="a"
              placeholder="The end time to apply"
              disabled={true}
            />
            <Input
              type="time"
              id="timeToApply"
              onChange={(e) => (timeToApply = e.target.value)}
            />
          </div>
          <div className="divHorizontal">
            <Input
              type="text"
              id="timeNotification"
              placeholder="Notification"
              disabled={true}
            />
            <Input
              type="time"
              id="time"
              onChange={(e) => (timeNotification = e.target.value)}
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
            <Button name="Create Game" type="submit" btnColor="success" />
          </div>
        </form>
      </div>
    </>
  );
}

export default withFirebase(CreateGame);