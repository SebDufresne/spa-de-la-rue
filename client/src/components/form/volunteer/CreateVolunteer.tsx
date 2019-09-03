import React from "react";
import SmallInput from "../SmallInput";
import LongInput from "../LongInput";
import ChooseBox from "../ChooseBox";
import ChooseRadio from "../ChooseRadio";

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
        <ChooseBox
          label="Gender"
          default="Choose..."
          options={["Male", "Female", "Rather not say"]}
        />
      </div>

      <ChooseRadio
        legend="Gender"
        options={["Male", "Female", "Rather not say"]}
      />
    </form>
  );
}
