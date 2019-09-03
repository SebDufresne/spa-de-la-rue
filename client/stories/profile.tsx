import React from "react";
import { storiesOf } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.css";
import SmallInput from "../src/components/form/SmallInput";
import TextareaInput from "../src/components/form/TextareaInput";

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
  ));
