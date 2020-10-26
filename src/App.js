import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Website from "./Website";
import Inscription from "./pages/Inscription";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Home" component={Website} />
        <Route path="/About" component={About} />
        <Route path="/Inscription" component={Inscription} />
        <Route path="/Contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
