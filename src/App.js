import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router";
import Science from "./components/Science/Science";
import Technology from "./components/Technology/Technology";
import Home from "./components/Home/Home";
import Covid19 from "./components/Covid19/Covid19";
import Business from "./components/Business/Business";
import Sports from "./components/Sports/Sports";
import Health from "./components/Health/Health";
import Entertainment from "./components/Entertainment/Entertainment";
import TurningReact from "./components/ReactComponent/TurningReact";

const App = () => {
  return (
    <div className="bg-secondary">
      <Navbar />
      <div className="pt-2">
        <Switch>
          <Route path="/turningreact">
            <TurningReact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/business">
            <Business />
          </Route>
          <Route exact path="/sports">
            <Sports />
          </Route>
          <Route exact path="/health">
            <Health />
          </Route>
          <Route exact path="/entertainment">
            <Entertainment />
          </Route>
          <Route exact path="/science">
            <Science />
          </Route>
          <Route exact path="/technology">
            <Technology />
          </Route>
          <Route exact path="/covid19">
            <Covid19 />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
