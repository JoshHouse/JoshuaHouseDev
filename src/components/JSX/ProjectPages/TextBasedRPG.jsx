import React from 'react';
import Header from '../Header';

function TextBased( {setPage} ) {

    return (
        
        <div className="w-100 bg-primary-subtle">
            
            <Header setPage={setPage}/>
            
            <div className="container py-4 px-4 my-2 rounded bg-light">
                
                {/* Title */}
                <h1 className="text-primary text-start fw-bold">Text Based Role Playing Game</h1>
                <hr className="my-4 border border-primary border-2"/>

                <div className="row">
                    
                    <div className="col-12">
                        
                        {/* Demo Video */}
                        <div class="float-end me-3 w-50">
                            <video class="w-100 h-auto rounded ms-3 mb-3" controls>
                                <source src="src/assets/videos/TextBasedRPGDemo.mp4" type="video/mp4" />
                                Your browser does not support .mp4 videos
                            </video>
                            <p class="mt-1 text-center text-secondary">
                                <em>*Text Based RPG Demo - Gameplay of the Mage Tutorial, Battle Fuctionality, Hub Functionality, 
                                    Shop Functionality, and Player Profile*</em>
                            </p>
                        </div>
                        
                        {/* Intro Section */}
                        <h2 className="text-primary text-start">Description</h2>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-dark">
                            FoodStop is your one stop shop for finding recipes that suit your needs. 
                            Whether you need to search based on dietary restrictions or different meal 
                            types, our app has you covered. Before you search, simply select the 
                            preferences you need and click search for recipes. Our app, powered by 
                            spoonacular API's vast recipe database, will find recipes that fit your 
                            restrictions and give you many selections to choose from. Not sure what you 
                            are looking for? Try one of our daily suggestions to try something new! If you 
                            have created an account and find a recipe you really like, feel free to hit the 
                            favorite button at the top right of the recipe to save it for next time! Your 
                            favorites are linked to your account for easy access any time you need them! 
                            Your preferences are saved as well for quick and easy recipe searches! Feel free 
                            to take a look through the selections and we hope you find a recipe that knocks 
                            your socks off!
                        </p>
                    
                    </div>
                
                </div>

                <div className="row">

                    <div className="col-12">
                        <h2 className="text-primary text-start">My Contributions</h2>
                        <hr className="my-4 border border-primary border-2"/>

                        <div className="row">

                            <div className="col-6">
                                
                                <h3 className="text-primary text-start">Backend Functionality</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    I coded the backend functionality including creating and updating 
                                    the two databases we locally stored. For our database, we used 
                                    SQLAlchemy to create a User database table to store user emails and 
                                    passwords and a FavoriteRecipe database table to store favorite 
                                    recipe details such as recipe id, user_id to link favortes to the user 
                                    account, title, image, time to cook, and a summary for our favorite 
                                    recipe page. I purposefully did not include the recipe instructions in 
                                    accordance with the terms and conditions of spoonacularAPI, requiring 
                                    a new search if the user wants to view a favorite recipe. The backend 
                                    also handles queries to spoonacular to retrieve recipes based on search 
                                    preferences, user authentication, and page changes using flask's render 
                                    template.
                                </p>

                                <h3 className="text-primary text-start">Front-End JavaScript Functionality</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    I also handled the JavaScript functionality using JQuery that dynamically loads different 
                                    parts of our page, such as the catagory selection and diet selection buttons, 
                                    daily suggestions, user favorites, groupmate information, home page preference 
                                    selections, login page updates, preference selection page updates, recipe responses 
                                    from search queries, and detailed recipe information for a selected recipe.
                                </p>

                                <h3 className="text-primary text-start">Front-End Styling</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    I also handled the styling and functionality of 9 of the 11 pages seen in 
                                    our frontend. They were styled using bootstrap and minor css styling for effects 
                                    not possible with simply bootstrap styling.
                                </p>

                                
                            </div>

                            <div className="col-6">
                                <h3 className="text-primary text-start">Files Written</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    -<strong>ApiInfoPage.html:</strong> <em>Displayed API information.</em> <br />
                                    -<strong>Favorites.html:</strong> <em>Displayed user favorites.</em><br />
                                    -<strong>FoodCatPage.html:</strong> <em>Displayed category options.</em><br />
                                    -<strong>FoodDietPage.html:</strong> <em>Displayed diet options.</em><br />
                                    -<strong>GroupmatePage.html:</strong> <em>Displayed groupmate information.</em><br />
                                    -<strong>HomePage.html:</strong> <em>Displayed home page.</em><br />
                                    -<strong>LoginPage.html:</strong> <em>Displayed login screen.</em><br />
                                    -<strong>RecipeSelect.html:</strong> <em>Displayed recipe options.</em><br />
                                    -<strong>MotivationPage.html:</strong> <em>Displayed our motivation for working on the project.</em><br />
                                    -<strong>CatSelect.js:</strong> <em>Dynamically filled category options page.</em><br />
                                    -<strong>DietSelect.js:</strong> <em>Dynamically filled diet option page.</em><br />
                                    -<strong>Favorites.js:</strong> <em>Dynamically filled user favorites.</em><br />
                                    -<strong>GroupmatePage.js:</strong> <em>Dynamically filled  groupmate information.</em><br />
                                    -<strong>HomePage.js:</strong> <em>Dynamically filled category and diet selection options.</em><br />
                                    -<strong>LoginPage.js:</strong> <em>Changed page state for login functionality.</em><br />
                                    -<strong>preferenceSelect.js:</strong> <em>Dynamically filled category and diet option selection.</em><br />
                                    -<strong>RecipeDetailed.js:</strong> <em>Dynamically filled recipe information.</em><br />
                                    -<strong>RecipeSelect.js:</strong> <em>Dynamically filled recipe options from search.</em><br />
                                    -<strong>DailySuggestions.js:</strong> <em>Dynamically filled daily suggestions</em><br />
                                    -<strong>app.py:</strong> <em>Registered blueprints and handled flask render template changes.</em><br />
                                    -<strong>auth.py:</strong> <em>Handled user registration and authentication.</em><br />
                                    -<strong>BackendUtils.py:</strong> <em>Stored api keys and spoonacular urls.</em><br />
                                    -<strong>favoritedRecipes.py:</strong> <em>Handled reading and writing to the user favorites database.</em><br />
                                    -<strong>models.py:</strong> <em>Stored our 2 database table templates.</em><br />
                                    -<strong>preferences.py:</strong> <em>Handled preference selection tied to user account or through cookies.</em><br />
                                    -<strong>SpoonacularRequest.py:</strong> <em>Made requests to spoonacular API.</em><br />
                                    -<strong>CatDietSelect.css:</strong> <em>Styles Category and Diet Pages.</em><br />
                                    -<strong>General.css:</strong> <em>General Styles.</em><br />
                                    -<strong>HomePage.css:</strong> <em>Styles the home page.</em><br />
                                    -<strong>LoginPage.css:</strong> <em>Styles the login page.</em><br />
                                    -<strong>MotivationPage.css:</strong> <em>Styles the motivation page.</em><br />
                                    -<strong>preferenceSelect.css:</strong> <em>Styles the preference selection page.</em><br />
                                    -<strong>RecipeDetailed.css:</strong> <em>Styles the recipe info page.</em><br />
                                    -<strong>RecipeSelect.css:</strong> <em>Styles the recipe selection page.</em><br />
                                    -<strong>TopAndBottom.css:</strong> <em>Styles the header and footer attached to each page.</em><br />
                                </p>
                            </div>

                                

                        </div>

                    </div>

                    <div className="col-12">
                        <h2 className="text-primary text-start">Skills Developed</h2>
                        <hr className="my-4 border border-primary border-2"/>
                    </div>
                    
                    <div className="col-11 offset-1">
                        
                        <h3 className="text-primary text-start">Bootstrap Web Development</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            For our Foodstop project, we used bootstrap for the majority of our page 
                            styling. Through our 11 different pages, we wrote most of the styling using 
                            bootstraps class name system, only using CSS styles when required for specific 
                            styling details, background images, and animation/hover effects. 
                        </p>

                        <h3 className="text-primary text-start">JQuery Scripting</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            In development of Foodstop, we also used JQuery for all of our webpage 
                            scripting. Jquery was used in all 10 of our javascript files to dynamically 
                            fill information on our webpage such as Spoonacular API responeses and 
                            react to user interaction throughout our webpage.
                        </p>
                    
                        <h3 className="text-primary text-start">Flask Web Development</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            For backend functionality, Foodstop uses Flask. In development, I gained 
                            crucial skills using blueprints, flask-bcrypt for user authentication, Jinja2 
                            templates, sessions, routing, and RESTful JSON responses.
                        </p>

                        <h3 className="text-primary text-start">SQL Databases Through SQLAlchemy</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            A lot of our data for recipes was retireved through Spoonacular API's public 
                            database of recipes but we used SQLAlchemy to create a database for storing 
                            user data and favorite recipes. This involved creating 2 database tables, one 
                            for user data (our "User" table) and another for favorite recipe data (our "FavoriteRecipe" 
                            table). Our User table stored a unique email, hashed password, and optional diet 
                            and category details for saving user preferences. Our FavoriteRecipe table stored 
                            basic information about the the favorited recipe such as title, image url, cooking 
                            time, and summary as well as the id of the recipe and the user_id serving as a foreign 
                            key to the User. We did not save recipe details in accordance with spoonacular's 
                            terms of service, requiring a separate search query to access the recipe instructions. 
                        </p>

                        <h3 className="text-primary text-start">User Authentication Using Flask_Bcrypt</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            For our user accounts, I learned key information on user authentication systems, learing 
                            about hashing passwords for security from database leaks. If I had more time working on 
                            Foodstop, I would have liked to implement a salting system for password protection to ensure 
                            password hashes don't result in the same hash for the same password. 
                        </p>

                        <h3 className="text-primary text-start">Git Version Control</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Throughout development on FoodStop, our team used Git and Github for version control for 
                            streamlined workflow. Prior to this project, I had used Git on multiple occasions so it wasn't 
                            necessarily new to me but development on FoodStop further increased my experience using Git 
                            for version control.
                        </p>

                    </div>

                </div>
            
            </div>

        </div>
    );
}

export default TextBased;