import React from "react";

import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/Form/ButtonGroup/Dashboard/menuDashboard";
import ProfilePicture from "../../img/ProfilePicture/ProfilePicture";
import SettingsProfile from "../../components/Settings/SettingsProfile";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import "./Profile.css";

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

export default function Profile() {
  const classes = useStyles();
  return (
    <>
      <Header>
        <Menu />
        <SettingsProfile />
      </Header>
      <ProfilePicture />
      <NavBar />
      <div className={classes.root}>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <b>Profile </b>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3} />
          </Grid>
          {/* Fazer uma lista das groups que estão na base de dados*/}
          <div className="listGame">
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <b> Profile Details </b>
                <p> Name: </p>
                <p> NickName: </p>
                <p> Age: </p>
                <p> Birthday: </p>
                <p> Height: </p>
                <p> T-shirt Number: </p>
                <p> Position: </p>
              </Paper>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
