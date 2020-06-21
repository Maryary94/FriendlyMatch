import React, { useEffect, useRef } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import "./App.css";
// Auth
import Login from "./views/Auth/Login";
import SignUp from "./views/Auth/SignUp";
import SignIn from "./views/Auth/SignIn";
// Feedback
import CreateFeedback from "./views/Feedback/Create";

// Game
import CreateGame from "./views/Game/Create";
import EditGame from "./views/Game/Edit";
import MyGames from "./views/Game/MyGames";
import GameAddPlayers from "./views/Game/AddPlayers";
// In Game
import Info from "./views/Game/InGame/Info";
import Payments from "./views/Game/InGame/Payments";
import InGamePlayers from "./views/Game/InGame/Players";
import Statistics from "./views/Game/InGame/Statistics";
// Group
import AddMembers from "./views/Group/AddMembers";
import AddPhotoGroup from "./views/Group/AddPhoto";
import CreateGroup from "./views/Group/Create";
import EditGroup from "./views/Group/Edit";
import MyGroups from "./views/Group/MyGroups";
// InGroup
import Games from "./views/Group/InGroup/Games";
import GroupMembers from "./views/Group/InGroup/Members";
import Ranking from "./views/Group/InGroup/Ranking";
// Notifications
import TermsAndPrivacy from "./views/PrivacyAndTerms/PrivacyAndTerms";
// Players
import Players from "./views/Players/Players";
// Profile
import AddPhotoProfile from "./views/Profile/AddPhoto";
import EditProfile from "./views/Profile/Edit";
import Profile from "./views/Profile/Profile";
// Settings
import Settings from "./views/Settings/Settings";
import SettingsNotifications from "./views/Settings/Notifications";
import Language from "./views/Settings/Language";
// Statistics
import Evaluation from "./views/Statistics/Evaluation";
import Thanks from "./views/Statistics/Thanks";
// API
import Calendar from "./views/API/Calendar";
import Field from "./views/API/Field";
import NearMe from "./views/API/NearMe";
import { withFirebase } from "./services";

function App({ firebase, location, history }) {
  let authUser = useRef();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase
          .database()
          .ref("Users")
          .child(user.uid)
          .on("value", (snapshot) => {
            // var userData = snapshot.val();
            // console.log("dados do user", userData, userData.birthday);
            if (!snapshot.exists()) history.push("/SignUp");
            else if (
              location.pathname === "/Login" ||
              location.pathname === "/SignUp"
            )
              history.push("/MyGroups");
          });
        authUser.current = user;

        // firebase.database().ref("Users").child(user.uid).child("birthday").on("value", (snapshot)=>{
        //   console.log("birthday", snapshot.val());
        // });
      } else {
        history.push("/Login");
      }
    });
  }, [firebase, history, location.pathname]);

  return (
    <Switch>
      {/* Auth */}
      <Route path="/Login" exact render={(props) => <Login {...props} />} />
      <Route path="/SignUp" exact render={(props) => <SignUp {...props} />} />
      <Route path="/SignIn" exact render={(props) => <SignIn {...props} />} />

      {/* Feedback */}
      <Route
        path="/CreateFeedback"
        exact
        render={(props) => <CreateFeedback {...props} />}
      />

      {/* Game */}
      <Route
        path="/CreateGame/:groupId"
        exact
        render={(props) => <CreateGame {...props} />}
      />
      <Route
        path="/EditGame/:gameId"
        exact
        render={(props) => <EditGame {...props} />}
      />
      <Route path="/MyGames" exact render={(props) => <MyGames {...props} />} />
      <Route
        path="/GameAddPlayers"
        exact
        render={(props) => <GameAddPlayers {...props} />}
      />

      {/* In Game */}
      <Route path="/Info/:gameId" exact render={(props) => <Info {...props} />} />
      <Route
        path="/WinningTeam"
        exact
        render={(props) => <Payments {...props} />}
      />
      <Route
        path="/InGamePlayers/:gameId"
        exact
        render={(props) => <InGamePlayers {...props} />}
      />
      <Route
        path="/Teams/:gameId"
        exact
        render={(props) => <Statistics {...props} />}
      />

      {/* Group */}
      <Route
        path="/AddMembers/:groupId"
        exact
        render={(props) => <AddMembers {...props} />}
      />
      <Route
        path="/AddPhotoGroup"
        exact
        render={(props) => <AddPhotoGroup {...props} />}
      />
      <Route
        path="/CreateGroup"
        exact
        render={(props) => <CreateGroup {...props} />}
      />
      <Route
        path="/EditGroup/:groupId"
        exact
        render={(props) => <EditGroup {...props} />}
      />
      <Route
        path="/MyGroups"
        exact
        render={(props) => <MyGroups {...props} />}
      />

      {/* InGroup */}
      <Route
        path="/Games/:groupId"
        exact
        render={(props) => <Games {...props} />}
      />
      <Route
        path="/GroupMembers/:groupId"
        exact
        render={(props) => <GroupMembers {...props} />}
      />
      <Route path="/Ranking/:groupId" exact render={(props) => <Ranking {...props} />} />

      {/* Notifications */}
      <Route
        path="/TermsAndPrivacy"
        exact
        render={(props) => <TermsAndPrivacy {...props} />}
      />

      {/* Players */}
      <Route path="/Players" exact render={(props) => <Players {...props} />} />

      {/* Profile */}
      <Route
        path="/AddPhotoProfile"
        exact
        render={(props) => <AddPhotoProfile {...props} />}
      />
      <Route
        path="/EditProfile"
        exact
        render={(props) => <EditProfile {...props} />}
      />
      <Route path="/Profile" exact render={(props) => <Profile {...props} />} />

      {/* Settings */}
      <Route
        path="/Settings"
        exact
        render={(props) => <Settings {...props} />}
      />
      <Route
        path="/SettingsNotifications"
        exact
        render={(props) => <SettingsNotifications {...props} />}
      />
      <Route
        path="/Language"
        exact
        render={(props) => <Language {...props} />}
      />

      {/* API */}
      <Route
        path="/Evaluation"
        exact
        render={(props) => <Evaluation {...props} />}
      />
      <Route path="/Thanks" exact render={(props) => <Thanks {...props} />} />

      {/* API */}
      <Route
        path="/Calendar"
        exact
        render={(props) => <Calendar {...props} />}
      />
      <Route path="/Field" exact render={(props) => <Field {...props} />} />
      <Route path="/NearMe" exact render={(props) => <NearMe {...props} />} />

      <Redirect to="/MyGroups" />
    </Switch>
  );
}

export default withRouter(withFirebase(App));
