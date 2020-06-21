import React, { useState, useEffect } from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import SettingsAdmin from "../../../components/Settings/SettingsAdmin";

import NavBar from "../../../components/Form/ButtonGroup/Group/menuGroup";
import GroupPicture from "../../../img/GroupPicture/GroupPicture";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import "./Ranking.css";
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
function Ranking({ firebase }) {
  const classes = useStyles();
  let { groupId } = useParams();
  const [players, setPlayers] = useState({});
  const [group, setGroup] = useState({});

  useEffect(() => {
    firebase
      .database()
      .ref("Users")
      .once("value")
      .then((snapshot) => {
        setPlayers(snapshot.val());
        firebase
          .database()
          .ref("Groups")
          .child(groupId)
          .on("value", (snapshot) => setGroup(snapshot.val()));
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
                    ? players[group.administrators[0]].firstName
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
            <Grid item xs={12} sm={6}>
              <div className="PaperColor">
                <Paper className={classes.paper}>
                  <b>Ranking by points earned</b>
                </Paper>
              </div>
            </Grid>
          </Grid>
          {/* Fazer uma lista dos membros que estão na base de dados*/}
          {(group.members || []).map((playerKey) => (
            <div className="listGame" key={playerKey}>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <b>
                    Name:{" "}
                    {players[playerKey].firstName +
                      " " +
                      players[playerKey].lastName}
                  </b>
                  <p>Points: </p>
                </Paper>
              </Grid>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default withFirebase(Ranking);
