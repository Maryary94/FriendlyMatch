import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Close from "../../components/Icons/Close/Close";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Divider,
  Input,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
} from "@material-ui/core";

import Button from "../../components/Form/Button/Button";
import "./AddMembers.css";
import {
  PersonAdd,
  Facebook,
  Instagram,
  Twitter,
  Link,
} from "@material-ui/icons";
import { withFirebase } from "../../services";
import { useParams } from "react-router-dom";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function AddMembers({firebase, history}) {
  const { groupId } = useParams();
  const classes = useStyles();
  const theme = useTheme();

  const [players, setPlayers] = useState({});
  const [members, setMembers] = useState([]);
  useEffect(()=>{
    firebase
      .database()
      .ref("Users")
      .on("value", (snapshot)=>{
        setPlayers(snapshot.val());
        firebase
          .database()
          .ref("Groups")
          .child(groupId)
          .child("members")
          .on("value", (snapshot)=>{
            setMembers(snapshot.val());
          });
      });
  }, [firebase, groupId]);

  const handleConfirm = () => {
    console.log("confirm");
    firebase
      .database()
      .ref("Groups")
      .child(groupId)
      .child("members")
      .set(members, (error)=>{
        if(error)
          console.error(error);
        else
          history.push("/GroupMembers/"+groupId);
      })
  };

  return (
    <>
      <Header>
        <Close link={"/GroupMembers/"+groupId} />
      </Header>

      <div className={classes.root}>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <b>
                  <PersonAdd></PersonAdd> Add Members
                </b>
                <p>
                  <b>Send a request to join</b>
                </p>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>

      <Divider />
      <div className="WaysToSendInvitationsGroup">
        <Facebook></Facebook>
        <Instagram></Instagram>
        <Twitter></Twitter>
        <Link></Link>
      </div>
      <Divider />
      <Divider />
      <Divider />
      <div className="MembersNames">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-chip-label">Members Names</InputLabel>
          <Select
            labelId="mutiple-members"
            id="mutiple-members"
            multiple
            value={members}
            onChange={e => setMembers(e.target.value)}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value} label={players[value].firstName+" "+players[value].lastName} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {Object.keys(players).map((playerKey) => (
              <MenuItem
                key={playerKey}
                value={playerKey}
                style={getStyles(playerKey, members, theme)}
              >
                {players[playerKey].firstName+" "+players[playerKey].lastName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="ContinueButtonGroup">
        <Button name="Add Members" type="submit" btnColor="success" onClick={handleConfirm}/>
      </div>
    </>
  );
}

export default withFirebase(AddMembers);