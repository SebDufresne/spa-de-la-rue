import React from "react";

interface chooseInfo {
  label: string;
  default: string;
  options: string[];
}

export default function ChooseBox(props: chooseInfo) {
  return (
    <div className="form-group col-md-4">
      <label>{props.label}</label>
      <select id="inputState" className="form-control">
        <option selected>{props.default}</option>
        {props.options.map(option => {
          return <option>{option}</option>;
        })}
      </select>
    </div>
  );
}
