import React from 'react';
import Header from '../Header';

function VelocityTrials( {setPage} ) {

    const handleDummy2048Click = () => {
        setPage("dummy2048");
        console.log('Dummy2048 project clicked');
    };

    return (
        <div className="w-100 bg-primary-subtle">
            
            <Header setPage={setPage}/>
            
            <div className="container py-4 px-4 my-2 rounded bg-light">
                
                {/* Title */}
                <h1 className="text-primary text-start fw-bold">Velocity Trials</h1>
                <hr className="my-4 border border-primary border-2"/>

                <div className="row">
                    
                    <div className="col-12">
                        
                        {/* Demo Video */}
                        <div class="float-end me-3 w-50">
                            <video class="w-100 h-auto rounded ms-3 mb-3" controls>
                                <source src="src/assets/videos/VelocityTrialsDemo.mp4" type="video/mp4" />
                                Your browser does not support .mp4 videos
                            </video>
                            <p class="mt-1 text-center text-secondary">
                                <em>*Velocity Trials Gameplay Demo Levels 1-15*</em>
                            </p>
                        </div>
                        
                        {/* Intro Section */}
                        <h2 className="text-primary text-start">Description</h2>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-dark">
                            Velocity Trials is a momentum-based parkour game where you take 
                            the role of Dummy2048, a testing dummy for the Si-Tech corporation. 
                            The reason for your creation is to test the enhanced movement 
                            capabilities developed by Si-Tech. You have been armed with the 
                            capability to slide, double jump, wall run, wall climb, wall jump, 
                            mantle over objects, and use two different grapples. One grapple that 
                            you swing with, and another that can pull you to your desired location. 
                            As a testing dummy, your goal is to use your capabilities to reach the 
                            end of 30 different chambers, all while under the watchful eye of the 
                            Overseer. The Overseer is a Si-Tech employee assigned to observe 
                            your progress through each chamber, and they will not hesitate to 
                            remind you along the way that each dummy created costs invester 
                            dollars, so don't mess up! Once you have completed each level, 
                            you will have the oportunity to enter the level in "Time Attack" 
                            mode, allowing you to improve the effeciency of your use of these 
                            movement capabilities and decrease your best time on a given chamber.
                            With that being said, good luck to you Dummy2048, and don't mess it up!
                        </p>
                    
                    </div>
                
                </div>

                <div className="row">

                    <div className="col-12">
                        <h2 className="text-primary text-start">My Contributions</h2>
                        <hr className="my-4 border border-primary border-2"/>

                        <div className="row">

                            <div className="col-6">
                                
                                <h3 className="text-primary text-start">Player Movement</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    I coded all of the player movement functionality including 
                                    standing, crouching, crouch walking, walking, running, 
                                    jumping, double jumping, sliding, mantling, wall running, 
                                    wall climbing, wall jumping, pull grappling, and swing grappling. 
                                    I also handled all enviornment detection, interactions, and camera 
                                    handling including slope handling, speed calculation, collision 
                                    detection, collider manipulation, movement ability conditions, camera 
                                    rotation based on user mouse input, and first person and third person 
                                    perspective shifts. 
                                </p>

                                <h3 className="text-primary text-start">Modeling and Animation</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    I handled the modeling and animation for our Dummy2048 player 
                                    model using Blender. This involved creating 17 different custom 
                                    animations using Blender's rigging system, importing them to Unity, 
                                    and creating the AnimationManager.cs script to switch between 
                                    animations during runtime based on the player's movement state. 
                                    This also served as a separate project for my Computer Graphics 
                                    course. For more information on this project, feel free to visit 
                                    the Dummy2048: Modeling & Animation project page.
                                </p>

                                <div className="d-grid gap-2 mb-4">
                        
                                    <button className="btn btn-primary" onClick={handleDummy2048Click} >
                                        Dummy2048: Modeling & Animation
                                    </button>
                                
                                </div>

                                <h3 className="text-primary text-start">Git Repository Management</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    As the creator of the Git repository, I was responsible for the management 
                                    and upkeep of the collaborative workspace including repository management. (
                                    ie. keeping Unity program files out of the shared repository, rollbacks when 
                                    necessary, and branch management) Since I had previous experience using git, 
                                    I was present for all meetings invloving merges of branches onto main and 
                                    often had separate, one-on-one meetings with team members to merge their 
                                    contributions onto main.
                                </p>

                                
                            </div>

                            <div className="col-6">
                                <h3 className="text-primary text-start">Scripts Written</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    -<strong>PlayerMovementManager.cs:</strong> 
                                    <em> Handles movement calculations and detection applicable to 
                                    both grounded and airborne movement. (ie. speed calculations, 
                                    ground detection, grappling, etc.)</em><br />
                                    -<strong>GroundedMovementScript.cs:</strong> 
                                    <em> Handles calculations and detection specific to grounded 
                                    movement. (ie. standard grounded movement like walking/running, 
                                    slope detection, sliding slope speed increase, etc,)</em><br />
                                    -<strong>AirborneMovementScript.cs:</strong> 
                                    <em> Handles calculations and detection specific to airborne 
                                    movement. (ie. double jump application, wall running wall detection,
                                    etc.)</em><br />
                                    -<strong>SlidingScript.cs:</strong> 
                                    <em> Handles application of sliding movement when called by 
                                    GroundedMovementScript.cs including collider resizing and 
                                    omnidirectional sliding.</em><br />
                                    -<strong>MantlingScript.cs:</strong> 
                                    <em> Handles mantlable object detection and application of 
                                    mantling movement including omnidirectional mantling and 
                                    collider resizing.</em><br />
                                    -<strong>WallRunningScript.cs:</strong> 
                                    <em> Handles conditions for wall running and application 
                                    of wall running movement including player look angle against 
                                    the wall and wall running timer.</em><br />
                                    -<strong>WallClimbingScript.cs:</strong> 
                                    <em> Handles wall climbing movement application and wall 
                                    climbing conditions such as player look angle against the 
                                    wall, wall climbing timer, and wall climbing internal cooldown.</em><br />
                                    -<strong>GrapplingScript.cs:</strong> 
                                    <em> Handles both swing and pull grapple movement application and 
                                    grapple conditions. Handles internal grapple counter, force application 
                                    physics calculation for arched movement for pull grappling, and springjoint 
                                    attachment for swing grappling.</em><br />
                                    -<strong>CameraHolder.cs:</strong> 
                                    <em> Handles camera position.</em> <br />
                                    -<strong>PlayerCamera.cs:</strong> 
                                    <em> Handles camera rotation in relation to user mouse input.</em><br />
                                    -<strong>AnimationManager.cs:</strong> 
                                    <em> Handles player model animation application based on the player's 
                                        movement state
                                    </em>

                                </p>
                            </div>

                                

                        </div>

                    </div>

                    <div className="col-12">
                        <h2 className="text-primary text-start">Skills Developed</h2>
                        <hr className="my-4 border border-primary border-2"/>
                    </div>
                    
                    <div className="col-11 offset-1">
                        
                        <h3 className="text-primary text-start">Unity 3D Game Development</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Velocity Trials was developed using the Unity game engine version 
                            2022.3.42f1. While developing this project, I gained a lot of experience 
                            using game development engines to create 3D enviornments and handling 
                            interactions between in-game elements. I also gained a lot of experience 
                            with raycast systems to not only detect objects but also perform angle 
                            calculations based on player orientation against the face of the object 
                            the raycast hit. Development of Velocity Trials also gave me an in depth 
                            understanding of Unity's physics system and encorporation of rigidbodies 
                            to in-game objects and characters.
                        </p>

                        <h3 className="text-primary text-start">C# Development</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Since Unity uses C# as it's primary scripting language, through 
                            the development of the 11 scripts I personally wrote spanning 
                            roughly 1800 lines of code, I gained a firmiliarity with the 
                            C# language and I would consider myself comfortable with development 
                            in C# after this project.
                        </p>
                    
                        <h3 className="text-primary text-start">Git Version Control with Unity</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Throughout the course of the semester, our group used Git & GitHub 
                            as our form of version control. I have since began studying Unity's 
                            integrated version control which has benefits over Git during development 
                            of Unity projects but the challenges the use of Git brought during 
                            the development of Velocity Trials forced me to learn how to manage 
                            and separate Unity program files and project files while maintaining 
                            asset files required for collaborative development.
                        </p>

                        <h3 className="text-primary text-start">Vector and Physics Application in 3D Enviornments</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Development of the advanced movement capabilities that Dummy2048 had 
                            access to in Velocity Trials required an in-depth knowledge of computational 
                            linear algebra and a fair amount of applications of physics in these 
                            3D environments to achieve the desired effect we were striving for. A few 
                            examples of these applications would be slope calculation (applying force 
                            to the player up the slope rather than into the slope to maintain a constant 
                            speed), force required for travel in an arch (used in the pull grapple, the 
                            player's movement is locked and the specific amount of force required to send 
                            the player in an arch to their grapple point is added to their rigid-body), 
                            and wall angle detection for wall running and wall climbing (calculating the 
                            angle the player is looking against the wall face to detect whether they are 
                            inputting a wall climb or wall run and detecting the forward direction of the 
                            wall against the players look direction for wall run implementation).
                        </p>

                        <h3 className="text-primary text-start">Group Collaboration and Team Dynamics</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Development of a project on the scale of Velocity Trials could not be done 
                            in a semester without the collaboration and dedication of my groupmates. With 
                            many of my other projects, due to the unfortunate nature of group projects, I 
                            was often left to do the majority of the work. Thankfully, with Velocity Trials, 
                            I had a few groupmates that were just as dedicated to creating the ambitious 
                            project Velocity Trials was. Due to this change of pace however, I was introduced 
                            to the real-time application of group collaboration and team dynamics by strategically 
                            separating the workload accounting for each member's strengths and weaknesses and 
                            allowing each group member to produce their best work developing something they 
                            were best at.
                        </p>

                    </div>

                </div>
            
            </div>

        </div>
    );
}

export default VelocityTrials;