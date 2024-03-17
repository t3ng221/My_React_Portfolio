import React from "react";
import NavBar from "../components/NavBar";
import Social from "../components/Social";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Social />
      <Home />
      <About />
      <Experience />
      <Contact />
    </>
  );
};

export default HomePage;
