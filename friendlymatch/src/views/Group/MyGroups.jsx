import React from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/Form/ButtonGroup/Dashboard/menuDashboard";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import AddIcon from "@material-ui/icons/Add";
import { Button, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./MyGroups.css";
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

export default function MyGroups() {
  const classes = useStyles();
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
              <Button variant="contained" className="CreateGroup">
                Create group <AddIcon></AddIcon>
              </Button>
            </Grid>
          </Grid>
          {/* Fazer uma lista das groups que estão na base de dados*/}
          <div className="listGroups">
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <b>Name of the group </b>
                <p> Admin Name: </p>
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
