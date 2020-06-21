import React from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../img/logo.png";
import { Paper, Grid } from "@material-ui/core";
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
export default function Feedback() {
  const classes = useStyles();
  return (
    <>
      <Header>
        <Menu />
      </Header>

      <div className={classes.root}>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <h2>
                  <b>Support </b>
                </h2>
              </Paper>
            </Grid>
          </Grid>
          <form id="sign-in-form" className="container">
            <img
              className="logo_friendlyMatch"
              src={logo}
              alt="Logo FriendlyMatch"
            />
          </form>
          <div className="container">
            <p>If you have any questions, please contact us:</p>
            <p>
              <b>friendlymatch.app@gmail.com</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
