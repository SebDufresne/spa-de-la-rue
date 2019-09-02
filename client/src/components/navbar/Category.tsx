import React from "react";

interface categoryInfo {
  title: String;
  path: String;
}

interface propsInfo {
  info: categoryInfo[];
}

export default function Category(props: propsInfo) {
  return (
    <li className="dropdown">
      <a className="dropdown-toggle" data-toggle="dropdown" href="#">
        {props.info[0].title}
      </a>
      <ul className="dropdown-menu">
        <li>
          <a href="#">Blogs</a>
        </li>
        <li>
          <a href="#">schedule</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
      </ul>
    </li>
  );
}
