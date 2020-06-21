import React from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";

import NavBar from "../../../components/Form/ButtonGroup/Game/menuGames";
import GroupPicture from "../../../img/GroupPicture/GroupPicture";
import { Divider, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./Info.css";

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
export default function GameInfos() {
  const classes = useStyles();
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
                <p>(Name) </p>
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
                <b>Info of the Game </b>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}></Grid>
          </Grid>

          <div className="listGame">
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <p>
                  <b>Date: </b>
                  (data.firebase)
                </p>
                <p>
                  <b>Time: </b>
                  (data.firebase)
                </p>
                <p>
                  <b>Location: </b>
                  (data.firebase)
                </p>
                <p>
                  <b>Times of: </b>
                  (data.firebase)
                </p>
                <p>
                  <b>Price per Player: </b>
                  (data.firebase)
                </p>
              </Paper>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
