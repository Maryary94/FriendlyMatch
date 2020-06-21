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
  const {groupId} = useParams();
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
            <Link to={"/Games/"+groupId}>Games</Link>
          </Button>
          <Button>
            <Link to={"/GroupMembers/"+groupId}>Members</Link>
          </Button>
          <Button>
            <Link to={"/Ranking/"+groupId}>Ranking</Link>
          </Button>
        </ButtonGroup>
      </div>
      <Divider />
    </>
  );
}
