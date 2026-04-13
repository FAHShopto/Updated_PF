import React, { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return React.createElement(
    React.Fragment,
    null,

    React.createElement(Navbar),
    React.createElement(Hero),
    React.createElement(About),
    React.createElement(Projects),
    React.createElement(Contact),
    React.createElement(Footer)
  );
}

export default App;