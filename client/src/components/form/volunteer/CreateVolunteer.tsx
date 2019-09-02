import React from "react";
import SmallForm from "../SmallForm";

export default function CreateVolunteer() {
  return (
    <form>
      <div className="form-row">
        <SmallForm name="email" type="email" />
        <SmallForm name="password" type="password" />
      </div>
    </form>
  );
}
