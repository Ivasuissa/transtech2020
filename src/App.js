import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Website from "./Website";
import Programme from "./pages/Programme";
import Intervenants from "./components/Intervenants";
import Navigation from "./components/Navigation";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Website} />
        <Route path="/About" component={About} />
        <Route path="/Programme" component={Programme} />
        <Route path="/Intervenants" component={Intervenants} />
        <Route path="/Contact" component={Contact} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  
  );
}

export default App;
