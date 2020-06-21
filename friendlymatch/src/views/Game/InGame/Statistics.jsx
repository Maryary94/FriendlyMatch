import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";

import NavBar from "../../../components/Form/ButtonGroup/Game/menuGames";
import GroupPicture from "../../../img/GroupPicture/GroupPicture";
import { Divider, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./Statistics.css";
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

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function Teams({firebase}) {
  const classes = useStyles();
  const { gameId } = useParams();
  const [users, setUsers] = useState({});
  const [game, setGame] = useState({});
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("Games")
      .child(gameId)
      .on("value", (snapshot) => {
        const gameSnapshot = snapshot.val();
        const players = gameSnapshot.players||[];
        const _mixedPlayers = shuffle(players);
        const half = Math.ceil(players.length/2);
        const teamsArr = [
          _mixedPlayers.slice(0, half),
          _mixedPlayers.slice(half)
        ];
        
        firebase
          .database()
          .ref("Users")
          .on("value", (snapshot) => {
            setUsers(snapshot.val());
            setTeams(teamsArr)
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
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <b>Lay down the Teams</b>
              </Paper>
            </Grid>
          </Grid>
          {teams.map((team, index)=>(
            <>
              <Grid item xs={6} sm={3} key={index}>
                <Paper className={classes.paper}>
                  <b>Team {index+1}</b>
                </Paper>
              </Grid>

              {(team||[]).map(playerKey=>(

                <div className="listGame" key={playerKey}>
                  <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                      <p>
                        <b>Name: </b>
                        {users[playerKey].firstName+" "+users[playerKey].lastName}
                      </p>
                      <small>
                        <b>T-shirt Number: </b>
                        {users[playerKey].tShirt}
                      </small>
                    </Paper>
                  </Grid>
                </div>
              ))}
            </>
          ))}

        </div>
      </div>
    </>
  );
}

export default withFirebase(Teams);