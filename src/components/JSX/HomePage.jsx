import React from 'react';
import '../CSS/HomePage.css';

function HomePage({ setPage }) {
  
  // Functions To Handle Page Switches
  const handleAboutMeClick = () => {
    setPage("aboutMe");
    console.log('About Me clicked');
  };

  const handleMyProjectsClick = () => {
    setPage("myProjects");
    console.log('My Projects clicked');
  };

  const handleHistoryClick = () => {
    setPage("history");
    console.log('History clicked');
  };

  const handleContactMeClick = () => {
    setPage("contactMe");
    console.log('Contact Me clicked');
  };
  
  
  return (        

    <div className="w-100 vh-100 bg-primary-subtle pt-1 pb-1">
      
      {/* Background color container && Sizing Container */}
      <div className="container py-4 px-4 my-2 rounded bg-light">
        
        {/* Title */}
        <h1 className="m-0 text-primary">
          JoshuaHouse.dev
        </h1>
        <hr className="my-4 border border-primary border-2"/>

        {/* Intro Text */}
        <p className="m-0 text-primary">
          <em>
            Hello! My name is Joshua House. This is a website to display my 
            educational, work related, and project achievements.
          </em>
        </p>
        <hr className="my-4 border border-primary border-2"/>

        {/* Button Selection Section Container (for dynamic sizing) */}
        <div className="row w-100">
          
          {/* Button Selection Container*/}
          <div className="col-12 col-lg-9 mx-auto bg-white rounded shadow-sm d-flex flex-column justify-content-center align-items-center p-3 gap-3">
            
            {/* Top Row */}
            <div className="row flex-fill container-fluid justify-content-around">
              
              <div
                id="about-me"
                className="home-page-select col-12 col-lg-4 p-3 d-flex flex-column justify-content-end align-items-end rounded border border-primary border-2"
                onClick={handleAboutMeClick}
              >
                
                <div className="rounded p-2 bg-primary bg-opacity-75 text-light fs-5">
                  <em>About Me {'>>'}</em>
                </div>
              
              </div>

              <div
                id="my-projects"
                className="home-page-select col-12 col-lg-7 p-3 d-flex flex-column justify-content-end align-items-end rounded border border-primary border-2"
                onClick={handleMyProjectsClick}
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
                className="home-page-select col-12 col-lg-7 p-3 d-flex flex-column justify-content-end align-items-end rounded border border-primary border-2"
                onClick={handleHistoryClick}
              >
                
                <div className="rounded p-2 bg-primary bg-opacity-75 text-light fs-5">
                  My Education and Work History {'>>'}
                </div>
              
              </div>

              <div
                id="contact-me"
                className="home-page-select col-12 col-lg-4 p-3 d-flex flex-column justify-content-end align-items-end rounded border border-primary border-2"
                onClick={handleContactMeClick}
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