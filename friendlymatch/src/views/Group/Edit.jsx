import React, { useEffect, useState } from "react";
import "./Create.css";
import Header from "../../components/Header/Header";
import Input from "../../components/Form/Input/Input";
import UpdateImage from "../../components/UploadImage/UploadImage";
import Button from "../../components/Form/Button/Button";
import { withFirebase } from "../../services";
// import { useRef } from "react";
import Close from "../../components/Icons/Close/Close";
import { useParams } from "react-router-dom";

function Edit({ firebase, history }) {
  const { groupId } = useParams();
  const [groupName, setGroupName] = useState();

  useEffect(() => {
    firebase
      .database()
      .ref("Groups")
      .child(groupId)
      .on("value", (snapshot) => {
        let group = snapshot.val();
        setGroupName(group.name);
      });
  }, [firebase, groupId]);

  const handleEditGroup = () => {
    firebase
      .database()
      .ref("Groups")
      .child(groupId)
      .update(
        {
          name: groupName,
        },
        (error) => {
          if (error) {
            console.error(error);
          } else {
            history.goBack();
          }
        }
      );
  };

  return (
    <>
      <Header // iconLeft={"fas fa-times"}
      // title={"Edit New Group"}
      >
        <Close link="/MyGroups" />
      </Header>
      <div className="CreateGroupName">
        <p>
          <b>Edit Group</b>
        </p>
        <Input
          id="GroupName"
          type="text"
          placeholder="Name of the Group"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
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
          onClick={handleEditGroup}
        />
      </div>
    </>
  );
}

export default withFirebase(Edit);
