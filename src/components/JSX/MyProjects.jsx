import React from 'react';
import Header from './Header';
import '../CSS/MyProjects.css';

function MyProjects( {setPage} ) {

    const handleDummy2048Click = () => {
        setPage("dummy2048");
        console.log('Dummy2048 project clicked');
    };

    const handleFoodStopClick = () => {
        setPage("foodStop");
        console.log('FoodStop project clicked');
    };

    const handleRasterBasedClick = () => {
        setPage("rasterBased");
        console.log('Raster Based Renderer project clicked');
    };

    const handleRayTracerClick = () => {
        setPage("rayTracer");
        console.log('Ray Traced Renderer project clicked');
    };

    const handleTextBasedClick = () => {
        setPage("textBased");
        console.log('Text-Based RPG project clicked');
    };

    const handleVelocityTrialsClick = () => {
        setPage("velocityTrials");
        console.log('Velocity Trials project clicked');
    };

    const handleWGJClick = () => {
        setPage("WGJDashboard");
        console.log('Weather Group Joseph - Weather Dashboard project clicked');
    };

    return (
        <div className="w-100 bg-primary-subtle">
            
            <Header setPage={setPage}/>
            
            <div className="container py-4 px-4 my-2 rounded bg-light">
                
                {/* Title */}
                <h1 className="text-primary text-start fw-bold">
                    My Projects
                </h1>
                <hr className="my-4 border border-primary border-2"/>

                {/* Velocity Trials */}
                <div
                    className="project-page-select d-flex bg-primary-subtle rounded border border-primary border-2 overflow-hidden"
                    onClick={handleVelocityTrialsClick}
                >
                    
                    <div className="w-66 h-100 d-flex justify-content-center align-items-center">
                        
                        <img
                            src="src/assets/images/velocity-trials-banner.png"
                            className="mw-100 mh-100 object-fit-contain"
                            alt="Velocity Trials Banner"
                        />

                    </div>

                    <div className="w-34 h-100 bg-primary bg-opacity-75 text-light d-flex justify-content-center align-items-center">
                        
                        <div className="text-center fs-4">
                            Velocity Trials {'>>'}
                        </div>

                    </div>

                </div>

                <div className="row my-2">
                    <div className="col-12">
                        <h2 className="text-primary text-start">Skills Developed</h2>
                        <hr className="my-4 border border-primary border-2"/>
                    </div>

                    <div className="col-11 offset-1">
                        <h4 className="text-dark">- Unity 3D Game Development </h4>
                        <h4 className="text-dark">- C# Development </h4>
                        <h4 className="text-dark">- Git Version Control with Unity </h4>
                        <h4 className="text-dark">- Vector and Physics Application in 3D Enviornments </h4>
                        <h4 className="text-dark">- Group Collaboration and Team Dynamics </h4>
                        
                    </div>
                </div>

                <hr className="my-4 border border-primary border-2"/>

                {/* FoodStop */}
                <div
                    className="project-page-select d-flex bg-primary-subtle rounded border border-primary border-2 overflow-hidden"
                    onClick={handleFoodStopClick}
                >
                    
                    <div className="w-66 h-100 d-flex justify-content-center align-items-center">
                        
                        <img
                            src="src/assets/images/food-stop-banner.png"
                            className="mw-100 mh-100 object-fit-contain"
                            alt="FoodStop Banner"
                        />

                    </div>

                    <div className="w-34 h-100 bg-primary bg-opacity-75 text-light d-flex justify-content-center align-items-center">
                        
                        <div className="text-center fs-4">
                            FoodStop {'>>'}
                        </div>

                    </div>

                </div>

                <div className="row my-2">
                    <div className="col-12">
                        <h2 className="text-primary text-start">Skills Developed</h2>
                        <hr className="my-4 border border-primary border-2"/>
                    </div>

                    <div className="col-11 offset-1">
                        <h4 className="text-dark">- Bootstrap Web Development </h4>
                        <h4 className="text-dark">- JQuery Scripting </h4>
                        <h4 className="text-dark">- Flask Web Development </h4>
                        <h4 className="text-dark">- SQL Databases Through SQLAlchemy </h4>
                        <h4 className="text-dark">- User Authentication Using Flask_Bcrypt </h4>
                        <h4 className="text-dark">- Git Version Control </h4>
                        
                    </div>
                </div>

                <hr className="my-4 border border-primary border-2"/>

                {/* WGJ - Weather Dashboard */}
                <div
                    className="project-page-select d-flex bg-primary-subtle rounded border border-primary border-2 overflow-hidden"
                    onClick={handleWGJClick}
                >
                    
                    <div className="w-66 h-100 d-flex justify-content-center align-items-center">
                        
                        <img
                            src="src/assets/images/WGJ-banner.png"
                            className="mw-100 mh-100 object-fit-contain"
                            alt="Weather Dashboard Banner"
                        />

                    </div>

                    <div className="w-34 h-100 bg-primary bg-opacity-75 text-light d-flex justify-content-center align-items-center">
                        
                        <div className="text-center fs-4">
                            Weather Group Joseph - Weather Dashboard {'>>'}
                        </div>

                    </div>

                </div>

                <div className="row my-2">
                    <div className="col-12">
                        <h2 className="text-primary text-start">Skills Developed</h2>
                        <hr className="my-4 border border-primary border-2"/>
                    </div>

                    <div className="col-11 offset-1">
                        <h4 className="text-dark">- Project Documentation through Confluence </h4>
                        <h4 className="text-dark">- Development Progress Tracking using Jira </h4>
                        <h4 className="text-dark">- React Web Development </h4>
                        <h4 className="text-dark">- Python Web Development using Flask </h4>
                        <h4 className="text-dark">- Constructing an API using processes </h4>
                        <h4 className="text-dark">- Team Leadership and Management </h4>
                        <h4 className="text-dark">- Git Version Control </h4>
                        
                    </div>
                </div>

                <hr className="my-4 border border-primary border-2"/>

                {/* Dummy 2048 */}
                <div
                    className="project-page-select d-flex bg-primary-subtle rounded border border-primary border-2 overflow-hidden"
                    onClick={handleDummy2048Click}
                >
                    
                    <div className="w-66 h-100 d-flex justify-content-center align-items-center">
                        
                        <img
                            src="src/assets/images/dummy2048-banner.png"
                            className="mw-100 mh-100 object-fit-contain"
                            alt="Dummy2048 Banner"
                        />

                    </div>

                    <div className="w-34 h-100 bg-primary bg-opacity-75 text-light d-flex justify-content-center align-items-center">
                        
                        <div className="text-center fs-4">
                            Dummy2048: Modeling & Animation {'>>'}
                        </div>

                    </div>

                </div>

                <div className="row my-2">
                    <div className="col-12">
                        <h2 className="text-primary text-start">Skills Developed</h2>
                        <hr className="my-4 border border-primary border-2"/>
                    </div>

                    <div className="col-11 offset-1">
                        <h4 className="text-dark">- Modeling using Blender </h4>
                        <h4 className="text-dark">- Rigging in Blender </h4>
                        <h4 className="text-dark">- Animations in Blender </h4>
                        <h4 className="text-dark">- Importing and Playing Animations in Unity </h4>
                        
                    </div>
                </div>

                <hr className="my-4 border border-primary border-2"/>

                {/* Ray Tracer */}
                <div
                    className="project-page-select d-flex bg-primary-subtle rounded border border-primary border-2 overflow-hidden"
                    onClick={handleRayTracerClick}
                >
                    
                    <div className="w-66 h-100 d-flex justify-content-center align-items-center">
                        
                        <img
                            src="src/assets/images/ray-tracer-banner.png"
                            className="mw-100 mh-100 object-fit-contain"
                            alt="Ray Tracer Banner"
                        />

                    </div>

                    <div className="w-34 h-100 bg-primary bg-opacity-75 text-light d-flex justify-content-center align-items-center">
                        
                        <div className="text-center fs-4">
                            Ray Tracing Renderer {'>>'}
                        </div>

                    </div>

                </div>

                <div className="row my-2">
                    <div className="col-12">
                        <h2 className="text-primary text-start">Skills Developed</h2>
                        <hr className="my-4 border border-primary border-2"/>
                    </div>

                    <div className="col-11 offset-1">
                        <h4 className="text-dark">- Recursive Ray Tracing Algorithm Implementation </h4>
                        <h4 className="text-dark">- Implementation of the Phong Illumination Model </h4>
                        <h4 className="text-dark">- Shadow Ray Implementation </h4>
                        <h4 className="text-dark">- Recursive Reflection Logic </h4>
                        <h4 className="text-dark">- Camera Transformation by Applying Gram-Schmidt Orthonormalization </h4>
                        <h4 className="text-dark">- Python using Numpy and Matplotlib </h4>
                        
                    </div>
                </div>

                <hr className="my-4 border border-primary border-2"/>

                {/* Raster Based Renderer */}
                <div
                    className="project-page-select d-flex bg-primary-subtle rounded border border-primary border-2 overflow-hidden"
                    onClick={handleRasterBasedClick}
                >
                    
                    <div className="w-66 h-100 d-flex justify-content-center align-items-center">
                        
                        <img
                            src="src/assets/images/raster-based-renderer-banner.png"
                            className="mw-100 mh-100 object-fit-contain"
                            alt="Raster Based Renderer Banner"
                        />

                    </div>

                    <div className="w-34 h-100 bg-primary bg-opacity-75 text-light d-flex justify-content-center align-items-center">
                        
                        <div className="text-center fs-4">
                            Raster-Based Renderer {'>>'}
                        </div>

                    </div>

                </div>

                <div className="row my-2">
                    <div className="col-12">
                        <h2 className="text-primary text-start">Skills Developed</h2>
                        <hr className="my-4 border border-primary border-2"/>
                    </div>

                    <div className="col-11 offset-1">
                        <h4 className="text-dark">- Applications of Computational Linear Algebra for Matrix Transformations </h4>
                        <h4 className="text-dark">- Transformation Matricies to Transition Between Object, World, and Screen Space </h4>
                        <h4 className="text-dark">- Application of the Clip Test for Screen Rendering </h4>
                        <h4 className="text-dark">- Python using Pygame and Numpy </h4>
                        
                    </div>
                </div>

                <hr className="my-4 border border-primary border-2"/>

                {/* Text-Based RPG */}
                <div
                    className="project-page-select d-flex bg-primary-subtle rounded border border-primary border-2 overflow-hidden"
                    onClick={handleTextBasedClick}
                >
                    
                    <div className="w-66 h-100 d-flex justify-content-center align-items-center">
                        
                        <img
                            src="src/assets/images/text-based-RPG-banner.png"
                            className="mw-100 mh-100 object-fit-contain"
                            alt="Text Based RPG Banner"
                        />

                    </div>

                    <div className="w-34 h-100 bg-primary bg-opacity-75 text-light d-flex justify-content-center align-items-center">
                        
                        <div className="text-center fs-4">
                            Text-Based RPG {'>>'}
                        </div>

                    </div>

                </div>

                <div className="row my-2">
                    <div className="col-12">
                        <h2 className="text-primary text-start">Skills Developed</h2>
                        <hr className="my-4 border border-primary border-2"/>
                    </div>

                    <div className="col-11 offset-1">
                        <h4 className="text-dark">- Object Oriented Programming </h4>
                        <h4 className="text-dark">- Java Class Heirarchies </h4>
                        <h4 className="text-dark">- Team Leadership </h4>
                        <h4 className="text-dark">- Git Version Control </h4>
                        
                    </div>
                </div>

                <hr className="my-4 border border-primary border-2"/>
            
            </div>
            
        </div>
    );
}

export default MyProjects;