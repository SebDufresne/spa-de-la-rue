import React from "react";
import { storiesOf } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.css";
import SmallInput from "../src/components/form/SmallInput";
import TextareaInput from "../src/components/form/TextareaInput";
import ChooseRadio from "../src/components/form/ChooseRadio";
import ChooseBox from "../src/components/form/ChooseBox";
import VolunteerProfile from "../src/components/profile/VolunteerProfile";
import { action } from "@storybook/addon-actions";

storiesOf("Profile", module)
  .add("display input", () => (
    <SmallInput
      type="firstname"
      name="firstname"
      placeholder="Input your first name"
      label="First name"
      value="Bob"
    />
  ))
  .add("Text area value", () => (
    <TextareaInput label="description" rows={2} value="I'm potato" />
  ))
  .add("choose radio", () => (
    <ChooseRadio
      legend="Gender"
      options={["Male", "Female", "Rather not say"]}
      value="Male"
      getValue={action("choosed box")}
    />
  ))
  .add("choose box", () => (
    <ChooseBox
      label="prefered contact"
      default="Choose..."
      options={["By phone", "By email"]}
      value="By email"
      getValue={action("choosed box")}
    />
  ));
