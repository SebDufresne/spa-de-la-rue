import React from "react";
import { storiesOf } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.css";
import SmallInput from "../src/components/form/SmallInput";

storiesOf("Profile", module).add("display input", () => (
  <SmallInput
    type="firstname"
    name="firstname"
    placeholder="Input your first name"
    label="First name"
    value="Bob"
  />
));
