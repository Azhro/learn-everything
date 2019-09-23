import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
// import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, Icon } from "@material-ui/core";

// Core components
import styles from "assets/components/SidebarStyle.js";

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const { routes } = props;
  const classes = useStyles();
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }

  let links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        var whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });
        return (
          <NavLink
            to={prop.layout + prop.path}
            className={classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses)}
                ></Icon>
              ) : (
                <prop.icon className={(classes.itemIcon, whiteFontClasses)} />
              )}
              <ListItemText
                primary={prop.name}
                className={classNames(classes.itemText, whiteFontClasses)}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );

  return <div>{links}</div>;
}
