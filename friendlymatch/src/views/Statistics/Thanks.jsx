import React from "react";
import "./Thanks.css";
import { Link } from "react-router-dom";
import Button from "../../components/Form/Button/Button";
import Header from "../../components/Header/Header";

export default function Thanks() {
  return (
    <>
      <Header title="Evaluation" iconLeft={"fas fa-chevron-left"} />
      <div className="formContainerThanks">
        <form className="container">
          <h3 className="thankYou">Thanks for your help.</h3>
        </form>
      </div>
      <Link to="/MyGames" className="GrupoColor">
        <Button
          className="buttonThanks"
          name="Save"
          type="submit"
          btnColor="success"
        />
      </Link>
    </>
  );
}
