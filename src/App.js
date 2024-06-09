import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <Analytics />
      <Projects />
    </div>
  );
};

export default App;
