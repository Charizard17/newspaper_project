import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router";
import Finance from "./components/Finance/Finance";
import Home from "./components/Home/Home";
import Covid19 from "./components/Covid19/Covid19";
import Political from "./components/Political/Political";
import Sport from "./components/Sport/Sport";
import Art from "./components/Art/Art";
import Education from "./components/Education/Education";
import TurningReact from './components/ReactComponent/TurningReact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route path="/turningreact">
          <TurningReact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/political">
          <Political />
        </Route>
        <Route exact path="/sport">
          <Sport />
        </Route>
        <Route exact path="/art">
          <Art />
        </Route>
        <Route exact path="/education">
          <Education />
        </Route>
        <Route exact path="/finance">
          <Finance />
        </Route>
        <Route exact path="/covid19">
          <Covid19 />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
