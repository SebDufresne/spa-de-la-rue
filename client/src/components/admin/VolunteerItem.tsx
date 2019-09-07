import React from "react";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

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
        <DropdownButton
          id="dropdown-item-button"
          title={props.status}
          variant={props.status === "active" ? "success" : "warning"}
        >
          <Dropdown.Item as="button">Enable</Dropdown.Item>
          <Dropdown.Item as="button">Disable</Dropdown.Item>
          <Dropdown.Item as="button">Reject</Dropdown.Item>
        </DropdownButton>
      </td>
    </tr>
  );
}
