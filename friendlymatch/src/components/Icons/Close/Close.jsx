import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function IconButtons(props) {
  const classes = useStyles();
  //  as={Link} to="/Login"
  return (
    <div className={classes.root}>
      <Link to={`${props.link}`}>
        <IconButton aria-label="delete">
          <CloseIcon />
        </IconButton>
      </Link>
    </div>
  );
}
