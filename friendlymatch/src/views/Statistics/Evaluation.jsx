import React from "react";
import "./Evaluation.css";
//import images from "../../img/images.png";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Divider,
} from "@material-ui/core";

import Button from "../../components/Form/Button/Button";
// import Input from "../../components/Form/Input/Input";
import Header from "../../components/Header/Header";

export default function Evaluation() {
  const [value, setValue] = React.useState("statistics");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Header title="Statistics" iconLeft={"fas fa-chevron-left"} />
      <div className="formContainerEvaluation">
        <div className="container">
          <div className="row">
            {/*
            <div className="colImagem">
              <img
                className="Player"
                src={images}
                alt="player "
                class="img-thumbnail"
              />
            </div>
            */}
            <FormControl component="fieldset" className="FormWidth">
              <FormLabel component="legend">
                Statistics (pode ser o nome do atleta)
              </FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
              </RadioGroup>
            </FormControl>
          </div>
          <Divider />
        </div>

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
