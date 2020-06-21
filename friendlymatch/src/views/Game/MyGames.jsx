import React from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/Form/ButtonGroup/Dashboard/menuDashboard";
import ProfilePicture from "../../img/ProfilePicture/ProfilePicture";
import { Button, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./MyGames.css";
import { Link } from "react-router-dom";
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
            <Grid item xs={6} sm={3}></Grid>
          </Grid>
          {/* Fazer uma lista das groups que estão na base de dados*/}
          <div className="listGame">
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <b>Name of the game </b>

                <p> Name of the group: </p>
                <Link to={"/Info"} className="CreateGroupColor">
                  <Button variant="contained" className="CreateGroup">
                    visit
                  </Button>
                </Link>
              </Paper>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
