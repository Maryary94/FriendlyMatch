import React from "react";
import "./Evaluation.css";
import { Link } from "react-router-dom";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Divider,
} from "@material-ui/core";

import Button from "../../components/Form/Button/Button";

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
            <FormControl component="fieldset" className="FormWidth">
              <FormLabel component="legend">Name 1</FormLabel>
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
              <Divider />
              <p></p>

              <FormLabel component="legend">Name 2</FormLabel>
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
              <Divider />
              <p></p>

              <FormLabel component="legend">Name 3</FormLabel>
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
              <Divider />
              <p></p>

              <FormLabel component="legend">Name 4</FormLabel>
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
              <Divider />
              <p></p>

              <FormLabel component="legend">Name 5</FormLabel>
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
              <Divider />
            </FormControl>
          </div>
        </div>

        <form className="container">
          <Link to="/Thanks" className="GrupoColor">
            <Button
              className="buttonThanks"
              name="Send"
              type="submit"
              btnColor="success"
            />
          </Link>
        </form>
      </div>
    </>
  );
}
