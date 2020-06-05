import React from "react";
import "./Evaluation.css";
import images from "../../img/images.png";

import Button from "../../components/Form/Button/Button";
// import Input from "../../components/Form/Input/Input";
import Header from "../../components/Header/Header";

export default function Thanks() {
  return (
    <>
      <Header title="Statistics" iconLeft={"fas fa-chevron-left"} />
      <div className="formContainerEvaluation">
        <div class="container">
          <div className="row">
            <div className="colImagem">
              <img
                className="Player"
                src={images}
                alt="player "
                class="img-thumbnail"
              />
            </div>
            <div class="colRadioButtons">
              <p> Name of the player</p>
              {/* radio-buttons*/}
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline1"
                  name="customRadioInline1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadioInline1">
                  1
                </label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline2"
                  name="customRadioInline1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadioInline2">
                  2
                </label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline2"
                  name="customRadioInline1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadioInline2">
                  3
                </label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline2"
                  name="customRadioInline1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadioInline2">
                  4
                </label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline2"
                  name="customRadioInline1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadioInline2">
                  5
                </label>
              </div>
            </div>
          </div>
          {/* TESTE FOR MORE radio-buttons*/}
          <div className="row">
            <div className="colImagem">
              <img
                className="Player"
                src={images}
                alt="player "
                class="img-thumbnail"
              />
            </div>
            <div class="colRadioButtons">
              <p> Name of the player</p>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline1"
                  name="customRadioInline1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadioInline1">
                  1
                </label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline2"
                  name="customRadioInline1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadioInline2">
                  2
                </label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline2"
                  name="customRadioInline1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadioInline2">
                  3
                </label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline2"
                  name="customRadioInline1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadioInline2">
                  4
                </label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline2"
                  name="customRadioInline1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadioInline2">
                  5
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* TESTE FOR MORE radio-buttons*/}
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
