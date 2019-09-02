import React from "react";

export default function Category() {
  return (
    <li className="dropdown">
      <a className="dropdown-toggle" data-toggle="dropdown" href="#">
        News
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
