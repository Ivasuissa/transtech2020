import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/french/Home";
import NotFound from "./pages/NotFound";
import Contact from "./components/Contact";
import About from "./components/french/About";
import MainEnglish from "./MainEnglish";
import MainFrench from "./MainFrench";
import Programme from "./components/french/Programme";
import Intervenants from "./components/french/Intervenants";
import Navigation from "./components/french/Navigation";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Navigation/>
    <MainFrench/>
    </div>
    // <BrowserRouter>
    //     <Navigation />
    //   <Switch>
    
    //     <Route path="/About" component={About} />
    //     <Route path="/Programme" component={Programme} />
    //     <Route path="/Intervenants" component={Intervenants} />
    //     <Route path="/Contact" component={Contact} />
    //     <Route path="/" component={MainFrench}></Route>
    //     <Footer />
    //   </Switch>
    // </BrowserRouter>
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
