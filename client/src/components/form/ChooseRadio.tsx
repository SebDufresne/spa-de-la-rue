import React from "react";

interface chooseRadioInfo {
  legend: string;
  options: string[];
  value?: string;
  getValue: any;
}

export default function ChooseRadio(props: chooseRadioInfo) {
  return (
    <React.Fragment>
      <legend className="col-form-label col-sm-2 pt-0">{props.legend}</legend>
      <div className="col-sm-4">
        {props.options.map((option, index) => {
          return (
            <div className="form-check" key={index}>
              {props.value && props.value === option ? (
                <input
                  className="form-check-input"
                  type="radio"
                  name={props.options[0]}
                  id={option}
                  value={option}
                  onChange={e => props.getValue(e)}
                />
              ) : (
                <input
                  className="form-check-input"
                  type="radio"
                  name={props.options[0]}
                  id={option}
                  value={option}
                  onChange={e => props.getValue(e)}
                />
              )}
              <label className="form-check-label" htmlFor={option}>
                {option}
              </label>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
