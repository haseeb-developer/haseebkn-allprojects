import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Projects from "./components/Projects";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1 className="myproject-title">My Projects</h1>
      <Analytics />
      <Projects />
    </div>
  );
};

export default App;
