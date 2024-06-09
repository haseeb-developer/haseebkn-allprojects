import React from "react";
import { useSpring, animated } from "@react-spring/web";

const Home = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <animated.div style={props}>
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page of my awesome portfolio!</p>
    </animated.div>
  );
};

export default Home;
