import React from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import SettingsAdmin from "../../../components/Settings/SettingsAdmin";
import NavBar from "../../../components/Form/ButtonGroup/Group/menuGroup";
import GroupPicture from "../../../img/GroupPicture/GroupPicture";
import { Divider, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

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
export default function Games() {
  const classes = useStyles();
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
                <b>Group Name: </b>

                <p>Admin: </p>
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
                Create a game <AddIcon></AddIcon>
              </Button>
            </Grid>
          </Grid>
          {/* Fazer uma lista das groups que estão na base de dados*/}
          <div className="listGame">
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <b>Name of the game </b>
                <p>
                  <small> Date: </small>
                  <small>| Time: </small>
                </p>
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
