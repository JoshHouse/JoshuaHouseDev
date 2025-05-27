import React from 'react';
import Header from './Header';
import '../CSS/AboutMe.css';

function AboutMe( {setPage} ) {

    return (
        <div className="w-100 bg-light">
            <Header setPage={setPage}/>

            <div className="container py-4 bg-light">
                <h1 className="text-primary text-start fw-bold">About Me</h1>
                <hr className="my-4 border border-primary border-2"/>

                <div className="row">
                    <div className="col-12">
                        <img
                            src="src/assets/JoshuaHouseHeadshot.jpeg"
                            id="about-me-image-1"
                            className="img-fluid float-end ms-5 mb-3 rounded border border-2 border-primary"
                            alt="Joshua House Headshot"
                        />
                        <h2 className="text-primary text-start">Intro</h2>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-dark">
                            Hello! My name is Joshua House! It's great to see that you are 
                            interested in learning more about me. As a small introduction to who
                            I am, I am an East Carolina University graduate where I earned my 
                            Bachelor's degree in Computer Science and completed a certificate 
                            program in Computer Game Development. I have always had an interest 
                            in computers, mathematics, and video games, being glued to computers 
                            from a young age. Pursuing my degree however, has only furthered my 
                            interest in these topics and has caused me to develop into a lifelong 
                            learner who is open and excited to learn about any and all concepts in 
                            tech. From computer graphics to backend systems, the inner workings of 
                            how our online world communicates will never grow boring. With the 
                            innovation of Artificial Intelligence, and as we better learn how to use this 
                            tool, I hope to be a part of the frontier of innovators that turns the 
                            world upside down! 
                        </p>
                        
                        <h2 className="text-primary text-start">Why Tech?</h2>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-dark">
                            My interest in technology was sparked by my father. My father has been working as a backend 
                            developer at SAS for roughly 32 years so I was raised around technology for my entire life. 
                            Being raised around someone who was up-to-date with the latest trends in the tech world taught 
                            me how to solve real-world problems using different functionality that technology provides. 
                            Although his influence started me on my journey into tech, many other factors in my developmental 
                            years further solidified my interest in this field. One such influence was a coding camp hosted 
                            by my middle school as a summer program. In this camp, I learned how to code a very 
                            basic two-player game on a Raspberry Pi. This was my first introduction to coding 
                            as a whole and that introduction stuck with me as I pursued my degree. 
                            Mathematics also served as a strongsuite of mine and I always considered myself 
                            to have a logistical mind. Videogames also defined my childhood from a young age, 
                            starting my exploration into computers on our family computer, a 2005 iMac G5. Considering 
                            my comfort with using computers, my logistical mind, and my background in coding, Computer 
                            Science seemed like a logical choice!
                        </p>

                        <h2 className="text-primary text-start">My Passion</h2>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-dark">
                            Relating to my Intro, I truly consider myself passionate about all topics in tech. One of my 
                            biggest passions regarding this field is the problem-solving aspect of any given problem. It is almost 
                            guaranteed that any problem you face has a solution somewhere and it is simply a matter of finding it! 
                            A passion of mine that stands out beyond the rest however is my passion for Computer Game Design! Possibly 
                            due, in part, to my addiction to videogames from a young age, my skills in spacial awareness have given me 
                            a keen ability to visualize how different systems will interact in a virtual 2D or 3D environment which 
                            plays a large role in developing videogames. My passion for this niche of development doesn't solely stem 
                            from my unique ability to visualize environments while developing, however. One of the main draws for me 
                            towards game development comes from the absolute freedom of artistic expression that comes from what is 
                            essentially the most limitless sandbox ever created. Any scene, gameplay element, or artistic piece that you 
                            can imagine can be created with the right amount of knowledge and dedication to the project! I would love to 
                            be able to create a virtual experience that can have the same profound impact on the future generations that 
                            the classics like Minecraft, Roblox, Call of Duty, or any of the other classic names in gaming had on me 
                            growing up! Though I can say that my passion lies in game development above others, I can truly say that 
                            I have a passion for development as a whole, no matter the topic. In terms of career paths, I might end up 
                            settling down in another position that I find passion in that isn't game development, but I believe that 
                            my passion for game development will always find a way to express itself. Even if that ends up being an 
                            indie project I develop outside of working hours!
                        </p>

                        <h2 className="text-primary text-start">My Journey</h2>
                        <hr className="my-4 border border-primary border-2"/>

                        <div className="row">
                            <div className="col-11 offset-1">
                                <h4 className="text-primary text-start">My Struggles</h4>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    Though I am aware that most of the people reviewing my page will be on the hiring teams for various companies and some 
                                    of the things I discuss here might paint me in somewhat of a negative light, I feel that to understand the progress I have made, 
                                    you must understand where I am coming from. So I ask that if you have the time and you begin reading this section, that you read 
                                    it in its entirety. I promise that it gets better as you read! My biggest struggle throughout high school and the first three years 
                                    of college was undiagnosed ADHD. I feel as though I largely wasted my first three years of college purely due to a lack of focus. I 
                                    struggled with an unhealthy addiction to marijuana, which, I found out from my primary healthcare provider, is a common coping 
                                    mechanism for undiagnosed ADHD patients as it slows down their racing minds. This unhealthy addiction resulted in me living in 
                                    what can only be described as a haze. I put in the work that was necessary to complete assignments but I would never 
                                    take the time to properly learn the topics I was being taught. My motto throughout this period was "Computer Science is the 
                                    degree for smart underachievers." I knew that I was smart enough to comprehend the topics I was being taught but I simply 
                                    could not muster up the motivation to put any real effort into learning them. This period of my life was largely fueled by a 
                                    low sense of self-worth and thinking of myself as either lazy or dumb. I wondered why I felt like in some senses I was 
                                    smarter than some of my peers but was unable to do something as simple as put in the effort to learn the topics I knew I was 
                                    capable of understanding. Throughout those first 3 years, I made decent grades. I didn't fail any of my classes, and entering my 
                                    senior year, I had a 3.33 GPA so I wasn't crashing and burning in any sense, but I can say that I wasn't retaining information the 
                                    way a sober and focused student would have been. Little did I know that a simple diagnosis going into my senior year would validate 
                                    my suspicion that I was always capable of learning these topics. I just needed this mental barricade removed.
                                </p>
                            </div>
                            
                            <div className="col-11 offset-1">
                                <h4 className="text-primary text-start">Bouncing Back</h4>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    Throughout my junior year summer, I was struggling with mental health issues and knew that something needed to change. 
                                    I talked to my doctor about my mental health and, in talking with her, she brought up the possibility of me having ADHD. After 
                                    taking the necessary tests, she determined that I did have a learning disability and put me on medication. With this medication 
                                    and quitting my marijuana use (I'm proud to say 1 year sober at this point) I can definitively say that this was the turning 
                                    point for me. The semester that followed my diagnosis, I took 15 credit hours and ended with a semester GPA of 3.74 which 
                                    was a noticeable improvement from previous semesters. Through this semester, I (unofficially) tutored 7 different people 
                                    for Automata, Computability, and Complexity and worked with 4 other students to develop a text-based RPG videogame entirely 
                                    ran through the terminal made purely from Java's Object-Oriented Class Hierarchy, resulting in over 10,000 lines of code. 
                                    This RPG game was packed with functionality, having 4 different class paths with different storylines for each, a battle system, 
                                    shops, hub areas, and 4 different chapters to the story. We were so proud of the project that when it came time to present, we were 
                                    instructed to give a 5-minute presentation and, before we knew it, our instructor was telling us that we had gone 15 minutes over 
                                    our time and that we needed to wrap up our presentation quickly! If you want to learn more about the project, it is linked 
                                    in the "My Projects" section. 
                                </p>
                            </div>

                            <div className="col-11 offset-1">
                                <h4 className="text-primary text-start">Thriving</h4>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    I am happy to report that it gets better from there. My next semester, I took on an even larger course 
                                    load with 19 credit hours of purely senior and graduate level Computer Science courses. Despite the significantly larger course load, 
                                    I managed to achieve an even higher semester GPA of 3.89. During this semester, I learned how to use many different systems including 
                                    React, Vite, Bootstrap, jQuery, Confluence, Jira, APIs (both creating and calling), databases, graphics techniques (such as ray-tracing, 
                                    raster-based rendering, shaders, animation, etc.), and others. I worked on many different projects like a weather dashboard, a recipe browser, 
                                    a ray-tracer, a raster-based renderer, and, probably my favorite of all, a momentum-based parkour game called Velocity Trials. 
                                    To learn the concepts that I have in the past year no doubt took a lot of time. As a frame of reference, in the first semester of 
                                    my senior year, I primarily used the Libraries study rooms and, out of curiosity, one day, roughly a month before the end of the 
                                    semester, I decided to add up all of the hours of study room reservations I had made since the beginning of the semester. In total, 
                                    I had spent 280 hours in study rooms! At this point, I was tired of reserving study rooms and found a table in the library that was 
                                    out of the way enough that people rarely went there so, unfortunately, I don't have a definitive time spent for my second semester, 
                                    but, that gives you a general idea! All-in-all, I am extremely proud of the progress I have made in a relatively short amount of time 
                                    and I'm excited to see the progress I continue to make wherever life takes me!
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