import React from "react";
import { Link } from "react-router-dom";

interface dropdownInfo {
  title: string;
  path: string;
}

interface propsInfo {
  [key: string]: dropdownInfo[];
}

export default function Category(props: propsInfo) {
  const key = Object.keys(props)[0];

  return (
    <li className="dropdown">
      <a className="dropdown-toggle" data-toggle="dropdown" href="#">
        {key}
      </a>
      <ul className="dropdown-menu">
        {props[key].map((dropdownMenu, index) => {
          return (
            <li key={index}>
              <Link to={dropdownMenu.path}>{dropdownMenu.title}</Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
