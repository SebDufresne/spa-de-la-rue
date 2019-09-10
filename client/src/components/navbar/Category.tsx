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
    <div className="dropdown ">
      <a
        className={
          key.includes("Hello") ? "btn btn-success" : "btn btn-muted"
        }
        data-toggle="dropdown"
        href="#"
      >
        {key}
      </a>
      <div className="dropdown-menu">
        <ul>
          {props[key].map((dropdownMenu, index) => {
            return (
              <li key={index} className="dropdown-item btn">
                <Link to={dropdownMenu.path}>{dropdownMenu.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
