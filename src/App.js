import React from "react";
import {Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Random from "./Components/Random/Random.js";
import Categories from "./Components/Categories/Categories.js";
import NonAlcoholic from "./Components/NonAlcoholic/NonAlcoholic.js"
import Detail from "./Components/Detail/Detail.js"

function App() {
  return (
    <>
      <Router>
      <Link to="/">Categories</Link><br/>
      <Link to="/random">Random</Link><br/>
      <Link to="/nonalcohol">Non-Alcoholic</Link><br/>
      <br/><br/>
        <Switch>
          <Route exact path="/" component={Categories} />
          <Route exact path="/random" component={Random} />
          <Route exact path="/nonalcohol" component={NonAlcoholic} />
          <Route exact path="/drink/:id" component={Detail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
