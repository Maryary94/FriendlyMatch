import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Form/Button/Button";
import "./AddMembers.css";
import {
  PersonAdd,
  Facebook,
  Instagram,
  Twitter,
  Link,
} from "@material-ui/icons";

import { Divider } from "@material-ui/core";
export default function AddMembers() {
  return (
    <>
      <Header
        iconLeft={"fas fa-times"}
        title={"Create New Group"}
        iconRight={"fas fa-check"}
      ></Header>
      <div className="AddPlayersGroup">
        <div>
          <p>
            <b>
              <PersonAdd></PersonAdd> Add Players
            </b>
          </p>

          <b>Send a request to join</b>
        </div>
      </div>

      <Divider />
      <div className="WaysToSendInvitationsGroup">
        <Facebook></Facebook>
        <Instagram></Instagram>
        <Twitter></Twitter>
        <Link></Link>
      </div>
      <div className="ContinueButtonGroup">
        <Button name="Continue" type="submit" btnColor="success" />
      </div>
    </>
  );
}
