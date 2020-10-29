import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import NotFound from "./pages/NotFound";
import Contact from "./components/Contact";
import About from "./components/About";
import Website from "./Website";
import Programme from "./components/Programme";
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
      </Switch>
    </BrowserRouter>
    //   <div className="main">
    //   <Navigation />
    //   <Home />
    //   <About />
    //   <Programme/>
    //   <Intervenants />
    //   <Marquee />
    //   <Contact />
    //   <Footer />
    // </div>
  );
}

export default App;
