import React from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/Form/ButtonGroup/Dashboard/menuDashboard";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { Button, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./MyGames.css";
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

export default function MyGames() {
  const classes = useStyles();
  return (
    <>
      <Header>
        <Menu />
      </Header>
      <ProfilePicture />
      <NavBar />

      <div className={classes.root}>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <b>My Games </b>
              </Paper>
            </Grid>
          </Grid>
          {/* Fazer uma lista das groups que estão na base de dados*/}
          <div className="listGame">
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <b>Name of the game </b>
                <p> Name of the Group: </p>
                <Button variant="contained" className="CreateGroup">
                  visit
                </Button>
              </Paper>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
