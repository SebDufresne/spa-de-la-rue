import React from "react";

interface formInfo {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  value?: string;
}

export default function SmallInput(props: formInfo) {
  return (
    <div className="form-group col-md-12">
      <label>{props.label}</label>
      {props.value ? (
        <input
          type={props.type}
          className="form-control"
          name={props.name}
          value={props.value}
        />
      ) : (
        <input
          type={props.type}
          className="form-control"
          name={props.name}
          placeholder={props.placeholder}
        />
      )}
    </div>
  );
}