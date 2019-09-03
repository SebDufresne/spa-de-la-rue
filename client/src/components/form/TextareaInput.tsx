import React from "react";

interface textareaInfo {
  label: string;
  rows: number;
  value?: string;
}

export default function TextareaInput(props: textareaInfo) {
  return (
    <React.Fragment>
      <div className="form-group col-md-12">
        <label>{props.label}</label>
        {props.value ? (
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={props.rows}
            value={props.value}
          ></textarea>
        ) : (
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={props.rows}
          ></textarea>
        )}
      </div>
    </React.Fragment>
  );
}
