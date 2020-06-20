import React from "react";
import "./Create.css";
import Header from "../../components/Header/Header";
import Input from "../../components/Form/Input/Input";
import UpdateImage from "../../components/UploadImage/UploadImage";
import Button from "../../components/Form/Button/Button";
import { withFirebase } from "../../services";
import { useRef } from "react";
import Close from "../../components/Icons/Close/Close";

function Create({ firebase, history }) {
  const name = useRef();

  const handleCreateGroup = () => {
    var currentUser = firebase.auth().currentUser;
    console.log("handleCreateGroup", currentUser);
    firebase
      .database()
      .ref("Groups")
      .push(
        {
          name: name.current,
          members: [currentUser.uid],
          administrators: [currentUser.uid],
        },
        (error) => {
          if (error) {
            console.error(error);
          } else {
            history.push("/MyGroups");
          }
        }
      );
  };

  return (
    <>
      <Header // iconLeft={"fas fa-times"}
      // title={"Create New Group"}
      >
        <Close link="/MyGroups" />
      </Header>
      <div className="CreateGroupName">
        <p>
          <b>Create New Group</b>
        </p>
        <Input
          id="GroupName"
          type="text"
          placeholder="Name of the Group"
          onChange={(e) => (name.current = e.target.value)}
        />
        <div className="rowCreateGroup">
          <small>Adicionar imagem ao grupo </small>
          <UpdateImage></UpdateImage>
        </div>
      </div>
      <div className="ButtonCreateGroup">
        <Button
          id="btn-verify"
          name="Confirm"
          btnColor="success"
          onClick={handleCreateGroup}
        />
      </div>
    </>
  );
}

export default withFirebase(Create);
