import React from "react";
import AboutMe from "./AboutMe";

function Header({ setPage }) {
    
    const handleHomeClick = () => {
        setPage("home");
        console.log('About Me clicked');
    };
    
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
    <nav className="navbar navbar-expand-md bg-primary bg-opacity-75 ps-3 pe-3 pe-md-0">
        
        <a onClick={handleHomeClick} 
            className="navbar-brand text-light fw-bold">
            
            JoshuaHouse.dev

        </a>


        <button className="navbar-toggler px-3" 
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>

        </button>

        <div id="navbarMenu"
            className="collapse navbar-collapse justify-content-end align-center">
            
            <ul className="navbar-nav">
                
                <li className="nav-item">
                    <a className="nav-link px-2 border-start border-light text-light" 
                        onClick={handleHistoryClick}>
                        My Education and Work History
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link px-2 border-start border-light text-light" 
                        onClick={handleMyProjectsClick}>
                        My Projects
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link px-2 border-start border-light text-light" 
                        onClick={handleAboutMeClick}>
                        About Me
                    </a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link px-2 border-start border-light text-light" 
                        onClick={handleContactMeClick}>
                        Contact Me
                    </a>
                </li>
            
            </ul>
        
        </div>
    
    </nav>
    

  );
}

export default Header;