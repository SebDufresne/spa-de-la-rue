import React from "react";
import SmallInput from "../form/SmallInput";
import LongInput from "../form/LongInput";

export default function VolunteerProfile() {
  return (
    <React.Fragment>
      <div className="container">
        <SmallInput
          type="firstname"
          name="firstname"
          placeholder="Input your first name"
          label="First name"
        />
        {/* <LongInput /> */}
      </div>
    </React.Fragment>
  );
}
