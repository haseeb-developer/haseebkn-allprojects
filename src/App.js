import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Projects from "./components/Projects";
import "./App.css";
import Preloader from "./components/Preloader";

const App = () => {
  return (
    <div>
      <Preloader />
      <h1 className="myproject-title">My Projects</h1>
      <Analytics />
      <Projects />
    </div>
  );
};

export default App;
