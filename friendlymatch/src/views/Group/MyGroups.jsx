import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/Form/ButtonGroup/Dashboard/menuDashboard";
import ProfilePicture from "../../img/ProfilePicture/ProfilePicture";
import AddIcon from "@material-ui/icons/Add";
import { Button, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./MyGroups.css";
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

function MyGroups({ firebase, history }) {
  const classes = useStyles();
  const players = useRef();
  const [playerGroups, setPlayerGroups] = useState({});

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
        .on("value", (snapshot) => {
            let allGroups = snapshot.val();
            setPlayerGroups(
              Object.keys(allGroups)
                .filter((group) =>
                  allGroups[group].members.includes(firebase.auth().currentUser.uid)
                )
                .reduce((obj, key) => {
                  obj[key] = allGroups[key];
                  return obj;
                }, {})
            );
          });
      });
  }, [firebase]);

  return (
    <>
      <Header>
        <Menu />
      </Header>
      <ProfilePicture />
      <NavBar />

      <div className={classes.root}>
        <div className="GridTitle">
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <b>My Groups </b>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Button
                variant="contained"
                className="CreateGroup"
                onClick={() => history.push("/CreateGroup")}
              >
                Create group <AddIcon></AddIcon>
              </Button>
            </Grid>
          </Grid>
          {/* Fazer uma lista das groups que estão na base de dados*/}
          {Object.keys(playerGroups).map((groupId) => (
            <div className="listGroups" key={groupId}>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <b> {playerGroups[groupId].name} </b>
                  <p>
                    Administrador:
                    {
                      players.current[playerGroups[groupId].administrators[0]]
                        .firstName
                    }
                  </p>
                  <Link to={"/Games/"+groupId} className="CreateGroupColor">
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

export default withFirebase(MyGroups);
