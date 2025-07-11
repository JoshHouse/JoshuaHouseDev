import React from 'react';
import Header from './Header';

function History( {setPage} ) {

    return (
        
        <div className="w-100 bg-primary-subtle">
            
            <Header setPage={setPage}/>
            
            <div className="container py-4 px-4 my-2 rounded bg-light">

                {/* Title */}
                <h1 className="text-primary text-start fw-bold">
                    Professional History
                </h1>
                <hr className="my-4 border border-primary border-2"/>

                {/* Work History Section */}
                <h2 className="text-primary text-start fw-bold">
                    Work History
                </h2>
                <hr className="my-4 border border-primary border-2"/>

                <div className="row">
                    
                    {/* Campus Living Subheading */}
                    <div className="col-11 offset-1">
                        
                        <h3 className="text-primary text-start fw-bold">
                            East Carolina University Campus Living
                        </h3>
                        <hr className="my-4 border border-primary border-2"/>

                    </div>

                    {/* Campus Living Content */}
                    <div className="col-10 offset-2">
                        
                        <h4 className="text-dark text-start fw-bold">
                            Campus Living Representitive - Neighborhood Service Office
                        </h4>
                        
                        <p className="text-secondary fst-italic">
                            August 5th, 2024 - May 9th, 2025
                        </p>

                        {/* Responsibilities Subheading */}
                        <h5 className="text-dark fw-bold">
                            Responsibilities:
                        </h5>

                        <p className="text-dark">
                            - Provided excellent customer service by responding to resident 
                            inquiries and addressing concerns promptly and professionally <br />
                            - Conducted routine room inspections to ensure compliance with 
                            university housing policies <br />
                            - Facilitated room changes and maintained accurate records of 
                            resident assignments <br />
                            - Issued and tracked loaner items including keys, ECU OneCards, 
                            sports equipment (e.g., basketballs, volleyballs), and moving 
                            carts <br />
                            - Managed the organization and integrity of key inventory, 
                            ensuring all keys were stored and accounted for in designated 
                            drawers <br />
                            - Issued temporary parking passes and verified eligibility as 
                            needed <br />
                            - Received, sorted, and distributed resident mail and packages 
                            in an organized and timely manner <br />
                            - Supported move-in operations by distributing room keys and 
                            providing information to new residents <br />
                            - Processed and validated returned keys during move-out to ensure 
                            accurate check-out records <br />
                        </p>

                        {/* Notable Achievements Subheading */}
                        <h5 className="text-dark fw-bold">
                            Notable Achievements:
                        </h5>

                        <p className="text-dark">
                            - Achieved Employee of the month for December 2024 as voted by 
                            my peers <br />
                            <b>Quotes by peers:</b> <br />
                            - <em>"He has shown a lot of accountability, eager to work, and always 
                            wants to learn something new. He has been an amazing edition!" </em> <br />
                            - <em>"Josh is consistent and on time. He gets along with everyone. 
                            He does his job efficiently and he stands up for people who 
                            cannot stand up for themselves."</em> <br />
                            - <em>"Josh is one of the hardest working new staff. He always asks 
                            questions and is always down to help others if needed"</em><br />
                            - <em>"Josh is a hard worker and is eager to learn! He is also very 
                            personable."</em> <br />
                        </p>

                        {/* Reason for leaving Subheading */}
                        <h5 className="text-dark fw-bold">
                            Reason for Leaving:
                        </h5>
                        
                        <p className="text-dark">
                            - I concluded my studies at East Carolina University and as per 
                            ECU Campus Living policy, only current students are allowed to 
                            maintain a position at the Neighborhood Service Office.
                        </p>

                    </div>

                    {/* Walmart Subheading */}
                    <div className="col-11 offset-1">
                        
                        <h3 className="text-primary text-start fw-bold">
                            Walmart
                        </h3>
                        <hr className="my-4 border border-primary border-2"/>

                    </div>

                    {/* Walmart Content */}
                    <div className="col-10 offset-2">
                        
                        <h4 className="text-dark text-start fw-bold">
                            Meat and Produce Sales Associate
                        </h4>
                        
                        <p className="text-secondary fst-italic">
                            June, 2024 - July, 2024
                        </p>

                        {/* Responsibilities Subheading */}
                        <h5 className="text-dark fw-bold">
                            Responsibilities:
                        </h5>

                        <p className="text-dark">
                            - Maintained cleanliness and organization of the meat and produce 
                            sections to ensure compliance with health and safety standards <br />
                            - Restocked shelves regularly to ensure product availability and 
                            optimal presentation <br />
                            - Assisted customers with locating products, answering questions, 
                            and providing friendly, effective service <br />
                            - Conducted inventory scanning and tracking in the backroom to 
                            support accurate stock levels and inventory management <br />
                            - Ensured the backroom remained clean, orderly, and free of safety 
                            hazards <br />
                        </p>

                        {/* Notable Achievements Subheading */}
                        <h5 className="text-dark fw-bold">
                            Notable Achievements:
                        </h5>
                        
                        <p className="text-dark">
                            - Was applauded by managers upon departing, stating <em>"If all 
                            Walmart employees worked as hard as you did, we wouldn't 
                            have any issues."</em>
                        </p>

                        {/* Reason for leaving Subheading */}
                        <h5 className="text-dark fw-bold">
                            Reason for Leaving:
                        </h5>
                        
                        <p className="text-dark">
                            - I left my position to resume my studies for my final year of 
                            college as well as beginning my new position at the East Carolina 
                            University Neighborhood Service Office.
                        </p>

                    </div>

                    {/* Wilsons Leather Subheading */}
                    <div className="col-11 offset-1">
                        
                        <h3 className="text-primary text-start fw-bold">
                            Wilsons Leather
                        </h3>
                        <hr className="my-4 border border-primary border-2"/>

                    </div>

                    {/* Wilsons Leather Content */}
                    <div className="col-10 offset-2">
                        
                        <h4 className="text-dark text-start fw-bold">
                            Sales Associate
                        </h4>
                        
                        <p className="text-secondary fst-italic">
                            June, 2020 - December, 2020
                        </p>

                        {/* Responsibilities Subheading */}
                        <h5 className="text-dark fw-bold">
                            Responsibilities:
                        </h5>

                        <p className="text-dark">
                            - Maintained product organization and store cleanliness <br />
                            - Assisted customers with locating products, answering questions, 
                            and providing friendly, effective service <br />
                            - Processed customer transactions <br />
                            - Ensured products were tagged for anti-theft regulations <br />
                        </p>

                        {/* Notable Achievements Subheading */}
                        <h5 className="text-dark fw-bold">
                            Notable Achievements:
                        </h5>
                        
                        <p className="text-dark">
                            - Commended by numerous customers for the quality and 
                            friendliness of customer service
                        </p>

                        {/* Reason for leaving Subheading */}
                        <h5 className="text-dark fw-bold">
                            Reason for Leaving:
                        </h5>
                        
                        <p className="text-dark">
                            - G-III Apparel Group closed all physical Wilson's Leather 
                            locations transitioning to an online format.
                        </p>

                    </div>
                
                </div>

                {/* Education History Section */}
                <h2 className="text-primary text-start fw-bold">
                    East Carolina University Education History
                </h2>
                <hr className="my-4 border border-primary border-2"/>

                <div className="row">
                    
                    
                    <div className="col-11 offset-1">
                        
                        {/* Spring 2025 - Subheading */}
                        <h3 className="text-primary text-start fw-bold">
                            Spring Semester 2025
                        </h3>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-secondary fst-italic">
                            January, 2025 - May, 2025
                        </p>

                    </div>
                    
                    <div className="col-10 offset-2">
                        
                        {/* Spring 2025 - Term Statistics */}
                        <h5 className="text-dark fw-bold">
                            Term Statistics 
                        </h5>

                        <p className="text-dark">
                            - <u>Credit Hours:</u> <strong>19</strong> <br />
                            - <u>Term GPA:</u> <strong>3.89</strong> <br />
                            - <u>Aditional Standing:</u> <strong>Dean's List</strong>
                        </p>

                        {/* Spring 2025 - Couses Taken */}
                        <h5 className="text-dark fw-bold">
                            Computer Science Courses Taken
                        </h5>

                        <p className="text-dark">
                            - <u>Artificial Intelligence:</u> <strong>A</strong> <br />
                            - <u>Web Applications:</u> <strong>A</strong> <br />
                            - <u>Computer Graphics:</u> <strong>A</strong> <br />
                            - <u>Computer Architecture:</u> <strong>B+</strong> <br />
                            - <u>Software Engineering II & Lab:</u> <strong>A</strong> <br />
                            - <u>Computer Game Development II:</u> <strong>A</strong> <br />
                            - <u>Ethical & Professional Issues in CSCI:</u> <strong>A</strong>
                        </p>

                        {/* Spring 2025 - Notable Projects */}
                        <h5 className="text-dark fw-bold">
                            Notable Projects
                        </h5>

                        <p className="text-dark">
                            - <strong>Velocity Trials:</strong> A momentum-based parkour videogame 
                            developed with my Computer Game Development II group. For this game, 
                            I developed all of the movement code (resulting in around 1800 lines 
                            of movement code) including walking, running, crouching, sliding, wall 
                            climbing, wall running, wall jumping, mantling, and grappling (both a 
                            pull grapple and a swing grapple). I also implemented animation code 
                            to play custom-made animations for the player model I created for our 
                            game as my Computer Graphics final project. <br />
                            <br />
                            - <strong>Dummy 2048 player model:</strong> This project served as my 
                            final project for Computer Graphics. For this, I created a player model 
                            and 17 custom animations for my Computer Game Development II final project 
                            using Blender. For this, I had to do research outside of class to learn about 
                            Blender's rigging system and animation techniques. <br />
                            <br />
                            - <strong>Weather Group Joseph - Weather Dashboard:</strong> This was our 
                            semester-long Software Engineering project in which we coded a webpage using 
                            React and Flask to create an interactive weather dashboard. For this project, 
                            I created our backend directory to host multiple endpoints called by our 
                            frontend directory to make calls to Open Weather's API for current weather 
                            statistics. I also developed all of the frontend design ensuring a polished 
                            final product. I was also responsible for the management of the Confluence and 
                            Jira pages for weekly updates to our professor on the progress we made during 
                            development and I led our weekly presentations of the progress we made during 
                            the previous week. In the end, our product supported geolocation tracking, 
                            location searching, 5-day and 7-day weather forecasts, and an interactive map 
                            for location searching supported by Google's Maps API. <br />
                            <br />
                            - <strong>FoodStop:</strong> This was a recipe browser my group created for our 
                            Web Applications course supported by Spoonacular's API. This project was created 
                            using React, Bootstrap, jQuery, and SQLAlchemy. I developed the backend directory 
                            which made calls to Spoonacular API's recipe databases as well as supported 
                            our user authentication system. I also developed 9 of our 11 frontend pages and 
                            implemented the functionality to allow searching for recipes. Developing the backend, 
                            I also implemented the ability to store user accounts in our database, allowing users 
                            to favorite recipes and save search preferences. If the user was not logged in, I 
                            implemented saving preferences via cookies attached to the browser. The final product 
                            we delivered allowed users to create an account, save preferences, favorite recipes, 
                            and search for recipes based on meal type and dietary restrictions. <br />
                            <br />
                            - <strong>Raster-Based Renderer:</strong> This was one of the many projects I had 
                            in my Computer Graphics course. For this project, I implemented a raster-based visual 
                            renderer taking a JSON file of coordinates in object space and my renderer performed 
                            the matrix transformations to move those coordinates from object space to world space, 
                            then to camera space, and finally to screen space to be displayed using pygame. <br />
                            <br />
                            - <strong>Ray Tracing Renderer:</strong> This was another project for my computer 
                            graphics course in which we took a JSON file of object dimensions and material properties 
                            and casted rays from each pixel of the screen, bouncing between objects to calculate 
                            the accurate color of each pixel on the screen accounting for reflections, shadows, 
                            transparency, and other enviornmental effects that apply to objects in a given scene.
                        </p>
                    
                    </div>



                    <div className="col-11 offset-1">

                        {/* Fall 2024 - Subheading */}
                        <h3 className="text-primary text-start fw-bold">
                            Fall Semester 2024
                        </h3>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-secondary fst-italic">
                            August, 2024 - December, 2024
                        </p>

                    </div>
                    
                    <div className="col-10 offset-2">

                        {/* Fall 2024 - Term Statistics */}
                        <h5 className="text-dark fw-bold">
                            Term Statistics 
                        </h5>

                        <p className="text-dark">
                            - <u>Credit Hours:</u> <strong>15</strong> <br />
                            - <u>Term GPA:</u> <strong>3.74</strong> <br />
                            - <u>Aditional Standing:</u> <strong>Dean's List</strong>
                        </p>

                        {/* Fall 2024 - Couses Taken */}
                        <h5 className="text-dark fw-bold">
                            Computer Science Courses Taken
                        </h5>

                        <p className="text-dark">
                            - <u>Software Engineering I:</u> <strong>A</strong> <br />
                            - <u>Computer Game Development I:</u> <strong>B</strong> <br />
                            - <u>Database Management Systems:</u> <strong>A-</strong> <br />
                            - <u>Automata, Computability, and Complexity:</u> <strong>A</strong>
                        </p>

                        {/* Fall 2024 - Notable Projects */}
                        <h5 className="text-dark fw-bold">
                            Notable Projects
                        </h5>

                        <p className="text-dark">
                            - <strong>Text-Based RPG:</strong> This was a project I developed with 
                            my group for our Software Engineering II course in which we created a 
                            text-based role playing game entirely through Java's class heirarchy 
                            system and object-oriented programming. The main idea for this project 
                            was to use no outside sources to create a game entirely playable 
                            through the terminal. Our game, consisting of over 10,000 lines of code, 
                            was a narrative adventure game with 4 playable classes, each with separate 
                            storylines, adventures, and weapons, and 4 chapters of a narrative story which 
                            provided hours of gameplay for one playthrough. We implemented a battle system, hub 
                            areas, shops, and adventure missions specific to each class. In this project, 
                            I developed the mage class path, the shop functionality, the battle functionality, 
                            and the final chapter of the game. Though the game might have been more accessible 
                            in a window format rather than the terminal, the restriction to strictly Java 
                            classes for all development provided for an interesting challenge when development.
                        </p>

                        {/* Fall 2024 - Notable Achievements */}
                        <h5 className="text-dark fw-bold">
                            Notable Achievements
                        </h5>

                        <p className="text-dark">
                            - <strong>Unofficial Tutoring:</strong> While taking Automata, Computability, 
                            and Complexity, known as one of the hardest courses in East Carolina University's 
                            computer science track by students, I was particularly good at understanding 
                            the abstract concepts taught in this course. We had 4 quizzes in total and after 
                            receiving a 100 on the first quiz, one of my peers asked if I had a study group. I 
                            offered to help him, in turn starting a study group. As the semester progressed, 
                            this group slowly grew until 7 of the 40 students in the class (17% of the class) 
                            were attending my study group. I prepared for these meetings beforehand and would 
                            re-teach the concepts to the group in a way that made intuitive sense to me. This 
                            helped many students who were getting 40s on these quizzes and allowed them to 
                            recieve high As and in multiple cases, 100s. I also recieved compliments from 
                            multiple members on my teaching style with some going as far as to say 
                            "I wish you could teach this course. It would make it so much easier." Though this 
                            was not an official tutoring position, it was a great experience to prepare teaching 
                            materials and watch my peers drastically improve and get the grades I knew they were 
                            capable of.
                        </p>

                    </div>



                    <div className="col-11 offset-1">

                        {/* Spring 2024 - Subheading */}
                        <h3 className="text-primary text-start fw-bold">
                            Spring Semester 2024
                        </h3>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-secondary fst-italic">
                            January, 2024 - May, 2024
                        </p>

                    </div>
                    
                    <div className="col-10 offset-2">

                        {/* Spring 2024 - Term Statistics */}
                        <h5 className="text-dark fw-bold">
                            Term Statistics 
                        </h5>

                        <p className="text-dark">
                            - <u>Credit Hours:</u> <strong>13</strong> <br />
                            - <u>Term GPA:</u> <strong>2.915</strong> <br />
                        </p>

                        {/* Spring 2024 - Couses Taken */}
                        <h5 className="text-dark fw-bold">
                            Computer Science Courses Taken
                        </h5>

                        <p className="text-dark">
                            - <u>Operating Systems:</u> <strong>C-</strong> <br />
                            - <u>Computer Networks:</u> <strong>B+</strong> <br />
                            - <u>Design and Analysis of Algorithms:</u> <strong>C+</strong>
                        </p>

                    </div>



                    <div className="col-11 offset-1">

                        {/* Fall 2023 - Subheading */}
                        <h3 className="text-primary text-start fw-bold">
                            Fall Semester 2023
                        </h3>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-secondary fst-italic">
                            August, 2023 - December, 2023
                        </p>

                    </div>
                    
                    <div className="col-10 offset-2">

                        {/* Fall 2023 - Term Statistics */}
                        <h5 className="text-dark fw-bold">
                            Term Statistics 
                        </h5>

                        <p className="text-dark">
                            - <u>Credit Hours:</u> <strong>13</strong> <br />
                            - <u>Term GPA:</u> <strong>3.09</strong> <br />
                            - <u>Aditional Standing:</u> <strong>Honor Roll</strong>
                        </p>

                        {/* Fall 2023 - Couses Taken */}
                        <h5 className="text-dark fw-bold">
                            Computer Science Courses Taken
                        </h5>

                        <p className="text-dark">
                            - <u>Digital Logic Design:</u> <strong>B-</strong> <br />
                            - <u>Computational Linear Algebra:</u> <strong>B+</strong> <br />
                            - <u>Principles of Programming Languages:</u> <strong>B+</strong>
                        </p>

                    </div>



                    <div className="col-11 offset-1">
                        
                        {/* Spring 2023 - Subheading */}
                        <h3 className="text-primary text-start fw-bold">
                            Spring Semester 2023
                        </h3>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-secondary fst-italic">
                            January, 2023 - May, 2023
                        </p>
                    
                    </div>
                    
                    <div className="col-10 offset-2">

                        {/* Spring 2023 - Term Statistics */}
                        <h5 className="text-dark fw-bold">
                            Term Statistics 
                        </h5>

                        <p className="text-dark">
                            - <u>Credit Hours:</u> <strong>16</strong> <br />
                            - <u>Term GPA:</u> <strong>3.28</strong> <br />
                            - <u>Aditional Standing:</u> <strong>Honor Roll</strong>
                        </p>

                        {/* Spring 2023 - Couses Taken */}
                        <h5 className="text-dark fw-bold">
                            Computer Science Courses Taken
                        </h5>

                        <p className="text-dark">
                            - <u>Discrete Structures II:</u> <strong>B-</strong> <br />
                            - <u>Data Abstraction and Object Oriented Data Structures:</u> <strong>B+</strong> <br />
                            - <u>Calculus for the Life Sciences:</u> <strong>B</strong> <br />
                        </p>

                    </div>



                    <div className="col-11 offset-1">

                        {/* Fall 2022 - Subheading */}
                        <h3 className="text-primary text-start fw-bold">
                            Fall Semester 2022
                        </h3>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-secondary fst-italic">
                            August, 2022 - December, 2022
                        </p>

                    </div>
                    
                    <div className="col-10 offset-2">

                        {/* Fall 2022 - Term Statistics */}
                        <h5 className="text-dark fw-bold">
                            Term Statistics 
                        </h5>

                        <p className="text-dark">
                            - <u>Credit Hours:</u> <strong>15</strong> <br />
                            - <u>Term GPA:</u> <strong>3.28</strong> <br />
                            - <u>Aditional Standing:</u> <strong>Honor Roll</strong>
                        </p>

                        {/* Fall 2022 - Couses Taken */}
                        <h5 className="text-dark fw-bold">
                            Computer Science Courses Taken
                        </h5>

                        <p className="text-dark">
                            - <u>Algorithms and Data Structures:</u> <strong>B</strong> <br />
                            - <u>Elementary Statistical Methods I:</u> <strong>A-</strong>
                        </p>

                    </div>



                    <div className="col-11 offset-1">

                        {/* Spring 2022 - Subheading */}
                        <h3 className="text-primary text-start fw-bold">
                            Spring Semester 2022
                        </h3>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-secondary fst-italic">
                            January, 2022 - May, 2022
                        </p>

                    </div>
                    
                    <div className="col-10 offset-2">

                        {/* Spring 2022 - Term Statistics */}
                        <h5 className="text-dark fw-bold">
                            Term Statistics 
                        </h5>

                        <p className="text-dark">
                            - <u>Credit Hours:</u> <strong>13</strong> <br />
                            - <u>Term GPA:</u> <strong>3.77</strong> <br />
                            - <u>Aditional Standing:</u> <strong>Deans List</strong>
                        </p>

                        {/* Spring 2022 - Couses Taken */}
                        <h5 className="text-dark fw-bold">
                            Computer Science Courses Taken
                        </h5>

                        <p className="text-dark">
                            - <u>Algorithmic Problem Solving/Lab:</u> <strong>A</strong> <br />
                            - <u>Discrete Structures I:</u> <strong>B</strong>
                        </p>

                    </div>



                    <div className="col-11 offset-1">

                        {/* Fall 2021 - Subheading */}
                        <h3 className="text-primary text-start fw-bold">
                            Fall Semester 2021
                        </h3>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-secondary fst-italic">
                            August, 2021 - December, 2021
                        </p>

                    </div>
                    
                    <div className="col-10 offset-2">

                        {/* Fall 2021 - Term Statistics */}
                        <h5 className="text-dark fw-bold">
                            Term Statistics 
                        </h5>

                        <p className="text-dark">
                            - <u>Credit Hours:</u> <strong>15</strong> <br />
                            - <u>Term GPA:</u> <strong>3.48</strong> <br />
                            - <u>Aditional Standing:</u> <strong>Honor Roll</strong>
                        </p>

                    </div>

                </div>
            </div>
        
        </div>
    
    );
}

export default History;