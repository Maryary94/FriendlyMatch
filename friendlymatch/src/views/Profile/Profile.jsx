import React from "react";

import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/Form/ButtonGroup/Dashboard/menuDashboard";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import SettingsAdmin from "../../components/Settings/SettingsAdmin";
import "./Profile.css";

export default function Profile() {
  return (
    <>
      <Header>
        <Menu />
        <SettingsAdmin />
      </Header>
      <ProfilePicture />
      <NavBar />
    </>
  );
}
