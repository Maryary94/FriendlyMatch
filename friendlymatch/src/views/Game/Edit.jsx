import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, TextField, MenuItem } from "@material-ui/core";
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";
import "./Create.css";
import { useParams } from "react-router-dom";

import LeftArrow from "../../components/Icons/LeftArrow/LeftArrow";
import { withFirebase } from "../../services";
import { useEffect } from "react";

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

function EditGame({ firebase, history }) {
  const { gameId } = useParams();
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
  const [gameName, setGameName] = useState();
  const [location, setLocation] = useState();
  const [date, setDate] = useState();
  const [timeOfTheGame, setTimeOfTheGame] = useState();
  const [deadline, setDeadline] = useState();
  const [limitTimeToApply, setLimitTimeToApply] = useState();
  const [timeNotification, setTimeNotification] = useState();
  const [playersWanted, setPlayersWanted] = useState();
  const [price, setPrice] = useState();

  useEffect(()=>{
    firebase
      .database()
      .ref("Games")
      .child(gameId)
      .on("value", (snapshot)=>{
        let game = snapshot.val();
        setGameName(game.gameName);
        setLocation(game.location);
        setDate(game.date);
        setTimeOfTheGame(game.timeOfTheGame);
        setDeadline(game.deadline);
        setLimitTimeToApply(game.limitTimeToApply);
        setTimeNotification(game.timeNotification);
        setPlayersWanted(game.playersWanted);
        setPrice(game.price);
      });
  }, [firebase, gameId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", firebase.auth().currentUser);
    firebase
      .database()
      .ref("Games")
      .child(gameId)
      .update(
        {
          gameName: gameName,
          location: location,
          date: date,
          timeOfTheGame: timeOfTheGame,
          deadline: deadline,
          limitTimeToApply: limitTimeToApply,
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
        <LeftArrow link={"/Info/" + gameId} />
      </Header>
      <div className={classes.root}>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <b>Edit Game </b>
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
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
          />
          <Input
            type="text"
            id="Location"
            placeholder="Name or Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <div className="divHorizontal">
            <Input type="text" id="date" placeholder="Date" disabled={true} />
            <Input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
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
              value={timeOfTheGame}
              onChange={(e) => setTimeOfTheGame(e.target.value)}
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
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
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
              id="limitTimeToApply"
              value={limitTimeToApply}
              onChange={(e) => setLimitTimeToApply(e.target.value)}
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
              value={timeNotification}
              onChange={(e) => setTimeNotification(e.target.value)}
            />
          </div>

          <div className="ButtonGame">
            <TextField
              id="select-players"
              select
              label="Players Wanted"
              value={playersWanted}
              onChange={(e) => setPlayersWanted(e.target.value)}
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
            placeholder="Total Price of the game"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="ButtonGame">
            <Button name="Edit Game" type="submit" btnColor="success" />
          </div>
        </form>
      </div>
    </>
  );
}

export default withFirebase(EditGame);
