import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
import "./SignUp.css";

import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";
import Header from "../../components/Header/Header";

const positionField = [
  {
    value: " Lateral Esquerdo",
    label: " Lateral Esquerdo",
  },
  {
    value: "Lateral Direito",
    label: "Lateral Direito",
  },
  {
    value: " Ponta de Lança",
    label: " Ponta de Lança",
  },
  {
    value: "Extermo Direito",
    label: "Extermo Direito",
  },
  {
    value: " Extermo Esquerdo",
    label: " Extermo Esquerdo",
  },
  {
    value: "Guarda Redes",
    label: "Guarda Redes",
  },
  {
    value: " Médio",
    label: " Médio",
  },
  {
    value: "Defesa Direito",
    label: "Defesa Direito",
  },
  {
    value: "Defesa Esquerdo",
    label: "Defesa Esquerdo",
  },
  {
    value: "Defesa Central",
    label: "Defesa Central",
  },
];
export default function SignUp() {
  const [Position, setPosition] = React.useState("Position");
  const handleChangePosition = (event) => {
    setPosition(event.target.value);
  };
  return (
    <>
      <Header
        // title=" Welcome Registration"
        iconLeft={"fas fa-times"}
        // iconRight={"fas fa-times"}
      />

      <h3 className="title">Welcome Registration</h3>

      <div className="formContainerSignUp">
        <form className="container">
          <Input type="text" id="firstName" placeholder="First Name" />
          <Input type="text" id="lastName" placeholder="Last Name" />
          <Input type="number" id="phone" placeholder="Phone Number" />
          <div className="divHorizontal">
            <Input
              type="text"
              id="a"
              placeholder="Date of Birth"
              disabled={true}
            />
            <Input type="date" id="birthday" />
          </div>
          {/*
          <div className="dropdown mt-2">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
            >
              Dropdown
            </button>

            <div className="dropdown-menu " aria-labelledby="dropdownMenu2">
              <button className="dropdown-item" type="button">
                Defesa Central
              </button>
              <button className="dropdown-item" type="button">
                Defesa Direito
              </button>
              <button className="dropdown-item" type="button">
                Defesa Esquerdo
              </button>

              <button className="dropdown-item" type="button">
                Médio
              </button>
              <button className="dropdown-item" type="button">
                Guarda Redes
              </button>
              <button className="dropdown-item" type="button">
                Lateral Esquerdo
              </button>
              <button className="dropdown-item" type="button">
                Lateral Direito
              </button>
              <button className="dropdown-item" type="button">
                Ponta de Lança
              </button>
              <button className="dropdown-item" type="button">
                Extermo Direito
              </button>
              <button className="dropdown-item" type="button">
                Extermo Esquerdo
              </button>
            </div>
          </div>
          */}
          <div className="selectPosicao">
            <TextField
              id="select-posicao"
              select
              label="   "
              value={Position}
              onChange={handleChangePosition}
              helperText="Escolha o posição que deseja jogar"
            >
              {positionField.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <Button name="Continue" type="submit" btnColor="success" />
          </div>
        </form>
      </div>
    </>
  );
}
