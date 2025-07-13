import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-md bg-primary bg-opacity-75 ps-3 pe-3 pe-md-0">
            {/* Brand */}
            <a onClick={() => navigate('/')} className="navbar-brand text-light fw-bold" role="button">
                JoshuaHouse.dev
            </a>

            {/* Mobile Toggle */}
            <button className="navbar-toggler px-3" 
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarMenu"
                aria-controls="navbarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu */}
            <div id="navbarMenu" className="collapse navbar-collapse justify-content-end align-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link px-2 border-start border-light text-light"
                           onClick={() => navigate('/history')} role="button">
                            My Education and Work History
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-2 border-start border-light text-light"
                           onClick={() => navigate('/projects')} role="button">
                            My Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-2 border-start border-light text-light"
                           onClick={() => navigate('/about')} role="button">
                            About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-2 border-start border-light text-light"
                           onClick={() => navigate('/contact')} role="button">
                            Contact Me
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
