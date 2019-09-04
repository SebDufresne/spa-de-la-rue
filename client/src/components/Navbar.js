import React from "react";
import "components/Navbar.scss";
import Logo from "./navbar/Logo";
import Category from "./navbar/Category";

const mockCategoryData = [
  {
    About: [{ title: "Testing", path: "/" }, { title: "Testing2", path: "/" }]
  },
  {
    News: [
      { title: "Schedule", path: "/" },
      { title: "Blogs", path: "/" },
      { title: "Events", path: "/" }
    ]
  },
  {
    Press: [
      { title: "Picture", path: "/" },
      { title: "videos", path: "/" },
      { title: "Meet Us", path: "/" }
    ]
  },
  {
    Support: [{ title: "Donate", path: "/" }]
  }
];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light bg-light justify-content-between nav">
      <Logo />
      <div className="d-flex">
        <ul className="collapse navbar-collapse" id="collapsibleNavbar">
          {mockCategoryData.slice(0,-1).map((categoryData, index) => {
            // return console.log(...catagoryData);
            return <Category key={index} {...categoryData} />;
          })}
        </ul>
       <Category {...mockCategoryData[mockCategoryData.length-1]} />

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
