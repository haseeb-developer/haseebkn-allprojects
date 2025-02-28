import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ProjectDescription from "./ProjectDescription";
import "./Projects.css";

const projectList = [
  {
    id: 1,
    title: "Family Outdoor",
    description: "A project centered around fun and engaging outdoor activities for families.",
    url: "https://family-outdoor.vercel.app/",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: "Easily track expenses and manage your budget with this simple, efficient tool.",
    url: "https://expensee-trackerr.vercel.app/",
  },
  {
    id: 3,
    title: "Password Generator",
    description: "Easily generate strong, secure, and unique passwords to protect your accounts.",
    url: "https://passwordd-generator.vercel.app/",
  },
  {
    id: 4,
    title: "Simple to Advanced Words",
    description: "Effortlessly explore a wide range of vocabulary, from basic words to complex expressions.",
    url: "https://simple-to-advanced-words.vercel.app/",
  },
  {
    id: 5,
    title: "Draw Phone Pattern",
    description: "Design and customize unique unlock patterns to enhance both security and personalization.",
    url: "https://draw-phone-pattern.vercel.app/",
  },
  {
    id: 6,
    title: "Check Live Weather",
    description:
      "Access Accurate and Timely Weather Forecasts to Plan Your Day Effectively.",
    url: "https://check-live-weather.vercel.app/",
  },
  {
    id: 7,
    title: "Text Converter",
    description: "Seamlessly Transform Text for Accessibility",
    url: "https://text-converterr.vercel.app/",
  },
  {
    id: 8,
    title: "Image To Text",
    description: "Easiest way to convert an image to a text.",
    url: "https://imgtotextconverter.vercel.app/",
  },
  {
    id: 9,
    title: "Age Finder",
    description: "Find how old you are, Just by entering your day, months and year.",
    url: "https://age-finder-v1.netlify.app/",
  },
  {
    id: 10,
    title: "QR Code Generator",
    description: "Easy way to generate your QR code and customize it.",
    url: "https://advanced-qr-code-generator.netlify.app/",
  },
  {
    id: 11,
    title: "Save Your Data",
    description: "Worry where to store data? SaveXData the best project to save your data.",
    url: "https://save-my-data.netlify.app/",
  },
  {
    id: 12,
    title: "Link Shortner",
    description: "Tired of long links? Try Link Shortener—the easiest way to shorten your URLs.",
    url: "https://link-shortner-v1.netlify.app/",
  },
  {
    id: 13,
    title: "Images Gallery",
    description: "If you want to save your images without deleting it, then this site is good for you.",
    url: "https://your-gallery01.netlify.app/",
  },
  {
    id: 14,
    title: "Directory Explorer",
    description: "Visualize and explore your file system with an interactive tree view and advanced features.",
    url: "https://directory-explorer.netlify.app/",
  },
  {
    id: 15,
    title: "Life Age Calculator",
    description: "Calculate your exact age in years, months, days, with a detailed breakdown.",
    url: "https://life-age-calculator1.netlify.app/",
  },
  // ! Newww ============================= 
  {
    id: 16,
    title: "Time Calculator",
    description: "Easily calculate time differences and durations with precision.",
    url: "https://calcuate-time.vercel.app/"
  },
  {
    id: 17,
    title: "Advanced Timer",
    description: "Set and manage multiple timers with advanced customization options.",
    url: "https://advanced-timerr.netlify.app/"
  },
  {
    id: 18,
    title: "Smart Calculator",
    description: "A simple yet powerful calculator for quick and accurate calculations.",
    url: "https://mycalculator-v1.netlify.app/"
  },
  {
    id: 19,
    title: "Live Code Editor",
    description: "Write and test your code in real-time with instant preview.",
    url: "https://livewritecode.netlify.app/"
  },
  {
    id: 20,
    title: "Ad-Free YouTube",
    description: "Watch YouTube videos without annoying ads or distractions.",
    url: "https://noads-youtube.netlify.app/"
  },
  {
    id: 21,
    title: "Secure Diary",
    description: "Keep your personal notes and thoughts safe with encryption.",
    url: "https://secure-diary.netlify.app/"
  },
  {
    id: 22,
    title: "Screen Resolution",
    description: "Find out my current screen resolution",
    url: "https://check-screen-resolution.vercel.app/"
  },
  {
    id: 23,
    title: "Check your Resolution",
    description: "Checkout your device screen resolution Live.",
    url: "https://check-screen-resolution.netlify.app/"
  }
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 6;

  const offset = currentPage * projectsPerPage;
  const currentProjects = projectList.slice(offset, offset + projectsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container">
      <ProjectDescription />
      <div className="row">
        {currentProjects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <div className="card-header">
                  <h1 className="card-id">{project.id}</h1>
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
                <a
                  href={project.url}
                  className="visit-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row justify-content-center mt-8 project-pagination">
        <ReactPaginate
          previousLabel={<span className="material-icons">arrow_back</span>}
          nextLabel={<span className="material-icons">arrow_forward</span>}
          pageCount={Math.ceil(projectList.length / projectsPerPage)}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          breakLabel={"..."}
          marginPagesDisplayed={1}
          pageRangeDisplayed={0}
          forcePage={currentPage}
        />

      </div>

    </div>
  );
};

export default Projects;
