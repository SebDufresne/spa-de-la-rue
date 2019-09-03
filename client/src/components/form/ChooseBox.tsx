import React from "react";

interface chooseBoxInfo {
  label: string;
  default: string;
  options: string[];
}

export default function ChooseBox(props: chooseBoxInfo) {
  return (
    <div className="form-group col-md-6">
      <label>{props.label}</label>
      <select name={props.label} className="form-control">
        <option selected>{props.default}</option>
        {props.options.map(option => {
          return <option>{option}</option>;
        })}
      </select>
    </div>
  );
}
