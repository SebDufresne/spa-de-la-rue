import React from "react";
import SmallForm from "../SmallForm";
import LongForm from "../LongForm";

export default function CreateVolunteer() {
  return (
    <form>
      <div className="form-row">
        <SmallForm
          name="firstName"
          type="name"
          placeholder="First name"
          label="First name"
        />
        <SmallForm
          name="lastName"
          type="name"
          placeholder="Last name"
          label="Last name"
        />
      </div>
      <div className="form-row">
        <SmallForm
          name="password"
          type="password"
          placeholder="Password"
          label="Password"
        />
        <SmallForm
          name="passwordConformation"
          type="password"
          placeholder="Conform your password"
          label="Confirm your password"
        />
      </div>
    </form>
  );
}
