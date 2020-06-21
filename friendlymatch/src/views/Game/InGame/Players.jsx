import React, { useState, useEffect } from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import AddIcon from "@material-ui/icons/Add";
import NavBar from "../../../components/Form/ButtonGroup/Game/menuGames";
import GroupPicture from "../../../img/GroupPicture/GroupPicture";
import { Divider, Paper, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./Players.css";
import { useParams, Link } from "react-router-dom";
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
function InGamePlayers({ firebase }) {
  const classes = useStyles();
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  const [users, setUsers] = useState({});

  useEffect(() => {
    firebase
      .database()
      .ref("Games")
      .child(gameId)
      .on("value", (snapshot) => {
        const gameSnapshot = snapshot.val();
        firebase
          .database()
          .ref("Users")
          .once("value", (snapshot) => {
            setUsers(snapshot.val())
            setGame(gameSnapshot);
          });
      });
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
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <b>Players in the Game </b>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Button variant="contained" className="CreateGroup">
                <Link to={"/GameAddPlayers/"+gameId} className="GrupoColor">
                  Add New Players <AddIcon></AddIcon>
                </Link>
              </Button>
            </Grid>
          </Grid>


          {(game.players || []).map((playerKey) => (
            <div className="listGame" key={playerKey}>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <p>
                    <b>Name: </b>
                    {users[playerKey].firstName+" "+users[playerKey].lastName}
                  </p>
                </Paper>
              </Grid>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default withFirebase(InGamePlayers);
