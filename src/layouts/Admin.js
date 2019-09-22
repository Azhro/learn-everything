import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

// Core components
import Sidebar from "../components/Sidebar/Sidebar";

import routes from "../Routes";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
  </Switch>
);

export default function Admin() {
  return (
    <div>
      <Sidebar routes={routes} color="blue" />
    </div>
  );
}
