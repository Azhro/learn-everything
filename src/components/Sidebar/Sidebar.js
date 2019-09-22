import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

export default function Sidebar(props) {
  const { routes, color } = props;
  return (
    <div>
      {routes.map((prop, key) => {
        return (
          <NavLink to={prop.layout + prop.path} key={key}>
            <li></li>
          </NavLink>
        );
      })}
    </div>
  );
}
