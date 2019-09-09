import React, { useContext } from "react";
import BootstrapVolProfile from "./BootstrapVolProfile";
import { useSelector } from "react-redux";

import { UserContext } from "contexts/UserContext";

export default function DisplayVolunteerProfile() {
  const { userInfo: { contact_email }} = useContext(UserContext);

  return (
    <div className="container">
      {contact_email && <BootstrapVolProfile contact_email={contact_email} />}
    </div>
  );
}
