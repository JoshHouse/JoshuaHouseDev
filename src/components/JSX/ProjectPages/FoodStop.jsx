import React from 'react';
import Header from '../Header';


function FoodStop() {

    return (
        
        <div className="w-100 bg-primary-subtle">
            
            <Header />
            
            <div className="container py-4 px-4 my-2 rounded bg-light">
                
                {/* Title */}
                <h1 className="text-primary text-start fw-bold">FoodStop</h1>
                <hr className="my-4 border border-primary border-2"/>

                <div className="row">
                    
                    <div className="col-12">
                        
                        {/* Demo Video */}
                        <div class="float-end me-3 w-50">
                            <div className="ratio ratio-16x9 rounded overflow-hidden m-2">
                                <iframe
                                    className="w-100 h-100"
                                    src="https://www.youtube.com/embed/dLm0U8XlzEU"
                                    title="Dummy2048 Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <p class="mt-1 text-center text-secondary">
                                <em>*FoodStop Demo - Preference Selection, User Authentication, Recipe Selection, and User Favorites*</em>
                            </p>
                        </div>
                        
                        {/* Intro Section */}
                        <h2 className="text-primary text-start">Description</h2>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            FoodStop is your one-stop shop for finding recipes that suit your needs. 
                            Whether you need to search based on dietary restrictions or different meal 
                            types, our app has you covered. Before you search, simply select the 
                            preferences you need and click "Search for recipes". Our app, powered by 
                            <strong> Spoonacular API's</strong> vast recipe database, will find recipes that fit your 
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
                                    I <strong>coded the backend functionality</strong> including creating and updating 
                                    the <strong>two databases we locally stored</strong>. For our database, we used 
                                    <strong> SQLAlchemy</strong> to create a <strong>User database table</strong> to store user emails and 
                                    passwords and a <strong>FavoriteRecipe database table</strong> to store favorite 
                                    recipe details such as recipe id, user_id to link favortes to the user 
                                    account, title, image, time to cook, and a summary for our favorite 
                                    recipe page. I purposefully <strong>did not include</strong> the <strong>recipe instructions</strong> in 
                                    accordance with the <strong>terms and conditions</strong> of <strong>Spoonacular API</strong>, requiring 
                                    a new search if the user wants to view a favorite recipe. The backend 
                                    also handles <strong>queries to Spoonacular</strong> to <strong>retrieve recipes</strong> based on search 
                                    preferences, user authentication, and page changes using <strong>Flask's 
                                    render_template.</strong>
                                </p>

                                <h3 className="text-primary text-start">Front-End JavaScript Functionality</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    I also <strong>handled the JavaScript functionality</strong> using <strong>JQuery </strong> 
                                    that dynamically loads different parts of our page, such as the catagory selection and diet 
                                    selection buttons, daily suggestions, user favorites, groupmate information, home page preference 
                                    selections, login page updates, preference selection page updates, recipe responses 
                                    from search queries, and detailed recipe information for a selected recipe.
                                </p>

                                <h3 className="text-primary text-start">Front-End Styling</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    I also handled the <strong>styling</strong> and functionality of <strong>9 of the 11 pages</strong> seen in 
                                    our frontend. They were styled using <strong>Bootstrap and minor CSS styling</strong> for effects 
                                    not possible with simply Bootstrap styling.
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
                        
                        <h3 className="text-primary text-start">Bootstrap Page Styling</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark"> 
                            For our Foodstop project, <strong>we used Bootstrap for the majority</strong> of our page 
                            styling. Through our <strong>11 different pages</strong>, we wrote <strong>most of the styling</strong> using 
                            Bootstrap's class name system, only using CSS styles when required for specific 
                            styling details, <strong>background images</strong>, and <strong>animation/hover effects</strong>. 
                        </p>

                        <h3 className="text-primary text-start">JQuery Scripting</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            In the development of Foodstop, we also <strong>used jQuery</strong> for <strong>all of our webpage 
                            scripting.</strong> JQuery was used in <strong>all 10 of our JavaScript files</strong> to dynamically 
                            fill information on our webpage such as Spoonacular API responses and 
                            react to user interaction throughout our webpage.
                        </p>
                    
                        <h3 className="text-primary text-start">Flask Web Development</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            For backend functionality, <strong>Foodstop uses Flask</strong>. In development, I gained 
                            crucial skills using <strong>blueprints</strong>, <strong>Flask-Bcrypt for user authentication</strong>, <strong>Jinja2 
                            templates</strong>, <strong>sessions</strong>, <strong>routing</strong>, and <strong>RESTful JSON responses</strong>.
                        </p>

                        <h3 className="text-primary text-start">SQLAlchemy for SQL Databases</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            A lot of our data for recipes was retrieved through <strong>Spoonacular API's public 
                            database of recipes</strong> but we <strong>used SQLAlchemy</strong> to create a database for <strong>storing 
                            user data and favorite recipes</strong>. This involved <strong>creating 2 database tables</strong>, one 
                            for <strong>user data</strong> (our "User" table) and another for <strong>favorite recipe data</strong> (our "FavoriteRecipe" 
                            table). Our User table stores a unique email, hashed password, and optional diet 
                            and category details for saving user preferences. Our FavoriteRecipe table stored 
                            basic information about the favorite recipe such as title, image url, cooking 
                            time, and summary as well as the ID of the recipe and the user ID serving as a foreign 
                            key to the User. We <strong>did not save recipe details</strong> in accordance with <strong>Spoonacular's 
                            terms of service</strong>, requiring a separate search query to access the recipe instructions. 
                        </p>

                        <h3 className="text-primary text-start">User Authentication Using Flask_Bcrypt</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            For our user accounts, I learned key information on <strong>user authentication systems</strong>, learning 
                            about <strong>hashing passwords</strong> for <strong>security from database leaks</strong>. If I had more time working on 
                            Foodstop, I <strong>would have liked to implement a salting algorithm</strong> for password protection to ensure 
                            password hashes don't result in the same hash for the same password. 
                        </p>

                        <h3 className="text-primary text-start">Git Version Control</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Throughout development on FoodStop, our team <strong>used Git and GitHub</strong> for version control for a
                            streamlined workflow. Prior to this project, I had used Git on multiple occasions so it wasn't 
                            necessarily new to me but development on FoodStop <strong>further increased my experience using Git </strong> 
                            for version control.
                        </p>

                    </div>

                </div>
            
            </div>

        </div>
    );
}

export default FoodStop;