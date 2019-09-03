import React from "react";

interface chooseRadioInfo {
  legend: string;
  options: string[];
  value?: string;
}

export default function ChooseRadio(props: chooseRadioInfo) {
  return (
    <React.Fragment>
      <legend className="col-form-label col-sm-2 pt-0">{props.legend}</legend>
      <div className="col-sm-4">
        {props.options.map(option => {
          return (
            <div className="form-check">
              {props.value && props.value === option ? (
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id={option}
                  value={option}
                  checked
                />
              ) : (
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id={option}
                  value={option}
                />
              )}
              <label>{option}</label>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
