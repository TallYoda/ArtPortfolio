import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortfolioGrid from "./components/PortfolioGrid";
import About from "./components/about";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PortfolioGrid />
      <About />
    </>
  );
}

export default App;
