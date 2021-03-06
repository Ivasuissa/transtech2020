import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import HomeFR from "./components/french/HomeFR";
import NotFound from "./pages/NotFound";
import Contact from "./components/Contact";
import AboutFR from "./components/french/AboutFR";
import MainEnglish from "./MainEnglish";
import MainFrench from "./MainFrench";
import ProgrammeFR from "./components/french/ProgrammeFR";
import IntervenantsFR from "./components/french/IntervenantsFR";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";
import NavigationFR from "../src/components/french/NavigationFR";
import NavigationENG from "./components/english/NavigationENG";

export default class App extends Component {
  state = {
    isFrench: true
  };

  handleChange = () => {
    this.setState({
      isFrench: !this.state.isFrench
    });
  };
  render() {
    return (
      <div className="all">
        {this.state.isFrench ? (
          <div className="appli">
            <NavigationFR handleChange={this.handleChange} />
            <MainFrench />
          </div>
        ) : (
          <div className="appli">
            <NavigationENG handleChange={this.handleChange} />
            <MainEnglish />
          </div>
        )}
      </div>
    );
  }
}
