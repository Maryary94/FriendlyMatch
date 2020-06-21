import React from "react";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import SettingsAdmin from "../../../components/Settings/SettingsAdmin";

import NavBar from "../../../components/Form/ButtonGroup/Group/menuGroup";
import GroupPicture from "../../../img/GroupPicture/GroupPicture";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import "./Ranking.css";

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
export default function Ranking() {
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
            <Grid item xs={12} sm={6}>
              <div className="PaperColor">
                <Paper className={classes.paper}>
                  <b>Ranking by points earned</b>
                </Paper>
              </div>
            </Grid>
          </Grid>
          {/* Fazer uma lista dos membros que estão na base de dados*/}
          <div className="listGame">
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <b>Name: </b>
                <p>Points: </p>
              </Paper>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
