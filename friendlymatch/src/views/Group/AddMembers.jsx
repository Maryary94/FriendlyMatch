import React from "react";
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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AddMembers() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
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
            value={personName}
            onChange={handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="ContinueButtonGroup">
        <Button name="Add Members" type="submit" btnColor="success" />
      </div>
    </>
  );
}
