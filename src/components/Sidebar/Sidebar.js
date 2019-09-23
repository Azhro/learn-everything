import React from "react";
import { NavLink } from "react-router-dom";
// import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";

// Core components
import styles from "/assets/components/SidebarStyle.js";

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();
  const { routes } = props;
  return (
    <div>
      {routes.map((prop, key) => {
        return (
          <NavLink to={prop.layout + prop.path} key={key}>
            <ListItem button>ALLO</ListItem>
          </NavLink>
        );
      })}
    </div>
  );
}
