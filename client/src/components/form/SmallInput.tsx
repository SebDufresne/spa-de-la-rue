import React from "react";

interface formInfo {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  getValue?: any;
  value?: string;
}

export default function SmallInput(props: formInfo) {
  return (
    <div className="form-group col-md-6">
      <label>{props.label}</label>
      {props.value ? props.getValue ? (
        <input
          type={props.type}
          className="form-control"
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={e => props.getValue(e)}
        />
      ) : (<input
        type={props.type}
        className="form-control"
        name={props.name}
        value={props.value}
        onChange={e => props.getValue(e)}
      />) : (
          <input
            type={props.type}
            className="form-control"
            name={props.name}
            placeholder={props.placeholder}
            onChange={e => props.getValue(e)}
          />
        )}
    </div>
  );
}
