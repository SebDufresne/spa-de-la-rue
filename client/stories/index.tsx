import React from "react";
import { storiesOf } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.css";
import { MemoryRouter } from "react-router";
import Logo from "../src/components/navbar/Logo";
import Category from "../src/components/navbar/Category";
import SmallForm from "../src/components/form/SmallForm";
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
  .add("volunteer form", () => <SmallForm type="email" name="email" />);
