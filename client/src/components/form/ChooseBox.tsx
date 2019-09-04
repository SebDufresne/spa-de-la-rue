import React from "react";

interface chooseBoxInfo {
  label: string;
  default: string;
  options: string[];
  value?: string;
}

export default function ChooseBox(props: chooseBoxInfo) {
  return (
    <div className="form-group col-md-6">
      <label>{props.label}</label>
      <select name={props.label} className="form-control">
        {props.value ? (
          <option disabled>{props.default}</option>
        ) : (
            <option defaultValue={props.default}>{props.default}</option>
          )}
        {props.options.map((option, index) => {
          if (props.value && option === props.value)
            return <option key={index} defaultValue={props.value}>{option}</option>;
          else return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
}
