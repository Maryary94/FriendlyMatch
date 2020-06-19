import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import LeftArrow from "@material-ui/icons/ArrowBackIos";
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
          <LeftArrow />
        </IconButton>
      </Link>
    </div>
  );
}
