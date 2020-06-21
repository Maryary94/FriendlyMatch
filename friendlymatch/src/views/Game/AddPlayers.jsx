import React, { useState, useEffect } from "react";
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
import "./AddPlayers.css";
import {
  PersonAdd,
  Facebook,
  Instagram,
  Twitter,
  Link,
} from "@material-ui/icons";
import { withFirebase } from "../../services";
import { useParams } from "react-router-dom";

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

function AddPlayers({firebase, history}) {
  const { gameId } = useParams();
  const classes = useStyles();
  const theme = useTheme();
  
  const [members, setMembers] = useState({});
  const [players, setPlayers] = useState([]);

  useEffect(()=>{
    firebase
      .database()
      .ref("Users")
      .on("value", (snapshot)=>{
        const users = snapshot.val();
        firebase
          .database()
          .ref("Games")
          .child(gameId)
          .once("value", (snapshot)=>{
            const gameInfo = snapshot.val();

            firebase
              .database()
              .ref("Groups")
              .child(gameInfo.groupId)
              .child("members")
              .on("value", (snapshot)=>{
                var groupMembersKeys = snapshot.val();
                setMembers(Object.keys(users)
                  .filter(key => groupMembersKeys.includes(key))
                  .reduce((obj, key) => {
                    obj[key] = users[key];
                    return obj;
                  }, {})
                );
                setPlayers(gameInfo.players||[]);
              });
          });
      });
  }, [firebase, gameId]);

  const handleConfirm = () => {
    console.log("confirm");
    firebase
      .database()
      .ref("Games")
      .child(gameId)
      .child("players")
      .set(players, (error)=>{
        if(error)
          console.error(error);
        else
          history.push("/InGamePlayers/"+gameId);
      })
  };
  
  return (
    <>
      <Header>
        <Close link="/GroupMembers" />
      </Header>

      <div className={classes.root}>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <b>
                  <PersonAdd></PersonAdd> Add Players
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
          <InputLabel id="demo-mutiple-chip-label">Players Names</InputLabel>
          <Select
            labelId="mutiple-members"
            id="mutiple-members"
            multiple
            value={players}
            onChange={e => setPlayers(e.target.value)}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value} label={members[value].firstName+" "+members[value].lastName} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {Object.keys(members).map((playerKey) => (
              <MenuItem
                key={playerKey}
                value={playerKey}
                style={getStyles(playerKey, players, theme)}
              >
                {members[playerKey].firstName+" "+members[playerKey].lastName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="ContinueButtonGroup">
        <Button name="Add Players" type="submit" btnColor="success" onClick={handleConfirm}/>
      </div>
    </>
  );
}

export default withFirebase(AddPlayers);