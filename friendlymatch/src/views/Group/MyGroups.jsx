import React from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/Form/ButtonGroup/Dashboard/menuDashboard";

export default function MyGroups() {
  return (
    <>
      <div className="rowMenu">
        <Header>
          <Menu />
        </Header>

        <NavBar />
      </div>
    </>
  );
}
