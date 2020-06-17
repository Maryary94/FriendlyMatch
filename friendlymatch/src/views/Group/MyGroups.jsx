import React from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/Form/ButtonGroup/Dashboard/menuDashboard";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";

export default function MyGroups() {
  return (
    <>
      <div className="rowMenu">
        <Header>
          <Menu />
        </Header>
        <ProfilePicture />
        <NavBar />
      </div>
    </>
  );
}
