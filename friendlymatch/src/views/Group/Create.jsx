import React from "react";
import "./Create.css";
import Header from "../../components/Header/Header";
import Input from "../../components/Form/Input/Input";
import UpdateImage from "../../components/UploadImage/UploadImage";
import Button from "../../components/Form/Button/Button";

export default function Create() {
  return (
    <>
      <Header
        iconLeft={"fas fa-times"}
        // title={"Create New Group"}
      ></Header>
      <div className="CreateGroupName">
        <p>
          <b>Create New Group</b>
          <Input id="GroupName" type="text" placeholder="Name of the Group" />
        </p>
        <UpdateImage></UpdateImage>
      </div>
      <div className="ButtonCreateGroup">
        <Button id="btn-verify" name="Confirm" btnColor="success" />
      </div>
    </>
  );
}
