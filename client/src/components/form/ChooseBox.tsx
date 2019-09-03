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
          <option selected>{props.default}</option>
        )}
        {props.options.map(option => {
          if (props.value && option === props.value)
            return <option selected>{option}</option>;
          else return <option>{option}</option>;
        })}
      </select>
    </div>
  );
}
