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
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
        {key}
      </a>
      <div className="dropdown-menu">
        {props[key].map(dropdownMenu => {
          return (
            <li>
              <Link to={dropdownMenu.path}>{dropdownMenu.title}</Link>
            </li>
          );
        })}
      </div>
    </li>
  );
}
