import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Projects from "./components/Projects";
import "./App.css";
// import Preloader from "./components/Preloader";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* <Preloader /> */}
      <h1 className="myproject-title"  data-text="My Projects">My Projects</h1>
      <Analytics />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
