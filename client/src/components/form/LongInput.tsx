import React, { useState } from "react";

interface formInfo {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  getValue?: any;
  value?: string;
}

export default function SmallInput(props: formInfo) {
  const [value, setValue] = useState(props.value);
  return (
    <div className="form-group col-md-12">
      <label>{props.label}</label>
      {props.value ? (
        props.getValue ? (
          <input
            type={props.type}
            className="form-control"
            name={props.name}
            value={value}
            placeholder={props.placeholder}
            onChange={e => {
              setValue(e.target.value);
              props.getValue(e);
            }}
          />
        ) : (
          <input
            type={props.type}
            className="form-control"
            name={props.name}
            value={value}
            onChange={e => {
              setValue(e.target.value);
              props.getValue(e);
            }}
          />
        )
      ) : (
        <input
          type={props.type}
          className="form-control"
          name={props.name}
          placeholder={props.placeholder}
          onChange={e => {
            props.getValue(e);
          }}
        />
      )}
    </div>
  );
}
