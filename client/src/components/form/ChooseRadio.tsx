import React from "react";

interface chooseRadioInfo {
  legend: string;
  options: string[];
}

export default function ChooseRadio(props: chooseRadioInfo) {
  return (
    <div className="form-row">
      <legend className="col-form-label col-sm-2 pt-0">{props.legend}</legend>
      <div className="col-sm-10">
        {props.options.map(option => {
          return (
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id={option}
                value={option}
              />
              <label>{option}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
