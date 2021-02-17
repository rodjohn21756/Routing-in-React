import React from "react";
import "./App.css";
import Welcome from "./componets/Welcome/Welcome";
import Clock from "./componets/Welcome/Componets/Clock/Clock";
import Contact from "./componets/Welcome/Contact/Contact";
import Navigation from "./componets/Welcome/Componets/Navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import NoMatch from "./componets/Welcome/Componets/404/NoMatch";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Roderick" />}
        />
        <Route
          exact
          path="/welcome/:name"
          render={(props) => <Welcome {...props} name="Roderick" />}
        />
        <Route exact path="/clock" component={Clock} />
        <Route exact path="/contact" component={Contact} />

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
