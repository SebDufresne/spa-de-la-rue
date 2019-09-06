import React from "react";
import { storiesOf } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.css";
import { MemoryRouter } from "react-router";
import Logo from "../src/components/navbar/Logo";
import Category from "../src/components/navbar/Category";
import SmallInput from "../src/components/form/SmallInput";
import LongInput from "../src/components/form/LongInput";
import ChooseBox from "../src/components/form/ChooseBox";
import ChooseRadio from "../src/components/form/ChooseRadio";
import ImgUploader from "../src/components/form/ImgUploader";
import TextareaInput from "../src/components/form/TextareaInput";
import { action } from '@storybook/addon-actions';
import "../src/components/Navbar.scss";

const categoryInfoEle = {
  storybookCategory: [
    { title: "Testing", path: "/" },
    { title: "Testing2", path: "/" }
  ]
};

const logo_url = "/images/assets/logo_fr.png";

storiesOf("Navbar", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Logo component", () => <Logo logo_url = {logo_url} />)
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
      options={["By phone", "By email"]}
      getValue={action("choosed box")}
    />
  ))
  .add("choose radio", () => (
    <ChooseRadio
      legend="Gender"
      options={["Male", "Female", "Rather not say"]}
      getValue={action("choosed radio")}
    />
  ))
  .add("upload image", () => <ImgUploader />)
  .add("Description", () => <TextareaInput label="Description" rows={5} />);
