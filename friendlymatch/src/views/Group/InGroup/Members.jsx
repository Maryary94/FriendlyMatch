import React, { useRef, useState } from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import SettingsAdmin from "../../../components/Settings/SettingsAdmin";
import NavBar from "../../../components/Form/ButtonGroup/Group/menuGroup";
import GroupPicture from "../../../img/GroupPicture/GroupPicture";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import { useEffect } from "react";
import { withFirebase } from "../../../services";
import { useParams } from "react-router-dom";

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
function Members({firebase}) {
  const classes = useStyles();
  let { groupId } = useParams();
  const players = useRef();
  const [group, setGroup] = useState({});

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

                <p>Admin: {group.administrators?players.current[group.administrators[0]].firstName:""}</p>
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
                <b>Members </b>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3} />
          </Grid>
          {/* Fazer uma lista dos membros que estão na base de dados*/}
          {Object.keys(group.members||{}).map((playerKey) => (
            <div className="listGame" key={playerKey}>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <b>Name: { players.current[group.members[playerKey]].firstName }</b>
                  <p> Position: { players.current[group.members[playerKey]].position }</p>
                </Paper>
              </Grid>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
}

export default withFirebase(Members);