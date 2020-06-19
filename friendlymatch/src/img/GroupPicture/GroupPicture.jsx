import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "./GroupPicture.css";

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

export default function GroupPicture() {
  const classes = useStyles();

  return (
    <div className="GroupImage">
      <div className={classes.root}>
        <Avatar
          alt="Your Group"
          variant="rounded"
          src="./Fut.png"
          className={classes.large}
        />
      </div>
    </div>
  );
}
