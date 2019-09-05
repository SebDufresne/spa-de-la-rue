import React from "react";
import SmallInput from "../form/SmallInput";
import LongInput from "../form/LongInput";
import TextareaInput from "../form/TextareaInput";

interface profileInfo {
  first_name: string;
  last_name: string;
  gender: string;
  description?: string;
  contact_phone?: string;
  contact_email: string;
}

export default function VolunteerProfile(props: profileInfo) {
  return (
    <React.Fragment>
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
        value={props.contact_email}
      />
      <SmallInput
        type="phone number"
        name="phone number"
        placeholder="Input your phone number"
        label="Phone number"
        value={props.contact_phone}
      />
      <TextareaInput label="description" rows={3} value={props.description} />

      {/* <LongInput /> */}
    </React.Fragment>
  );
}
