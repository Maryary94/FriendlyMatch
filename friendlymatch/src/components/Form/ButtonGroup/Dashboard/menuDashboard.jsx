import React from "react";
import { Button, ButtonGroup, Divider } from "@material-ui/core";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
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
          <Button>Groups</Button>
          <Button>Games</Button>
          <Button>Profile</Button>
        </ButtonGroup>
      </div>
      <Divider />
    </>
  );
}
