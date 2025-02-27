import React from "react"
import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import Scroll from "./components/Scroll";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Scroll />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;
