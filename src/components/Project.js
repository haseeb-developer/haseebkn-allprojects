import React from "react";
import { useSpring, animated } from "@react-spring/web";

const Project = ({ id, title, description, image }) => {
  const props = useSpring({ marginTop: 0, from: { marginTop: -500 } });

  return (
    <animated.div style={props} className="project">
      <h1>{id}</h1>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
    </animated.div>
  );
};

export default Project;
