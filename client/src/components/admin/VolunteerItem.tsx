import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import "./VolunteerItem.scss";

interface volunteerItem {
  id: number;
  first_name?: string;
  last_name?: string;
  contact_email?: string;
  status?: string;
}

const UPDATE_USER = gql`
  mutation UpdateUser(
    $contact_email: String!
    $status: String!
    ) { 
      updateUser(
        contact_email: $contact_email 
        status: $status
      ) {
        contact_email
        status
      }
  }
`;

export default function VolunteerItem(props: volunteerItem) {
  const [title, setTitle] = useState(props.status);

  const [updateUser] = useMutation(UPDATE_USER);

  const {contact_email} = props;

  const handleEnable = () => {
    const status = "active";
    setTitle(status);
    updateUser({variables: {contact_email, status}})
  };

  const handleDisable = () => {
    const status = "inactive";
    setTitle(status);
    updateUser({variables: {contact_email, status}})
  };

  const handleReject = () => {
    const status = "rejected";
    setTitle(status);
    updateUser({variables: {contact_email, status}})
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
