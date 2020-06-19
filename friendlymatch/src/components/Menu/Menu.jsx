import React from "react";
import "./Menu.css";
import { makeStyles } from "@material-ui/core/styles";

// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import {
  Avatar,
  ListItemText,
  Drawer,
  ListItem,
  Button,
  Divider,
  List,
} from "@material-ui/core";
import { withFirebase } from "../../services";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});
const useStylesAvatar = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function TemporaryDrawer({firebase}) {
  const classes = useStyles();
  const classesAvatar = useStylesAvatar();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={
        (classes.list,
        {
          [classes.fullList]: anchor === "top" || anchor === "bottom",
        })
      }
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className={classesAvatar.root}>
          <Avatar alt="R" src="/coffee.jpg" className={classesAvatar.large} />
        </div>
        {["Edit Profile"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Notifications", "Events"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Support", "Settings", "Privacy & terms"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
        <ListItem button key="Logout" onClick={()=>firebase.auth().signOut()}>
          <ListItemText primary="Logout"/>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <i className={`fas fa-bars icon`}></i>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default withFirebase(TemporaryDrawer)