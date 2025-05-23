import React from 'react';
import '../CSS/HomePage.css';

function HomePage({ setPage }) {
  
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
    
    <div className="w-100 vh-100 bg-light d-flex flex-column justify-content-around align-items-center">
      
      <h1 className="m-0">JoshuaHouse.dev</h1>
      <p className="m-0"><em>Hello! My name is Joshua House. This is a website to display my education, work, and project history.</em></p>

      <div className="w-75 h-75 bg-white rounded shadow-sm d-flex flex-column justify-content-center align-items-center p-3 gap-3"> 
        
        <div className="row flex-fill container-fluid justify-content-around">
          
          <div 
            id="about-me" 
            className="home-page-select col-4 p-3 d-flex flex-column justify-content-end align-items-end rounded border border-dark"
            onClick={handleAboutMeClick}>
            
            <div className="rounded p-2 bg-primary bg-opacity-75 text-light fs-5">
              <em>About Me {'>>'}</em>
            </div>

          </div>
          
          <div 
            id="my-projects" 
            className="home-page-select col-7 p-3 d-flex flex-column justify-content-end align-items-end rounded border border-dark"
            onClick={handleMyProjectsClick}>

            <div className="rounded p-2 bg-primary bg-opacity-75 text-light fs-5">
              My Projects {'>>'}
            </div>

          </div>
        
        </div>
        

        <div className="row flex-fill container-fluid justify-content-around">
          
          <div 
            id="history" 
            className="home-page-select col-7 p-3 d-flex flex-column justify-content-end align-items-end rounded border border-dark"
            onClick={handleHistoryClick}>

            <div className="rounded p-2 bg-primary bg-opacity-75 text-light fs-5">
              My Education and Work History {'>>'}
            </div>

          </div>
          
          <div 
            id="contact-me" 
            className="home-page-select col-4 p-3 d-flex flex-column justify-content-end align-items-end rounded border border-dark"
            onClick={handleContactMeClick}>
            
            <div className="rounded p-2 bg-primary bg-opacity-75 text-light fs-5">
              Contact Me {'>>'}
            </div>
          
          </div>

        </div>
        
      </div>
    

    </div>
  );
}

export default HomePage;