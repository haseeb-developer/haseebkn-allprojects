import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./Projects.css";

const projectList = [
  {
    id: 1,
    title: "Family Outdoor",
    description: "A project about family outdoor activities.",
    url: "https://family-outdoor.vercel.app/",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: "Simplify budget management with ease.",
    url: "https://expensee-trackerr.vercel.app/",
  },
  {
    id: 3,
    title: "Password Generator",
    description: "Effortlessly create secure and unique passwords",
    url: "https://passwordd-generator.vercel.app/",
  },
  {
    id: 4,
    title: "Simple to Advanced Words",
    description:
      "Explore a Comprehensive Spectrum of Vocabulary Ranges Effortlessly",
    url: "https://simple-to-advanced-words.vercel.app/",
  },
  {
    id: 5,
    title: "Draw Phone Pattern",
    description:
      "Create Unique Unlock Patterns to Enhance Security and Personalization",
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
      <div className="row">
        {currentProjects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h1 className="card-id">{project.id}</h1>
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
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
      <div className="row justify-content-center mt-4">
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={Math.ceil(projectList.length / projectsPerPage)}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
        />
      </div>
    </div>
  );
};

export default Projects;
