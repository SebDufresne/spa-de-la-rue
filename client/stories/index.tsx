import React from "react";
import { storiesOf } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.css";
import { MemoryRouter } from "react-router";
import Logo from "../src/components/navbar/Logo";
import Category from "../src/components/navbar/Category";

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
  .add("category without hovering", () => <Category {...categoryInfoEle} />)
  .add("category with hover", ()=><Category {...categoryInfoEle} />)
