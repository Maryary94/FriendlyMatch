import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "./ProfilePicture.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ProfilePicture() {
  const classes = useStyles();

  return (
    <div className="profileImage">
      <div className={classes.root}>
        <Avatar alt="Your name" src="./coffee.jpg" className={classes.large} />
      </div>
    </div>
  );
}
