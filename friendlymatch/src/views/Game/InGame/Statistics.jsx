import React from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";

import NavBar from "../../../components/Form/ButtonGroup/Game/menuGames";
import GroupPicture from "../../../img/GroupPicture/GroupPicture";
import { Divider, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./Statistics.css";

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
export default function Teams() {
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
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <b>Lay down the Teams</b>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <b>Team 1</b>
            </Paper>
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
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <b>Team 2</b>
            </Paper>
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
