import React, { useState, useRef, useEffect } from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import SettingsAdmin from "../../../components/Settings/SettingsAdmin";
import NavBar from "../../../components/Form/ButtonGroup/Group/menuGroup";
import GroupPicture from "../../../img/GroupPicture/GroupPicture";
import { Divider, Button, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useParams } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import "./Games.css";
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
function Games({ firebase }) {
  const classes = useStyles();
  const { groupId } = useParams();
  const players = useRef();
  const [group, setGroup] = useState({});
  const [games, setGames] = useState({});

  useEffect(() => {
    firebase
      .database()
      .ref("Users")
      .once("value")
      .then((snapshot) => {
        players.current = snapshot.val();
        firebase
          .database()
          .ref("Groups")
          .child(groupId)
          .on("value", (snapshot) => setGroup(snapshot.val()));
        
        firebase
          .database()
          .ref("Games")
          .orderByChild("groupId").equalTo(groupId)
          .on("value", (snapshot) => setGames(snapshot.val()));
        
      });
  }, [firebase, groupId]);

  return (
    <>
      <Header>
        <Menu />
        <SettingsAdmin />
      </Header>
      <div className={classes.root}>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <b>Group Name: {group.name}</b>

                <p>
                  Admin:{" "}
                  {group.administrators
                    ? players.current[group.administrators[0]].firstName
                    : ""}
                </p>
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
                <b>My Games </b>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Button variant="contained" className="CreateGroup">
                <Link to={"/CreateGame/" + groupId} className="GrupoColor">
                  Create game <AddIcon></AddIcon>
                </Link>
              </Button>
            </Grid>
          </Grid>
          {/* Fazer uma lista das groups que estão na base de dados*/}
          {Object.keys(games).map((gameId) => (
            <div className="listGame">
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <b>{games[gameId].gameName}</b>
                  <p>
                    <small> Date: {games[gameId].date}</small>
                    <small>| Time: {games[gameId].timeOfTheGame}</small>
                  </p>
                  <Link to="/Info" className="GrupoColor">
                    <Button variant="contained" className="CreateGroup">
                      visit
                    </Button>
                  </Link>
                </Paper>
              </Grid>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default withFirebase(Games);
