import React from "react";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
// import "./VolunteerItem.scss";

interface volunteerItem {
  id: number;
  first_name?: string;
  last_name?: string;
  contact_email?: string;
  status?: string;
}

export default function VolunteerItem(props: volunteerItem) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.first_name}</td>
      <td>{props.last_name}</td>
      <td>
        {/* <DropdownButton
          id="dropdown-item-button"
          title={props.status}
          variant={props.status === "active" ? "success" : "warning"}
        >
          <Dropdown.Item as="button">Enable</Dropdown.Item>
          <Dropdown.Item as="button">Disable</Dropdown.Item>
          <Dropdown.Item as="button">Reject</Dropdown.Item>
        </DropdownButton> */}
        <div className="dropdown">
          <button
            className={
              "btn dropdown-toggle " +
              (props.status === "active" ? "btn-success" : "btn-warning")
            }
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {props.status}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a href="#" className="dropdown-item enable">
              Enable
            </a>
            <a href="#" className="dropdown-item disable ">
              Disable
            </a>
            <a href="#" className="dropdown-item reject ">
              reject
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
}
