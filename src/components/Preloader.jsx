import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader-overlay">
      <div className="preloader-container">
        <div className="rotating-ring"></div>
        <div className="glitch-text" data-text="PROJECTS ARE LOADING">
          PROJECTS ARE LOADING
        </div>
      </div>
    </div>
  );
};

export default Preloader;
