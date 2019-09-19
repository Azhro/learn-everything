import React from "react";
import "./App.css";

import Title from "./components/Title";
import Navbar from "./components/Navbar";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Title} />
      </Switch>
    </>
  );
}

export default App;
