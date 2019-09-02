import React from "react";
import { storiesOf } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.css";
import { MemoryRouter } from "react-router";
import Logo from "../src/components/navbar/Logo";
import Category from "../src/components/navbar/Category";
import SmallInput from "../src/components/form/SmallInput";
import LongInput from "../src/components/form/LongInput";
import ChooseBox from "../src/components/form/ChooseBox";
import "../src/components/Navbar.scss";

const categoryInfoEle = {
  storybookCategory: [
    { title: "Testing", path: "/" },
    { title: "Testing2", path: "/" }
  ]
};

storiesOf("Navbar", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Logo component", () => <Logo />)
  .add("category(can hover on)", () => <Category {...categoryInfoEle} />);

storiesOf("Form", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("shorter input", () => (
    <SmallInput type="email" name="email" placeholder="Email" label="Email" />
  ))
  .add("longer input", () => (
    <LongInput
      type="address"
      name="address"
      placeholder="Address"
      label="Your address"
    />
  ))
  .add("choose box", () => (
    <ChooseBox
      label="prefered contact"
      default="Choose..."
      options={["By phone", "By eamil"]}
    />
  ));
