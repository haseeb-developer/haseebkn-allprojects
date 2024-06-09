import React from "react";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="text-center pt-4 projects-header">My Projects</h1>
      <Projects />
    </div>
  );
};

export default App;
