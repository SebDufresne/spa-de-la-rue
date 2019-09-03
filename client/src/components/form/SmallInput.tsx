import React from "react";

interface formInfo {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  value?: string;
}

export default function SmallInput(props: formInfo) {
  if (props.value) {
    return (
      <div className="form-group col-md-6">
        <label>{props.label}</label>
        <input
          type={props.type}
          className="form-control"
          name={props.name}
          placeholder={props.placeholder}
        />
      </div>
    );
  } else {
    return (
      <div className="form-group col-md-6">
        <label>{props.label}</label>
        <input
          type={props.type}
          className="form-control"
          name={props.name}
          value={props.value}
        />
      </div>
    );
  }
}
