import React from "react";
import { Button, ButtonGroup, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

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
            <Link to="/Info"> Info </Link>
          </Button>
          <Button>
            <Link to="/InGamePlayers"> Players </Link>
          </Button>
          <Button>
            <Link to="/Teams"> teams </Link>
          </Button>
          {/* 
            <Button>
            <Link to="/WinningTeam">Players</Link>
            </Button>
          */}
        </ButtonGroup>
      </div>
      <Divider />
    </>
  );
}
