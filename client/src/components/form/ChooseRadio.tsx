import React from "react";

interface chooseRadioInfo {
  legend: string;
  options: string[];
}

export default function ChooseRadio(props: chooseRadioInfo) {
  return (
    <React.Fragment>
      <legend className="col-form-label col-sm-1 pt-0">{props.legend}</legend>
      <div className="col-sm-3">
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
    </React.Fragment>
  );
}
