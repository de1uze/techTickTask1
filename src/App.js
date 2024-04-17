import { Routes, Route } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import LeftNav from "./components/LeftNav";
import RightNav from "./components/RightNav";

import "./App.css";

class App extends Component {
  state = { theme: "light" };

  toggle = () => {
    const { theme } = this.state;
    this.setState({ theme: theme === "light" ? "dark" : "light" });
  };
  render() {
    const { theme } = this.state;
    return (
      <div className={`main-${theme}`}>
        <Header theme={theme} toggle={this.toggle} />
        <div className="mini">
          <LeftNav />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <RightNav />
        </div>
      </div>
    );
  }
}
export default App;
