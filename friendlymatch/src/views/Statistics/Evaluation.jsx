import React from "react";
import "./Evaluation.css";

import Button from "../../components/Form/Button/Button";
import Header from "../../components/Header/Header";

export default function Thanks() {
  return (
    <>
      <Header title="Statistics" iconLeft={"fas fa-chevron-left"} />
      <div className="formContainerEvaluation">
        <form className="container">
          <Button
            className="buttonThanks"
            name="Send"
            type="submit"
            btnColor="success"
          />
        </form>
      </div>
    </>
  );
}
