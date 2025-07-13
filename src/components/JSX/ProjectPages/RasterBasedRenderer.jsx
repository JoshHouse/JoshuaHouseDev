import React from 'react';
import Header from '../Header';



function RasterBased( {setPage} ) {

    return (
        <div className="w-100 bg-primary-subtle">
            
            <Header setPage={setPage}/>
            
            <div className="container py-4 px-4 my-2 rounded bg-light">
                
                {/* Title */}
                <h1 className="text-primary text-start fw-bold">Raster-Based Renderer</h1>
                <hr className="my-4 border border-primary border-2"/>

                <div className="row">
                    
                    <div className="col-12">
                        
                        {/* Demo Video */}
                        <div class="float-end me-3 w-50">
                            <div className="ratio ratio-16x9 rounded overflow-hidden m-2">
                                <iframe
                                    className="w-100 h-100"
                                    src="https://www.youtube.com/embed/bPYKafRDC_g"
                                    title="Dummy2048 Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <p class="mt-1 text-center text-secondary">
                                <em>*Demo of my raster based renderer with camera controls*</em>
                            </p>
                        </div>
                        
                        {/* Intro Section */}
                        <h2 className="text-primary text-start">Description</h2>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-dark">
                            This was a project for my computer graphics course in which we had to 
                            render a set of points to the screen from a JSON file. For this, we needed 
                            to perform all of the necessary <strong>computational linear algebra calculations </strong> 
                            using <strong>matrix transformations</strong> to convert those points and map them into screen 
                            space. To do this, we had to apply the <strong>object to world</strong> and <strong>world to camera </strong> 
                            affine transformation matrices, apply the <strong>clip test</strong> to ensure that the points were 
                            in the view frustum of the camera, then apply the <strong>camera to screen space </strong> 
                            affine transformation matrices. This code was run constantly to allow for camera controls 
                            with WASD for left, right, forward, and backward movement as well as R and F for 
                            up and down movement. On top of this, to avoid repeated code, I also created 
                            helper functions in my project to take a set of values to build and transformation, 
                            rotation, and scale matrices. 
                        </p>
                    
                    </div>
                
                </div>

                <div className="row">

                    <div className="col-12">
                        <h2 className="text-primary text-start">What the Project Involved</h2>
                        <hr className="my-4 border border-primary border-2"/>

                        <div className="row">

                            <div className="col-6">

                                <h3 className="text-primary text-start">Object to World Space Matrix Transformations</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    The car seen in the demo video was a portion of the extra credit assignment where we 
                                    were given a set of points that represented different portions of the car such as a wheel. 
                                    These points were <strong>centered around the origin</strong> of the world, and as such, were considered to 
                                    be <strong>in object space</strong>. The object to world transformation involved transitioning 
                                    these points centered around the origin to the place they should be in the world by applying 
                                    affine transformation matrices.
                                </p>

                                <h3 className="text-primary text-start">World to Camera Space Matrix Transformations</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    The world space to camera space transformation involved taking the points that represented 
                                    the objects in the world and <strong>transitioning their points</strong> from being <strong>in reference to the origin 
                                    of the world</strong> to being <strong>in reference to the camera's position</strong> and viewing angle. This was also 
                                    done using a set of affine transformation matrices.
                                </p>
                                
                            </div>

                            <div className="col-6">
                                <h3 className="text-primary text-start">View Frustum Clip Test</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    The view frustum clip test is a way to ensure that what is being rendered to the screen 
                                    is visible by the camera. This not only <strong>takes into account the sides of the view frustum </strong>
                                    but also the <strong>near clip and far clip planes</strong> (meaning what is too close to the camera to 
                                    see and what is too far away from the camera to see). For simplicity's sake, since this project 
                                    was closer to the beginning of the course, we did not perform the calculations necessary to 
                                    render portions of the lines, rather clipping the entire line if one of its points existed 
                                    outside the camera's view frustum.
                                </p>

                                <h3 className="text-primary text-start">Camera to Screen Space Affine Transformation Matrices</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    Finally, after ensuring that the lines existed in the view frustum, the <strong>affine transformation 
                                    matrices were applied</strong> to take those lines <strong>in relation to the camera</strong> and <strong>map them to specific 
                                    pixels on the screen</strong> to render the image. 
                                </p>

                            </div>

                                

                        </div>

                    </div>

                    <div className="col-12">
                        <h2 className="text-primary text-start">Skills Developed</h2>
                        <hr className="my-4 border border-primary border-2"/>
                    </div>
                    
                    <div className="col-11 offset-1">
                        
                        <h3 className="text-primary text-start">Computational Linear Algebra Applications for Affine Transformation Matrices</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Creating these transitions for proper rendering of these lines to the screen required 
                            an <strong>in-depth understanding of computational linear algebra's concepts</strong> and their 
                            applications specifically <strong>regarding vectors and matrices</strong>.
                        </p>

                        <h3 className="text-primary text-start">Affine Transformation Matrices to Transition Between Object, World, and Screen Space</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Further diving into the computational linear algebra concepts, working on this project, 
                            I specifically learned how to <strong>interpret and apply</strong> affine transformation matrices, or more thoroughly, 
                            <strong> transformation, rotation, and scalar matrices</strong> to <strong>transition a given set of points 
                            into object, world, and camera space</strong>.
                        </p>

                        <h3 className="text-primary text-start">Clip Test Application for Screen Rendering</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            I also learned how to <strong>apply the clip test</strong> to determine whether <strong>a given point existed 
                            within the view frustum</strong> of the camera to <strong>avoid attempting to render objects outside of 
                            the camera's view frustum</strong> to the screen.
                        </p>

                        <h3 className="text-primary text-start">Python using Pygame and Numpy</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            This project was created using <strong>Python</strong> as the coding language, <strong>Pygame</strong> to generate the 
                            image rendered by my program, and <strong>Numpy</strong> for its useful data types for storing and using 
                            vectors and matrices.
                        </p>

                    </div>

                </div>
            
            </div>

        </div>
    );
}

export default RasterBased;