import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Qrlector from "./lector/QRLector";
import Importcsv from "./import-csv/ImportCSV";
import Assistants from "./read-assistants/Assistants";
import Addpeople from "./add-people/AddPeople";
import Navigation from "./shared/navigation/BottomNavigation";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/new">
            <Addpeople />
          </Route>
          <Route path="/import-csv">
            <Importcsv />
          </Route>
          <Route path="/assistants">
            <Assistants />
          </Route>
          <Route exact path="*">
            <Qrlector />
          </Route>
        </Switch>

        <Navigation />
      </>
    </Router>
  );
}

export default App;
