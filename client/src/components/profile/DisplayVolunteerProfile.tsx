import React from "react";
import BootstrapVolProfile from "./BootstrapVolProfile";
import { useSelector } from "react-redux";

export default function DisplayVolunteerProfile() {
  const contact_email = useSelector(
    (state: any) => state.app.userInfo && state.app.userInfo.email
  )
  
  return (
    <div className="container">
      {contact_email && <BootstrapVolProfile contact_email={contact_email} />}
    </div>
  );
}
