import React from 'react';
import Header from '../Header';
import dummyModelImage from '../../../assets/images/Dummy2048PlayerModel.png';


function Dummy2048( {setPage} ) {

    const handleVelocityTrialsClick = () => {
        setPage("velocityTrials");
        console.log('Velocity Trials project clicked');
    };

    return (
        <div className="w-100 bg-primary-subtle">
            
            <Header setPage={setPage}/>
            
            <div className="container py-4 px-4 my-2 rounded bg-light">
                
                {/* Title */}
                <h1 className="text-primary text-start fw-bold">Dummy2048 - Modeling and Animation</h1>
                <hr className="my-4 border border-primary border-2"/>

                <div className="row">
                    
                    <div className="col-12">
                        
                        {/* Demo Video */}
                        <div className="float-end me-3 w-50">
                            <div className="ratio ratio-16x9 rounded overflow-hidden m-2">
                                <iframe
                                    className="w-100 h-100"
                                    src="https://www.youtube.com/embed/a6lrIYeiNzE"
                                    title="Dummy2048 Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <p className="mt-1 text-center text-secondary">
                                <em>*Demo of a few of the 17 different animations I created for our custom player model*</em>
                            </p>
                        </div>
                        
                        {/* Intro Section */}
                        <h2 className="text-primary text-start">Description</h2>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-dark">
                            For my group's game, Velocity Trials, we were told that all assets for our 
                            game needed to be royalty-free. As I was in a computer graphics course, I 
                            thought what better way to obtain a royalty-free player model and animations 
                            than to make them myself. Using Blender, I modeled our player and then went 
                            through the process of rigging our character and making <strong>17 different animations </strong>
                            to represent the different actions available to the player. The benefit of this 
                            was that it also served as my final project for my computer graphics course where 
                            we had to expand on a topic learned in that course. We were taught the basics of 
                            modeling in Blender but <strong>rigging and animation</strong> for this project were entirely <strong>self-taught</strong>. 
                            Though the animations were rough around the edges, ultimately I was proud 
                            of what I was able to create in the couple of weeks that I worked on the project and 
                            I learned plenty of knowledge about how models and animations work both in Blender 
                            and when transferred to Unity!
                        </p>
                    
                    </div>
                
                </div>

                <div className="row">

                    <div className="col-12">
                        <h2 className="text-primary text-start">What the Project Involved</h2>
                        <hr className="my-4 border border-primary border-2"/>

                        <div className="row">

                            <div className="col-6">
                                
                                <h3 className="text-primary text-start">Modeling</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    The <strong>player model</strong> for our game was completely <strong>handcrafted</strong> using the modeling 
                                    techniques learned from my computer graphics course. The textures were gathered 
                                    from <strong>BlenderKit</strong> to get the yellow and black color scheme. Although rather basic, 
                                    the main goal of the project was to create animations to expand on the topics taught 
                                    in class so I only spent a few hours working on the modeling side of the model.
                                </p>

                                <div class="float-end me-3 w-100">
                                    <img
                                        className="d-block mx-auto rounded mb-3"
                                        style={{ maxHeight: '500px', maxWidth: '244px' }}
                                        src={dummyModelImage}
                                        alt="Dummy2048 Player Model"
                                    />
                                    <p class="mt-1 text-center text-secondary">
                                        <em>*Dummy2048 Player Model with Textures*</em>
                                    </p>
                                </div>

                                
                                
                            </div>

                            <div className="col-6">
                                <h3 className="text-primary text-start">Rigging and Animation</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    For this project, through various <strong>YouTube tutorials</strong>, I <strong>taught myself</strong> how to <strong>rig 
                                    my model</strong> with <strong>bones</strong> and <strong>create key frames</strong> for my model's animations. This involved 
                                    a hefty amount of <strong>UV painting</strong> to ensure bones moved the correct parts of the model 
                                    and tweaking key frames and <strong>transition speeds</strong> to get the look I wanted. Naturally, 
                                    creating the model and animations also gave me experience with exporting, importing, 
                                    and playing my model's animations in Unity. Although modeling and animation may not 
                                    be my expertise, I feel as though that experience <strong>will help me better understand</strong> how 
                                    <strong> other teams implement game art</strong> if I end up <strong>in a game development position</strong>.
                                </p>

                                <h3 className="text-primary text-start">Importing and Playing Animations in Unity</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    To get the custom-made model and animations into our game, naturally, I had to learn 
                                    how to <strong>export the model with its animations</strong> from Blender, <strong>import them into Unity</strong>, and 
                                    <strong> play the animations</strong> at the correct time. Due to the stress of finals, unfortunately 
                                    I didn't have the time to go as into depth with this as I would have liked to, resorting 
                                    to <strong>creating a script with functions</strong> that I could call <strong>to play each animation</strong> manually 
                                    through code, I still gained some experience with how game assets are imported and used 
                                    in development of a game!
                                </p>

                                <div className="d-grid gap-2 mb-4">
                        
                                    <button className="btn btn-primary" onClick={handleVelocityTrialsClick} >
                                        See More About Velocity Trials Development
                                    </button>
                                
                                </div>

                            </div>

                                

                        </div>

                    </div>

                    <div className="col-12">
                        <h2 className="text-primary text-start">Skills Developed</h2>
                        <hr className="my-4 border border-primary border-2"/>
                    </div>
                    
                    <div className="col-11 offset-1">
                        
                        <h3 className="text-primary text-start">Modeling in Blender</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Creating our player model definitely helped develop my skills at <strong>creating 
                            simple models</strong> in Blender. Though I may not be a pro, I can definitely create 
                            something passable until someone else far more skilled than I comes along.
                        </p>

                        <h3 className="text-primary text-start">Rigging in Blender</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Rigging our player model was a large portion of this project which taught me 
                            a lot about how <strong>UV painting and model bone structures</strong> work in preparing a model 
                            for animations.
                        </p>

                        <h3 className="text-primary text-start">Animations in Blender</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Creating all <strong>17 of our model animations</strong> in Blender <strong>taught me a lot about key frames </strong>
                            and <strong>time scales for key frame transitions</strong>. Creating these animations took a significant 
                            amount of time and throughout the process, I definitely gained a lot of experience and 
                            respect for the art and animation side of game development.
                        </p>

                        <h3 className="text-primary text-start">Importing and Playing Animations in Unity</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Once all of the animations were created, this project also gave me experience with 
                            <strong> importing</strong> and <strong>playing animations in-game</strong>. I will clarify that due to time constraints, 
                            I didn't get to explore as much as I would have liked to in this area but it gave me <strong>great 
                            experience</strong> for how the <strong>visuals are made in games</strong>.
                        </p>

                    </div>

                </div>
            
            </div>

        </div>
    );
}

export default Dummy2048;