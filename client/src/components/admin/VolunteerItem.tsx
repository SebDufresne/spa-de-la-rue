import React from "react";
import Table from "react-bootstrap";

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
      <td>{props.status}</td>
    </tr>
  );
}
