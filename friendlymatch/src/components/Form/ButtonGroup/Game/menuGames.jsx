import React from "react";
import { Button, ButtonGroup, Divider } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";

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
  const {gameId} = useParams();

  return (
    <>
      <div className={classes.root}>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          <Button>
            <Link to={"/Info/"+gameId}> Info </Link>
          </Button>
          <Button>
            <Link to={"/InGamePlayers/"+gameId}> Players </Link>
          </Button>
          <Button>
            <Link to={"/Teams/"+gameId}> teams </Link>
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
