import React from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/Form/ButtonGroup/Dashboard/menuDashboard";

export default function Feedback() {
  return (
    <>
      <Header>
        <Menu />
      </Header>

      <NavBar />
      <small>HELLO WHERE IS WHERE YOU </small>
      <p>See the feedback</p>
    </>
  );
}
