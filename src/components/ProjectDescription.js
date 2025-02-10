import React, { useState, useEffect } from 'react';
import './ProjectDescription.css';

const ProjectDescription = () => {
  const descriptions = [
    "I create dynamic, user-friendly websites using React.js, turning complex ideas into sleek, responsive designs.",
    "My projects feature interactive UI components and smooth animations that elevate modern frontend development.",
    "I’ve built solutions integrating Shopify with custom React apps for enhanced design and functionality.",
    "Focused on clean code and performance, I bridge creativity and technology seamlessly.",
    "Specializing in React.js, JavaScript, and responsive design, I craft projects that are both functional and visually stunning.",
    "Every project is an opportunity to deliver seamless user experiences with a blend of aesthetics and efficiency.",
    "From portfolios to e-commerce sites, I develop solutions that truly stand out.",
    "Driven by a passion for frontend innovation, I merge artistic design with robust functionality to bring ideas to life.",
    "My work is a fusion of creative vision and technical expertise, empowering brands to connect with their audience.",
    "I thrive on transforming challenging concepts into elegant digital experiences that inspire and engage users.",
    "My projects are a testament to my commitment to crafting intuitive interfaces that are as visually striking as they are efficient.",
    "I believe in the power of technology to transform businesses, and my portfolio reflects my journey of innovation and excellence.",
    "Every line of code is a step towards creating digital experiences that are not only beautiful but also user-centric and impactful.",
    "Passionate about both form and function, I continuously push the boundaries of frontend development to deliver immersive, next-level web experiences."
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
        setAnimating(true);
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, [descriptions.length]);

  return (
    <div className="description-container">
      <p className={`description-text ${animating ? 'enter' : 'exit'}`}>
        {descriptions[currentIndex]}
      </p>
    </div>
  );
};

export default ProjectDescription;
