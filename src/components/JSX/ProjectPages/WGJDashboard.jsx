import React from 'react';
import Header from '../Header';

function WGJDashboard( {setPage} ) {

    return (
        
        <div className="w-100 bg-primary-subtle">
            
            <Header setPage={setPage}/>
            
            <div className="container py-4 px-4 my-2 rounded bg-light">
                
                {/* Title */}
                <h1 className="text-primary text-start fw-bold">Weather Group Joseph - Weather Dashboard</h1>
                <hr className="my-4 border border-primary border-2"/>

                <div className="row">
                    
                    <div className="col-12">
                        
                        {/* Demo Video */}
                        <div class="float-end me-3 w-50">
                            <video class="w-100 h-auto rounded ms-3 mb-3" controls>
                                <source src="src/assets/videos/WGJDashboardDemo.mp4" type="video/mp4" />
                                Your browser does not support .mp4 videos
                            </video>
                            <p class="mt-1 text-center text-secondary">
                                <em>*WGJ Dashboard Demo - Demo displaying our OpenWeather API and Google Maps API 
                                    integration into our interactive weather dashboard with themes, unit conversion, 
                                    and geolocation tracking for user location weather data*</em>
                            </p>
                        </div>
                        
                        {/* Intro Section */}
                        <h2 className="text-primary text-start">Description</h2>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-dark">
                            Weather Group Joseph's Weather Dashboard is a site built for the sole purpose 
                            of displaying all of your weather information needs. From your locations weather 
                            to any location across the world, our weather dashboard has you covered! Supported 
                            by OpenWeather API, our dashboard gives you up-to-date weather statistics for any 
                            location! Not great with location names? Don't worry, we have you covered there too! 
                            Powered by Google Maps API, we provide an interactive map allowing you to simply click 
                            on the location you are searching for and see the current conditions in that area. Not 
                            native to the US and prefer metric units of measure? We made sure to cover all our bases! 
                            Simply change the units in the settings menu to your prefered unit of measure. No matter 
                            what you need, our weather dashboard is sure to suit your needs!
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
                                    I developed the backend functionality for retrieving all of our weather data 
                                    using flask, flask_cors, and jsonify for RESTful responses. Throughout development, 
                                    I learned about running separate python files as processes on separate ports (although 
                                    using flask's blueprint system would have been better, I didn't learn about that until 
                                    development on FoodStop). I also learned about caching data based on how recent a 
                                    similar search made was. Similarities between searches were determined based on location 
                                    name and coordinate locations depending on the nature of the query. I developed this 
                                    caching system to reduce the number of API calls made seeing as that we were using a free 
                                    OpenWeather API account with a limited number of queries per day. The only portion of the 
                                    backend that I did not personally write was the GoogleMapsAPI.py file which was written by 
                                    one of my groupmates.
                                </p>

                                <h3 className="text-primary text-start">Front-End React Development and Styling</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    I also planned and implemented the majority of the front-end design elements of our 
                                    weather dashboard including initial planning of layout, creation of the react elements, 
                                    and styling of all pages. I implemented the majority of the functionality of each element 
                                    with the exception of the comparison menu and home page map integration. For these pages 
                                    however, I did style all of the elements implemented to ensure a cohesive website design.
                                </p>

                                <h3 className="text-primary text-start">Team Leadership</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    Although my groupmate Joseph was listed as the group leader at the beginning of the project, 
                                    he largely wasn't present for any of our group-based activities and was mostly inactive for 
                                    the development of the project, which lead to me taking over as the leader of our group. In this 
                                    role, I was responsible for deadline management, scheduling of group meetings, and leading our 
                                    weekly presentations on the progress we made over the previous week. Due to a lack of an attendance 
                                    policy by our professor, most weeks I was the only one present to give our presentations but under 
                                    my leadership, development resulted in a finished, polished product that I would be happy to run 
                                    on a server accessable on the web.
                                </p>

                                <h3 className="text-primary text-start">Confluence + Jira Management</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    As the stand-in team lead, I also heald the responsibility of managing our team's Confluence and 
                                    Jira pages, including writing weekly reports, creating demo videos, creating, assigning, and 
                                    managing the Jira issues each team member was responsible for, and creating branches through Jira 
                                    for each Jira issue. As team lead, I also would send out weekly reminders for the team to fill 
                                    out their contribution sections on the weekly report.
                                </p>

                                <h3 className="text-primary text-start">Github Repository Management</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    Further Solidifying my team lead role, I was also responsible for the upkeep of our shared Github 
                                    repository including branch management, performing rollbacks when needed (which was suprisingly 
                                    frequent), and fixing errors implemented when large sections of code were merged onto the main branch.
                                </p>

                                
                            </div>

                            <div className="col-6">
                                <h3 className="text-primary text-start">Files Written</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    -<strong>GetCityName.py</strong> <em>Backend process to convert coordinates to city Names.</em> <br />
                                    -<strong>GetCoordinates.py</strong> <em>Backend process to convert city Names to Coordinates.</em> <br />
                                    -<strong>Main.py</strong> <em>Backend file that started all our files as processes.</em> <br />
                                    -<strong>SavedSearches.py</strong> <em>Backend process to retrieve weather data based on a city name.</em> <br />
                                    -<strong>SavedSearchesLatLon.py</strong> <em>Backend process to retrieve weather data based on coordinates.</em> <br />
                                    -<strong>WeatherForecast.py</strong> <em>Backend process to retrieve weather forecast data based on coordinates.</em> <br />
                                    -<strong>app.js</strong> <em>React component that loaded our page and stored react hooks for settings implementation.</em> <br />
                                    -<strong>ExitButton.js</strong> <em>React component for the home page logo icon</em> <br />
                                    -<strong>Header.js</strong> <em>React component for the header bar with current location weather data.</em> <br />
                                    -<strong>HomePage.js</strong> <em>React component that served as the home page containing the interactive map.</em> <br />
                                    -<strong>SettingsPage.js</strong> <em>React component for the settings page allowing users to change the react hooks stored in app.js.</em> <br />
                                    -<strong>Sidebar.js</strong> <em>React component for the sidebar navigation menu.</em> <br />
                                    -<strong>WeatherComparisonMenu.js</strong> <em>React component for the weather comparison page allowing users to compare weather conditions for two locations.</em> <br />
                                    -<strong>WeatherConditionsPage.js</strong> <em>React component for the weather conditions page for a searched location.</em> <br />
                                    -<strong>WeeklyForecast.js</strong> <em>React component to display the weather forecast page showing the seven day forecast for the user's current location.</em> <br />
                                    -<strong>App.css</strong> <em>Styling for app.js which also stores the context colors for theme switching.</em> <br />
                                    -<strong>ExitButton.css</strong> <em>Styling for the logo home button in the top left.</em> <br />
                                    -<strong>Header.css</strong> <em>Styling for the header element with weather data for the user's current location.</em> <br />
                                    -<strong>HomePage.css</strong> <em>Styling for the home page element.</em> <br />
                                    -<strong>SettingsPage.css</strong> <em>Styling for the settings menu page.</em> <br />
                                    -<strong>Sidebar.css</strong> <em>Styling for the sidebar navigation menu.</em> <br />
                                    -<strong>WeatherComparisonMenu.css</strong> <em>Styling for the weather comparison page.</em> <br />
                                    -<strong>WeatherConditionsPage.css</strong> <em>Styling for the weather conditions page.</em> <br />
                                    -<strong>WeeklyForecast.css</strong> <em>Styling for the weather forecast page.</em> <br />


                                </p>
                            </div>

                                

                        </div>

                    </div>

                    <div className="col-12">
                        <h2 className="text-primary text-start">Skills Developed</h2>
                        <hr className="my-4 border border-primary border-2"/>
                    </div>
                    
                    <div className="col-11 offset-1">
                        
                        <h3 className="text-primary text-start">Project Documentation through Confluence</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Throughout the semester long project, I was responsible for managing our Confluence documentation. 
                            This involved creating weekly progress reports, sending out weekly reminders to team members for 
                            their updates to progress reports, and creating meeting notes for our weekly meetings.
                        </p>

                        <h3 className="text-primary text-start">Development Progress Tracking using Jira</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            I also managed our project's Jira page. For this, I created our Jira issues and created linked 
                            branches to our GitHub repo, assigned Jira issues, ensured completion of Jira issues, marked issues 
                            as completed, and checked back over team member's work to ensure all portions of updated code were working 
                            as intended.
                        </p>

                        <h3 className="text-primary text-start">React Web Development</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            For our weather dashboard, we used React to create separate components representing 
                            each of our pages. All of the components of our website were created using components 
                            but the main benefit we gained from using react was the use of a single html page with 
                            constant headers and sidebars while swapping out the content loaded into the main area 
                            of the page.
                        </p>

                        <h3 className="text-primary text-start">Python Web Development using Flask</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            The API created with our backend directory was created using flask scripts 
                            using separate ports to send queries to OpenWeather API and Google Maps API for 
                            our interactive map and weather data. 
                        </p>

                        <h3 className="text-primary text-start">Constructing an API using processes</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Though flask's blueprint system would have been a significantly better way of running 
                            this system (something that I didn't learn about until my foodstop project), I learned 
                            a lot about running separate processes on different ports to have access to different 
                            python scripts. To avoid the hastle of running each script individually, I set up a 
                            main.py file that ran all of the separate python files attached to different ports.
                        </p>

                        <h3 className="text-primary text-start">Git Version Control</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            As with most of my other projects, this project was maintained through Git version control 
                            further firmiliarizing me with Git workflows, maintaining branches, and collaborating between 
                            a git repository and a Jira project.
                        </p>

                        <h3 className="text-primary text-start">Team Leadership and Management</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            As mentioned above, I was responsable for the team management for this project. This included 
                            Managing our jira page by creating, assigning, and marking completion on issues, managing our 
                            confluence page by creating weekly reports, sending out weekly reminders on reports, and creating 
                            meeting notes, creating demo videos, leading in class progress presentations, coordinating group 
                            meetings, assigning tasks, ensuring task completion, and ensuring project polish.
                        </p>

                    </div>

                </div>
            
            </div>

        </div>
    );
}

export default WGJDashboard;