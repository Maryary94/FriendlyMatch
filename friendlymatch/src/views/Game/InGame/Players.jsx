import React, { useState, useEffect } from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";

import NavBar from "../../../components/Form/ButtonGroup/Game/menuGames";
import GroupPicture from "../../../img/GroupPicture/GroupPicture";
import { Divider, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./Players.css";
import { useParams } from "react-router-dom";
import { withFirebase } from "../../../services";

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
function InGamePlayers({firebase}) {
  const classes = useStyles();
  const { gameId } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    firebase
      .database()
      .ref("Games")
      .child(gameId)
      .on("value", (snapshot) => setGame(snapshot.val()));
  }, [firebase, gameId]);

  return (
    <>
      <Header>
        <Menu />
      </Header>
      <div className={classes.root}>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <b>Game Name: </b>
                <p>{game.gameName}</p>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <b>
                  <GroupPicture />
                </b>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      <Divider />
      <NavBar />

      <div className={classes.root}>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <b>Players in the Game </b>
              </Paper>
            </Grid>
          </Grid>

          <div className="listGame">
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <p>
                  <b>Name: </b>
                  (data.firebase)
                </p>
                <small>
                  <b>T-shirt Number: </b>
                  (data.firebase)
                </small>
              </Paper>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default withFirebase(InGamePlayers);