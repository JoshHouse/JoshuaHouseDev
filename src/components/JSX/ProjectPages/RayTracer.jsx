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
                            and lighting effects without the use of baked-in lighting required for a raster-based 
                            image renderer. For this, <strong>rays are cast from each pixel of the camera</strong> to determine 
                            intersections with objects like spheres, triangles, and planes in the scene. The 
                            algorithm <strong>calculates how light bounces off of these surfaces</strong>, how shadows are cast from 
                            other objects in the scene, and how the material properties of each object affect the 
                            final rendered image. The ray tracer casts rays that <strong>recursively bounce to simulate light </strong> 
                            rays and calculate how the light on each point hit would be affected by the preceding and 
                            following objects hit. This allows the rays to account for different types of lighting 
                            including ambient, diffuse, and specular components. The number of times the ray bounces 
                            is determined by the maximum bounce depth and the rendered output is saved and displayed 
                            <strong> using matplotlib</strong>, and <strong>JSON files define the scene, camera, and light setup</strong>.
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
                                    The scene setup was handled by parsing a structured <strong>JSON file</strong> which <strong>defined the 
                                    geometry in the scene</strong>, those being <strong>a mix of spheres, planes, and triangles</strong>, the 
                                    <strong> shape's material properties</strong>, the <strong>light source</strong> in the scene, and the <strong>camera configuration </strong> 
                                    (position, orientation, FOV). <strong>Custom object classes</strong> were used to <strong>encapsulate intersection 
                                    logic</strong> and <strong>surface properties</strong>.
                                </p>

                                <h3 className="text-primary text-start">Ray Casting Through Pixels</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    <strong>Rays were cast</strong> from the <strong>camera origin through each pixel</strong> by <strong>transforming the pixel 
                                    coordinates into world space</strong> using the <strong>camera's orthonormal basis</strong>, constructed using 
                                    <strong> Gram-Schmidt orthogonalization</strong>. These rays were then traced through the scene to 
                                    determine intersections.
                                </p>

                                <h3 className="text-primary text-start">Intersection Calculations</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    The ray tracer <strong>checked for intersections</strong> with objects in the scene using each object's custom 
                                    <strong> intersect method provided by our professor</strong>. The closest object hit by the ray was 
                                    identified, and if no hit was found, the pixel was colored with the background color.
                                </p>
                                
                            </div>

                            <div className="col-6">
                                <h3 className="text-primary text-start">Lighting Calculations using the Phong Reflection Model</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    If a hit was detected, the ray tracer <strong>computed the pixel color</strong> using the <strong>Phong 
                                    lighting model</strong>, which includes <strong>calculating ambient light</strong> for base illumination of 
                                    the object, <strong>diffuse light</strong> for surface brightness based on the face and lighting angle, 
                                    <strong> and specular light</strong> for shininess based on the viewer angle.
                                </p>

                                <h3 className="text-primary text-start">Shadow Rays</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    To simulate shadows, <strong>shadow rays were cast</strong> from the <strong>point of intersection toward the 
                                    light source</strong>. If that ray <strong>intersected another object before reaching the light</strong>, the 
                                    point was <strong>considered in shadow</strong>, and <strong>both diffuse and specular calculations were excluded</strong> from 
                                    the final color calculation. 
                                </p>

                                <h3 className="text-primary text-start">Recursive Reflections</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    The ray tracer <strong>supported up to 4 levels of recursion</strong> for reflections. At each 
                                    reflective surface, a <strong>reflection ray was cast</strong> and <strong>traced recursively</strong>, <strong>blending 
                                    its returned color</strong> with the color added <strong>local light source</strong> with the <strong>intensity of the 
                                    blending</strong> being based on the <strong>surface's reflection coefficient</strong>.
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
                            I implemented a <strong>recursive ray tracing algorithm</strong> to recursively <strong>cast rays through each 
                            pixel of the screen</strong> and <strong>calculate the final color of that pixel</strong> based on the objects and 
                            light sources in the scene.
                        </p>

                        <h3 className="text-primary text-start">Phong Illumination Model Implementation </h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            I gained hands-on experience <strong>implementing the Phong illumination model</strong>, understanding 
                            the differences between <strong>ambient, diffuse, and specular lighting</strong>, and how these 
                            influence the final pixel color in a ray-traced image.
                        </p>

                        <h3 className="text-primary text-start">Shadow Ray Implementation</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            I learned to <strong>implement shadow rays to simulate object occlusion</strong> from light sources 
                            ensuring surfaces blocked from the light appeared appropriately darkened.
                        </p>

                        <h3 className="text-primary text-start">Recursive Reflection Logic</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Working with <strong>recursive function calls</strong> to <strong>simulate reflective surfaces</strong> gave me experience 
                            with <strong>depth-based termination conditions</strong> and blending of the result from multiple 
                            lighting contributions from objects in the scene.
                        </p>

                        <h3 className="text-primary text-start">Gram-Schmidt Orthonormalization for Camera Transformations </h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            To convert camera parameters into usable coordinate systems to obtain ray origins, 
                            I <strong>applied Gram-Schmidt orthonormalization</strong> to <strong>compute camera axes</strong> and build a view 
                            space. This process helped broaden my understanding of <strong>spatial transformations 
                            in 3D rendering</strong>.
                        </p>

                        <h3 className="text-primary text-start">Python using Numpy and Matplotlib</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            This ray tracer was built using <strong>Python</strong>, <strong>Numpy</strong> for its efficient vector 
                            and matrix operations, <strong>and Matplotlib</strong> to visualize the final rendered image.
                        </p>

                    </div>

                </div>
            
            </div>

        </div>
    );
}

export default RayTracer;