import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../CSS/HomePage.css';
import headshot from '../../assets/images/JoshuaHouseHeadshot.jpeg';
import mailIcon from '../../assets/images/Mail-Icon.png';
import rpgBlock from '../../assets/images/text-based-RPG-block.png';
import gradPhoto from '../../assets/images/KarenGraduation.png';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div id="home-page-container" className="w-100 bg-primary-subtle pt-1 pb-1">
      <div className="container py-4 px-4 my-2 rounded bg-light">
        <h1 className="m-0 text-primary">JoshuaHouse.dev</h1>
        <hr className="my-4 border border-primary border-2" />

        <p className="text-primary">
          <em>
            Hello! My name is Joshua House. This is a website to display my
            educational, work related, and project achievements. 
          </em>
        </p>

        <p className="text-primary">
          <em>
            This site was developed using <strong>React + Vite, Bootstrap, and 
            jQuery. GitHub pages</strong> was used to host the website online and
            <strong> emailjs</strong> was used for the contact me form functionality.
          </em>
        </p>
        
        <div className="d-grid gap-2 mb-4">
          <a href="https://github.com/JoshHouse/JoshuaHouseDev"
              target="_blank"     
              rel="noopener noreferrer" 
              className="btn btn-primary"
          >
            JoshuaHouse.dev GitHub Page
          </a>
        </div>

        <div className="d-grid gap-2 mb-4">
          <a href="https://www.linkedin.com/in/joshua-house-a8bb36284"
              target="_blank"     
              rel="noopener noreferrer" 
              className="btn btn-primary"
          >
            My LinkedIn
          </a>
        </div>
        
        <hr className="my-4 border border-primary border-2" />

        <div className="row w-100">
          <div className="col-12 col-lg-9 mx-auto bg-white rounded shadow-sm d-flex flex-column justify-content-center align-items-center p-3 gap-3">

            {/* Top Row */}
            <div className="row flex-fill container-fluid justify-content-around">
              <div
                id="about-me"
                style={{ backgroundImage: `url(${headshot})` }}
                className="home-page-select col-12 col-lg-4 p-3 d-flex flex-column justify-content-end align-items-end rounded border border-primary border-2"
                onClick={() => navigate('/about')}
              >
                <div className="rounded p-2 bg-primary bg-opacity-75 text-light fs-5">
                  <em>About Me {'>>'}</em>
                </div>
              </div>

              <div
                id="my-projects"
                style={{ backgroundImage: `url(${rpgBlock})` }}
                className="home-page-select col-12 col-lg-7 p-3 d-flex flex-column justify-content-end align-items-end rounded border border-primary border-2"
                onClick={() => navigate('/projects')}
              >
                <div className="rounded p-2 bg-primary bg-opacity-75 text-light fs-5">
                  My Projects {'>>'}
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="row flex-fill container-fluid justify-content-around">
              <div
                id="history"
                style={{ backgroundImage: `url(${gradPhoto})` }}
                className="home-page-select col-12 col-lg-7 p-3 d-flex flex-column justify-content-end align-items-end rounded border border-primary border-2"
                onClick={() => navigate('/history')}
              >
                <div className="rounded p-2 bg-primary bg-opacity-75 text-light fs-5">
                  My Education and Work History {'>>'}
                </div>
              </div>

              <div
                id="contact-me"
                style={{ backgroundImage: `url(${mailIcon})` }}
                className="home-page-select col-12 col-lg-4 p-3 d-flex flex-column justify-content-end align-items-end rounded border border-primary border-2"
                onClick={() => navigate('/contact')}
              >
                <div className="rounded p-2 bg-primary bg-opacity-75 text-light fs-5">
                  Contact Me {'>>'}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
