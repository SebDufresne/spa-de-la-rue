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
        <LongInput
          name="contact_email"
          type="email"
          placeholder="Email"
          label="Email"
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
      <div className="form-row">
        <SmallInput
          name="contact_phone"
          type="phone"
          placeholder="Phone number"
          label="Phone number"
        />
        <div className="form-group col-md-4">
          <label>Gender</label>
          <select id="inputState" className="form-control">
            <option selected>Choose...</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
      </div>
    </form>
  );
}
