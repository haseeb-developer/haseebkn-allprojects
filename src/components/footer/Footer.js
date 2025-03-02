import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <p>Developed By <span class="highlight">Muhammad Haseeb</span></p>

        <div class="footer-links">
          <a
            href="https://mhaseebdev.netlify.app"
            class="footer-link"
            target="_blank"
          >
            <span class="material-icons">language</span> Portfolio
          </a>
          <a
            href="https://github.com/mhaseebdev"
            class="footer-link"
            target="_blank"
          >
            <span class="material-icons">code</span> GitHub
          </a>
          <a
            href="https://linkedin.com/in/mhaseebdev"
            class="footer-link"
            target="_blank"
          >
            <span class="material-icons">work</span> LinkedIn
          </a>
        </div>

        <div class="footer-bottom">
          <p>© <span>2025</span> All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
