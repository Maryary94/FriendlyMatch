import React from "react";
import { Button, ButtonGroup, Divider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          <Button>
            <Link to="/MyGroups">Groups</Link>
          </Button>
          <Button>
            <Link to="/MyGames">Games</Link>
          </Button>

          <Button>
            <Link to="/Profile">Profile</Link>
          </Button>
        </ButtonGroup>
      </div>
      <Divider />
    </>
  );
}
