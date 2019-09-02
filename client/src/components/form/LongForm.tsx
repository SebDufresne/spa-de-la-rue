import React from "react";

interface formInfo{
  type: string
  name: string
}

export default function HalfForm(props: formInfo) {
  return (
    <div className="form-group col-md-8">
      <label>{props.name}</label>
      <input
        type={props.type}
        className="form-control"
        name={props.name}
        placeholder={props.name}
      />
    </div>
  );
}
