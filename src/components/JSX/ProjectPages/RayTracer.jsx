import React from 'react';
import Header from '../Header';

function RayTracer( {setPage} ) {

    return (
        <div className="w-100 bg-primary-subtle">
            
            <Header setPage={setPage}/>
            
            <div className="container py-4 px-4 my-2 rounded bg-light">
                
                {/* Title */}
                <h1 className="text-primary text-start fw-bold">Ray Tracer</h1>
                <hr className="my-4 border border-primary border-2"/>

                <div className="row">
                    
                    <div className="col-12">
                        
                        {/* Demo Video */}
                        <div class="float-end me-3 w-50">
                            <video class="w-100 h-auto rounded ms-3 mb-3" controls>
                                <source src="src/assets/videos/RayTracerDemo.mp4" type="video/mp4" />
                                Your browser does not support .mp4 videos
                            </video>
                            <p class="mt-1 text-center text-secondary">
                                <em>*Demo of my ray tracer rendering shadows and reflections*</em>
                            </p>
                        </div>
                        
                        {/* Intro Section */}
                        <h2 className="text-primary text-start">Description</h2>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-dark">
                            As a project assigned later in my computer graphics course, we were assigned to 
                            implement a ray tracer. Using ray tracing, I was able to simulate how rays of 
                            light interact with 3D objects to produce a higher quality image with shadows 
                            and lighting effects without the use of baked in lighting required for a raster based 
                            image renderer. For this, rays are cast from each pixel of the camera to determine 
                            intersections with objects like spheres, triangles, and planes in the scene. The 
                            algorithm calculates how light bounces off of these surfaces, how shadows are cast from 
                            other objects in the scene, and how the material properties of each object effect the 
                            final rendered image. The ray tracer cast rays that recursively bounce to simulate light 
                            rays and calculate how the light on each point hit would be effected by the preceeding and 
                            following objects hit. This allows the rays to account for different types of lighting 
                            including ambient, diffuse, and specular components. The amount of times the ray bounces 
                            is determined by the maximum bounce depth and the rendered output is saved and displayed 
                            using matplotlib, and JSON files define the scene, camera, and light setup.
                        </p>
                    
                    </div>
                
                </div>

                <div className="row">

                    <div className="col-12">
                        <h2 className="text-primary text-start">What the Project Involved</h2>
                        <hr className="my-4 border border-primary border-2"/>

                        <div className="row">

                            <div className="col-6">
                                
                                <h3 className="text-primary text-start">Scene Construction via JSON</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    The scene setup was handled by parsing a structured JSON file which defined the 
                                    geometry in the scene, those being a mix of spheres, planes, and triangles, the 
                                    shape's material properties, the light source in the scene, and the camera configuration 
                                    (position, orientation, FOV). Custom object classes were used to encapsulate intersect 
                                    logic and surface properties.
                                </p>

                                <h3 className="text-primary text-start">Ray Casting Through Pixels</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    Rays were cast from the camera origin through each pixel by transforming the pixel 
                                    coordinates into world space using the camera's orthonormal basis, constructed using 
                                    Gram-Schmidt orthogonalization. These rays were then traced through the scene to 
                                    determine intersections.
                                </p>

                                <h3 className="text-primary text-start">Intersection Calculations</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    The ray tracer checked for intersections with objects in the scene using each object's custom 
                                    intersect method provided by our professor. The closest object hit by the ray was 
                                    identified, and if no hit was found, the pixel was colored with the background color.
                                </p>
                                
                            </div>

                            <div className="col-6">
                                <h3 className="text-primary text-start">Lighting Calculations using the Phong Reflection Model</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    If a hit was detected, the ray tracer computed the pixel color using the Phong 
                                    lighting model, which includes calculating ambient light for base illumination of 
                                    the object, diffuse light for surface brightness based on the face and lighting angle, 
                                    and specular light for shininess based on the viewer angle.
                                </p>

                                <h3 className="text-primary text-start">Shadow Rays</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    To simulate shadows, shadow rays were cast from the point of intersection toward the 
                                    light source. If that ray intersected another object before reaching the light, the 
                                    point was considered in shadow and diffuse and specular calculations were excluded from 
                                    the final color calculation. 
                                </p>

                                <h3 className="text-primary text-start">Recursive Reflections</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    The ray tracer supported up to 4 levels of recursion for reflections. At each 
                                    reflective surface, a reflection ray was cast and traced recursively, blending 
                                    its returned color with the color added local light source with the intensity of the 
                                    blending being based on the surface's reflection coefficient.
                                </p>

                            </div>

                                

                        </div>

                    </div>

                    <div className="col-12">
                        <h2 className="text-primary text-start">Skills Developed</h2>
                        <hr className="my-4 border border-primary border-2"/>
                    </div>
                    
                    <div className="col-11 offset-1">
                        
                        <h3 className="text-primary text-start">Recursive Ray Tracing Algorithm Implementation</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            I implemented a recursive ray tracing algorithm to recursively cast rays through each 
                            pixel of the screen and calculate the final color of that pixel based on the objects and 
                            light sources in the scene.
                        </p>

                        <h3 className="text-primary text-start">Implementation of the Phong Illumination Model</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            I gained hands-on experience implementing the Phong illumination model, understanding 
                            the differences between ambient, diffuse, and specular lighting, and how these 
                            influence the final pixel color in a ray-traced image.
                        </p>

                        <h3 className="text-primary text-start">Shadow Ray Implementation</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            I learned to implement shadow rays to simulate object occlusion from light sources 
                            ensuring surfaces blocked from the light appeared appropriately darkened.
                        </p>

                        <h3 className="text-primary text-start">Recursive Reflection Logic</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Working with recursive function calls to simulate reflective surfaces gave me experience 
                            with depth-based termination conditions and blending of the result from multiple 
                            lighting contributions from objects in the scene.
                        </p>

                        <h3 className="text-primary text-start">Camera Transformation by Applying Gram-Schmidt Orthonormalization</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            To convert camera parameters into usable coordinate systems to obtain ray origins, 
                            I applied Gram-Schmidt orthonormalization to compute camera axes and build a view 
                            space. This process helped broaden my understanding of spatial transformations 
                            in 3D rendering.
                        </p>

                        <h3 className="text-primary text-start">Python using Numpy and Matplotlib</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            This ray tracer was built using Python, using Numpy for its efficient vector 
                            and matrix operations and Matplotlib to visualize the final rendered image.
                        </p>

                    </div>

                </div>
            
            </div>

        </div>
    );
}

export default RayTracer;