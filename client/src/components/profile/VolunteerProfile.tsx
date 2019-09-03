import React from "react";
import SmallInput from "../form/SmallInput";
import LongInput from "../form/LongInput";
import TextareaInput from "../form/TextareaInput";

interface profileInfo {
  first_name: string;
  last_name: string;
  gender: string;
  description?: string;
  phone?: string;
  email: string;
}

export default function VolunteerProfile(props: profileInfo) {
  return (
    <React.Fragment>
      <div className="container">
        <SmallInput
          type="firstname"
          name="firstname"
          placeholder="Input your first name"
          label="First name"
          value={props.first_name}
        />
        <SmallInput
          type="lastname"
          name="lastname"
          placeholder="Input your last name"
          label="last name"
          value={props.last_name}
        />
        <LongInput
          type="email"
          name="email"
          placeholder="Input your email"
          label="Email"
          value={props.email}
        />
        <SmallInput
          type="phone number"
          name="phone number"
          placeholder="Input your phone number"
          label="Phone number"
          value={props.phone}
        />
        <TextareaInput label="description" rows={3} value={props.description} />

        {/* <LongInput /> */}
      </div>
    </React.Fragment>
  );
}
