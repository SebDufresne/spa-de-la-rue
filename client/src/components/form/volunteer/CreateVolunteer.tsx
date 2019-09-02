import React from "react";
import SmallInput from "../SmallInput";
import LongInput from "../LongInput";

export default function CreateVolunteer() {
  return (
    <form>
      <div className="form-row">
        <SmallInput
          name="firstName"
          type="name"
          placeholder="First name"
          label="First name"
        />
        <SmallInput
          name="lastName"
          type="name"
          placeholder="Last name"
          label="Last name"
        />
      </div>
      <div className="form-row">
        <SmallInput
          name="password"
          type="password"
          placeholder="Password"
          label="Password"
        />
        <SmallInput
          name="passwordConformation"
          type="password"
          placeholder="Conform your password"
          label="Confirm your password"
        />
      </div>
    </form>
  );
}
