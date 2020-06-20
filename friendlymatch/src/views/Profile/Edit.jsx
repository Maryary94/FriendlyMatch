import React from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/Form/ButtonGroup/Dashboard/menuDashboard";

export default function Edit() {
  return (
    <>
      <Header>
        <Menu />
      </Header>

      <NavBar />
      <small>HELLO HERE IS WHERE YOU </small>
      <p>EDIT YOUR PROFILE</p>
    </>
  );
}
