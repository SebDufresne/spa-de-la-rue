import React, { useState } from "react";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import "./VolunteerItem.scss";

interface volunteerItem {
  id: number;
  first_name?: string;
  last_name?: string;
  contact_email?: string;
  status?: string;
}

export default function VolunteerItem(props: volunteerItem) {
  const [title, setTitle] = useState(props.status);

  const handleEnable = () => {
    setTitle("active");
  };

  const handleDisable = () => {
    setTitle("inactive");
  };

  const handleReject = () => {
    setTitle("rejected");
  };

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.first_name}</td>
      <td>{props.last_name}</td>
      <td>
        <div className="dropdown">
          <button
            className={
              "btn dropdown-toggle " +
              (title === "active"
                ? "btn-success"
                : title === "inactive"
                ? "btn-secondary"
                : "btn-warning")
            }
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {title}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              href="#"
              className={
                "dropdown-item " + (title === "active" ? "disabled" : "")
              }
              onClick={handleEnable}
            >
              Enable
            </a>
            <a
              href="#"
              className={
                "dropdown-item " + (title === "inactive" ? "disabled" : "")
              }
              onClick={handleDisable}
            >
              Disable
            </a>
            <a
              href="#"
              className={
                "dropdown-item reject " +
                (title === "rejected" ? "disabled" : "")
              }
              onClick={handleReject}
            >
              Reject
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
}
