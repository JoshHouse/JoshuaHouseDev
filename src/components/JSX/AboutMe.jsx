import React from 'react';
import Header from './Header';
import '../CSS/AboutMe.css';

function AboutMe( {setPage} ) {

    return (
        
        <div className="w-100 bg-primary-subtle">
            {/* Background Color Page Container */}
            
            {/* Header Element */}
            <Header setPage={setPage}/>

            {/* Page Content Container */}
            <div className="container py-4 px-4 my-2 rounded bg-light">
                
                {/* Title */}
                <h1 className="text-primary text-start fw-bold">About Me</h1>
                <hr className="my-4 border border-primary border-2"/>

                <h2 className="text-primary text-start fw-bold">Professional</h2>
                <hr className="my-4 border border-primary border-2"/>

                <div className="row">
                    
                    <div className="col-12">
                        
                        {/* Headshot Image */}
                        <img
                            src="src/assets/images/JoshuaHouseHeadshot.jpeg"
                            id="about-me-image-1"
                            className="img-fluid float-end ms-5 mb-3 rounded border border-2 border-primary"
                            alt="Joshua House Headshot"
                        />
                        
                        {/* Intro Section */}
                        <h3 className="text-primary text-start">Intro</h3>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-dark">
                            Hello! My name is Joshua House! It's great to see that you are 
                            interested in learning more about me. As a brief introduction to myself, 
                            I am an East Carolina University graduate, having earned my 
                            Bachelor's degree in Computer Science and completed a certificate 
                            program in Computer Game Development. I have always had an interest 
                            in computers, mathematics, and video games, being glued to computers 
                            from a young age. Pursuing my degree, however, has only furthered my 
                            interest in these topics and has led me to develop into a lifelong 
                            learner who is open and excited to learn about any and all concepts in 
                            tech. From computer graphics to backend systems, the inner workings of 
                            how our online world communicates will never grow boring. With the 
                            innovation of Artificial Intelligence, and as we better learn how to use this 
                            tool, I hope to be a part of the frontier of innovators that turns the 
                            world upside down! 
                        </p>
                        
                        {/* Tech Motivation Section */}
                        <h3 className="text-primary text-start">Why Tech?</h3>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-dark">
                            My interest in technology was sparked by my father. My father has been working as a backend 
                            developer at SAS for roughly 32 years so I was raised around technology for my entire life. 
                            Being raised around someone up-to-date with the latest trends in the tech world taught 
                            me how to solve real-world problems using different functionality that technology provides. 
                            Although his influence started me on my journey into tech, many other factors in my developmental 
                            years further solidified my interest in this field. One such influence was a coding camp hosted 
                            by my middle school as a summer program. In this camp, I learned how to code a very 
                            basic two-player game on a Raspberry Pi. This was my first introduction to coding 
                            as a whole and that introduction stuck with me as I pursued my degree. 
                            Mathematics also served as a strong suit of mine and I always considered myself 
                            to have a logistical mind. Video games also defined my childhood from a young age, 
                            starting my exploration into computers on our family computer, a 2005 iMac G5. Considering 
                            my comfort with using computers, my logistical mind, and my background in coding, Computer 
                            Science seemed like a logical choice!
                        </p>

                        {/* My Passion Section */}
                        <h3 className="text-primary text-start">My Passion</h3>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-dark">
                            Relating to my Intro, I truly consider myself passionate about all topics in tech. One of my 
                            biggest passions regarding this field is the problem-solving aspect of any given problem. It is almost 
                            guaranteed that any problem you face has a solution somewhere and it is simply a matter of finding it! 
                            A passion of mine that stands out beyond the rest however is my passion for Computer Game Design! Possibly 
                            due, in part, to my addiction to video games from a young age, my skills in spatial awareness have given me 
                            a keen ability to visualize how different systems will interact in a virtual 2D or 3D environment which 
                            plays a large role in developing video games. My passion for this niche of development doesn't solely stem 
                            from my unique ability to visualize environments while developing, however. One of the main draws for me 
                            towards game development comes from the absolute freedom of artistic expression that comes from what is 
                            essentially the most limitless sandbox ever created. Any scene, gameplay element, or artistic piece that you 
                            can imagine can be created with the right amount of knowledge and dedication to the project! I would love to 
                            be able to create a virtual experience that can have the same profound impact on future generations that 
                            the classics like Minecraft, Roblox, Call of Duty, or any of the other classic names in gaming had on me 
                            growing up! Though I can say that my passion lies in game development above others, I can truly say that 
                            I have a passion for development as a whole, no matter the topic. In terms of career paths, I might end up 
                            settling down in another position that I find passion in that isn't game development, but I believe that 
                            my passion for game development will always find a way to express itself. Even if that ends up being an 
                            indie project I develop outside of working hours!
                        </p>

                        {/* My Journey Title */}
                        <h3 className="text-primary text-start">My Journey</h3>
                        <hr className="my-4 border border-primary border-2"/>

                        <div className="row">
                            
                            {/* My Struggles Section */}
                            <div className="col-11 offset-1">
                                
                                <h4 className="text-primary text-start">My Struggles</h4>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    My biggest struggle throughout high school and the first three years of college was undiagnosed ADHD. I often felt stuck in 
                                    a mental fog and turned to unhealthy coping mechanisms that dulled my ability to focus and retain knowledge. These habits left 
                                    me simply coasting through classes and doing enough to get by, but never fully engaging with the material. My motto throughout 
                                    this period was "Computer Science is the degree for smart underachievers." I knew that I was smart enough to comprehend the topics 
                                    I was being taught but I simply could not muster up the motivation to put any real effort into learning them. This period of my life 
                                    was largely fueled by a low sense of self-worth and thinking of myself as either lazy or dumb. I wondered why I felt like in some areas 
                                    I was smarter than some of my peers but was unable to do something as simple as put in the effort to learn the topics I knew I was 
                                    capable of understanding. Throughout those first 3 years, I made decent grades. I didn't fail any of my classes, and entering my 
                                    senior year, I had a 3.33 GPA so I wasn't crashing and burning in any sense, but I can say that I wasn't retaining information the 
                                    way a focused and attentive student would have been. Little did I know that a simple diagnosis going into my senior year would validate 
                                    my suspicion that I was always capable of learning these topics. I just needed this mental barricade removed.
                                </p>
                                
                            </div>
                            
                            {/* Bouncing Back Section */}
                            <div className="col-11 offset-1">
                                
                                <h4 className="text-primary text-start">Removing My Boundaries</h4>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    Throughout my junior year summer, I was struggling with mental health issues and knew that something needed to change. 
                                    I talked to my doctor about my mental health and, in talking with her, she brought up the possibility of me having ADHD. After 
                                    taking the necessary tests, she determined that I did have a learning disability and put me on medication. With this medication 
                                    and retracting from my unhealthy coping mechanisms, I can definitively say that this was the turning 
                                    point for me. The semester that followed my diagnosis, I took 15 credit hours and ended with a semester GPA of 3.74 which 
                                    was a noticeable improvement from previous semesters. Through this semester, I (unofficially) tutored 7 different people 
                                    for Automata, Computability, and Complexity and worked with 4 other students to develop a text-based RPG videogame entirely 
                                    run through the terminal which was made purely from Java's Object-Oriented Class Hierarchy, resulting in over 10,000 lines of code. 
                                    This RPG game was packed with functionality, having 4 different class paths with different storylines for each, a battle system, 
                                    shops, hub areas, and 4 different chapters to the story. We were so proud of the project that when it came time to present, we were 
                                    instructed to give a 5-minute presentation and, before we knew it, our instructor was telling us that we had gone 15 minutes over 
                                    our time and that we needed to wrap up our presentation quickly! If you want to learn more about the project, it is linked 
                                    in the "My Projects" section. 
                                </p>

                            </div>

                            {/* Thriving Section */}
                            <div className="col-11 offset-1">
                                
                                <h4 className="text-primary text-start">Reaching My Potential</h4>
                                <hr className="my-4 border border-primary border-2"/>
                                
                                <div class="float-end d-flex justify-content-center mb-3"
                                    style={{ maxWidth: '50%'}} >
                                    <div class="text-center">
                                        <img 
                                            class="img-fluid rounded border border-2 border-primary" 
                                            style={{ maxHeight: '400px', maxWidth: '90%'}} 
                                            src="src/assets/images/JoynerStudySpotGraduation.png" 
                                            alt="Joyner Library Study Spot" />
                                        <p class="mt-1 text-secondary">
                                            <em>*My Joyner Library Study Spot Taken on Graduation Day*</em>
                                        </p>
                                    </div>
                                </div>

                                <p className="text-dark">
                                    I am happy to report that it gets better from there. My next semester, I took on an even larger course 
                                    load with 19 credit hours of purely senior and graduate-level Computer Science courses. Despite the significantly larger course load, 
                                    I managed to achieve an even higher semester GPA of 3.89. During this semester, I learned how to use many different systems including 
                                    React, Vite, Bootstrap, jQuery, Confluence, Jira, APIs (both creating and calling), databases, graphics techniques (such as ray-tracing, 
                                    raster-based rendering, shaders, animation, etc.), and others. I worked on many different projects like a weather dashboard, a recipe browser, 
                                    a ray-tracer, a raster-based renderer, and, probably my favorite of all, a momentum-based parkour game called Velocity Trials. 
                                    To learn the concepts that I have in the past year no doubt took a lot of time. As a frame of reference, in the first semester of 
                                    my senior year, I primarily used the Libraries study rooms and, out of curiosity, one day, roughly a month before the end of the 
                                    semester, I decided to add up all of the hours of study room reservations I had made since the beginning of the semester. In total, 
                                    I had spent 280 hours in study rooms! At this point, I was tired of reserving study rooms and found a table in the library that was 
                                    out of the way enough that people rarely went there so, unfortunately, I don't have a definitive time spent for my second semester, 
                                    but, that gives you a general idea! With all that being said, I am extremely proud of the progress I have made in a relatively short amount of time 
                                    and I'm excited to see the progress I continue to make wherever life takes me!
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                <h2 className="text-primary text-start fw-bold">Personal</h2>
                <hr className="my-4 border border-primary border-2"/>

                <div className="row">

                    <div className="col-12">
                    
                        {/* Intro Section */}
                        <h3 className="text-primary text-start">Intro</h3>
                        <hr className="my-4 border border-primary border-2"/>

                        <img
                            src="src/assets/images/SittingOnAWall.png"
                            id="about-me-image-1"
                            style={{ maxHeight: '340px'}}
                            className="img-fluid float-end ms-5 mb-3 rounded border border-2 border-primary"
                            alt="Joshua Sitting On A Wall"
                        />

                        <p className="text-dark">
                            On a personal level, there are only a few things you need to know about me. There are only a few 
                            things that I care about and those are the people in my life, outdoor activities, good music, good 
                            films, video games, and my cat. Knowing just those few things, you know just about all you need to 
                            know to understand me. I'll go more into depth about some in the next sections, but a quick overview 
                            of the topics listed, the people in my life are the most important thing to me. Their support and care 
                            for me are the only way I have made it as far as I have and without them, I would truly be lost. Outdoor 
                            activities are also important to me as I feel that being in nature is one of the best ways to escape the 
                            hectic nature of the world we are in right now. It's nice to separate yourself from it all for a little bit 
                            and just spend time with people you care about away from all the stress. Good music is important to me 
                            because I feel that a good album from a highly skilled artist can be one of the best forms of therapy allowing 
                            you to get lost in the music. Good films are important to me for the same reason. A good filmmaker can 
                            transport you into a world they have created and make you feel deep emotion through the power of storytelling. 
                            Video games are my form of escape. With the same effect as a good film but to a higher degree by giving you 
                            control of the protagonist, a good game can transport you to another world and is a great escape from 
                            the crazy world we live in currently. Last but certainly not least, my cat, Aurora, is one of the most 
                            important beings in my life. She is my daughter and I would do anything in the world for her! 
                        </p>

                        {/* Intro Section */}
                        <h3 className="text-primary text-start">Hobbies</h3>
                        <hr className="my-4 border border-primary border-2"/>

                        <img
                            src="src/assets/images/RockClimbingBoone.png"
                            id="about-me-image-1"
                            style={{ maxHeight: '200px'}}
                            className="img-fluid float-end ms-5 mb-3 rounded border border-2 border-primary"
                            alt="Joshua Rock Climbing"
                        />

                        <p className="text-dark">
                            In terms of hobbies, one of my favorite things to do is to go rock climbing! I definitely prefer outdoor rock climbing 
                            but, unfortunately, Clayton isn't really known for their mountains so most of the climbing I do is at an indoor climbing 
                            gym in Raleigh. My dad is my go-to rock climbing partner and it's one of my favorite ways to bond with my dad. When I'm 
                            not rock climbing, I love playing video games. Though I'm not all that good, some of my favorite games are Terraria, Call 
                            of Duty Black Ops 3 Zombies, Minecraft, Valorant, Oxygen Not Included, and Dead Cells. I go through phases of each but those 
                            are the games I definitely play the most! Unfortunately, I don't have as much time to play games as I used to when I was 
                            younger but in the free time that I do get, I love spending it playing games with friends!  
                        </p>

                        <h3 className="text-primary text-start">Important People to Me</h3>
                        <hr className="my-4 border border-primary border-2"/>

                        <div className="row">

                            <div className="col-11 offset-1">
                                
                                <h4 className="text-primary text-start">Family</h4>
                                <hr className="my-4 border border-primary border-2"/>
                                
                                <img
                                    src="src/assets/images/FamilyGraduation.png"
                                    id="about-me-image-1"
                                    style={{ maxHeight: '250px'}}
                                    className="img-fluid float-end ms-5 mb-3 rounded border border-2 border-primary"
                                    alt="Joshua and his family on Graduation Day"
                                />

                                <p className="text-dark">
                                    My family members are some of the most important people in my life. For my early development (through high school) my mother 
                                    was a stay-at-home mom who took care of all of my and my brother's needs. She was the one to help me in elementary 
                                    school when I needed tutoring, the shoulder I always had to cry on, the one I would run to when I had a victory, and 
                                    the one who would listen intently as I rambled on about some game I was obsessed with. I can truly say I wouldn't 
                                    be where I am now without her support. My father is definitely the one I think most like, however. Many times, I would 
                                    find myself in a position where I didn't need as much emotional support, rather needing a logical breakdown of my situation, 
                                    and my father was the one always there, ready to help me solve my problems. From late-night gaming sessions to late-night 
                                    beach trips, my father has always been by my side and I wouldn't be where I am now without his support either. Lastly, there 
                                    is my older brother. He will always and forever be my best friend. He was there for me in ways that my parents couldn't be. He 
                                    had my back when I had issues with people in school. He was there when I just needed to vent. He was there to help me in 
                                    situations that I didn't want to tell my parents about. But most importantly, he was the person whom I could be my most 
                                    authentic self around. And not to sound like a broken record, but, I wouldn't be where I am now without his love and 
                                    support either. All around my family are the most important people in my life and I couldn't imagine my life without them.
                                </p>

                            </div>

                            <div className="col-11 offset-1">
                                
                                <h4 className="text-primary text-start">My Girlfriend</h4>
                                <hr className="my-4 border border-primary border-2"/>
                                
                                <img
                                    src="src/assets/images/AnnaBrunch.png"
                                    id="about-me-image-1"
                                    style={{ maxHeight: '150px'}}
                                    className="img-fluid float-end ms-5 mb-3 rounded border border-2 border-primary"
                                    alt="Joshua and his family on Graduation Day"
                                />

                                <p className="text-dark">
                                    My girlfriend of roughly 2 1/2 years is another major part of my support system. I was lucky enough to meet her in August of 
                                    2022 at ECU and we started dating in February of 2023. She has been with me through thick and thin, celebrating with me in my 
                                    highs and holding me in my lows. She knows me better than anyone and I couldn't imagine my life without her. She is currently 
                                    attending graduate school at UNC and I couldn't be more proud! I can't wait to see where life takes us and my college journey 
                                    simply wouldn't have been the same without her!
                                </p>
                                
                            </div>

                            <div className="col-11 offset-1">
                                
                                <h4 className="text-primary text-start">My Cat</h4>
                                <hr className="my-4 border border-primary border-2"/>
                                
                                <img
                                    src="src/assets/images/Aurora.png"
                                    id="about-me-image-1"
                                    style={{ maxHeight: '100px'}}
                                    className="img-fluid float-end ms-5 mb-3 rounded border border-2 border-primary"
                                    alt="Joshua and his family on Graduation Day"
                                />

                                <p className="text-dark">
                                    Lastly is my cat Aurora. Simply put I didn't know I could love a living being as much as I love Aurora. She's definitely on the 
                                    mischievous side but, if you catch her at a good time, she can be the sweetest cat on the planet! She might get a burst of energy 
                                    and attack your ankles but the scars are worth it when she walks up and sits in your lap half an hour later purring! She is my 
                                    daughter and I would do anything for her!
                                </p>
                                
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AboutMe;