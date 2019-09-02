import React from "react";

interface formInfo{
  type: string
  name: string
  placeholder: string
  label: string 
}

export default function SmallInput(props: formInfo) {
  return (
    <div className="form-group col-md-4">
      <label>{props.label}</label>
      <input
        type={props.type}
        className="form-control"
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
}
