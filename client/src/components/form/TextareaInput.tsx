import React from "react";

interface textareaInfo {
  label: string;
  rows: number;
  value?: string;
  getValue?: any;
}

export default function TextareaInput(props: textareaInfo) {
  return (
    <React.Fragment>
      <div className="form-group">
        <label>{props.label}</label>
        {props.value ? props.getValue ? (
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={props.rows}
            value={props.value}
            onChange={e => props.getValue(e)}
          ></textarea>
        ) : (
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={props.rows}
              value={props.value}
              onChange={e => props.getValue(e)}
            ></textarea>
          ) : (
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={props.rows}
              onChange={e => props.getValue(e)}
            ></textarea>
          )}
      </div>
    </React.Fragment>
  );
}
