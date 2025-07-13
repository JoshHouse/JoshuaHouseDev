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
                            <div className="ratio ratio-16x9 rounded overflow-hidden m-2">
                                <iframe
                                    className="w-100 h-100"
                                    src="https://www.youtube.com/embed/0m1rLNDYm9E"
                                    title="Dummy2048 Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
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
                            of displaying all of your weather information needs. From your location's weather 
                            to any location across the world, our weather dashboard has you covered! <strong>Supported 
                            by OpenWeather API</strong>, our dashboard gives you up-to-date weather statistics for any 
                            location! Not great with location names? Don't worry, we have you covered there too! 
                            <strong> Powered by Google Maps API</strong>, we provide an interactive map allowing you to simply click 
                            on the location you are searching for and see the current conditions in that area. Not 
                            native to the US and prefer metric units of measure? We made sure to cover all our bases! 
                            Simply change the units in the settings menu to your preferred unit of measure. No matter 
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
                                    I <strong>developed the backend functionality</strong> for <strong>retrieving all of our weather data </strong> 
                                    using <strong>Flask</strong>, <strong>Flask_Cors</strong>, and <strong>jsonify for RESTful responses</strong>. Throughout development, 
                                    I learned about <strong>running separate Python files as processes on separate ports</strong> (although 
                                    using Flask's blueprint system would have been better, I didn't learn about that until 
                                    development on FoodStop). I also learned about <strong>caching data</strong> based on how recently a 
                                    similar search was made. <strong>Similarities between searches were determined</strong> based on location 
                                    name and coordinate locations <strong>depending on the nature of the query</strong>. I developed this 
                                    caching system to <strong>reduce the number of API calls made</strong> seeing as that we were using a free 
                                    OpenWeather API account with a <strong>limited number of queries per day</strong>. The only portion of the 
                                    backend that I did not personally write was the GoogleMapsAPI.py file which was written by 
                                    one of my groupmates.
                                </p>

                                <h3 className="text-primary text-start">Front-End React Development and Styling</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    I also <strong>planned and implemented</strong> the majority of the <strong>front-end design</strong> elements of our 
                                    weather dashboard including <strong>initial planning of layout</strong>, <strong>creation of the React elements</strong>, 
                                    and <strong>styling of all pages</strong>. <strong>I implemented</strong> the majority of the <strong>functionality of each element </strong> 
                                    with the <strong>exception of the comparison menu</strong> and <strong>home page map integration</strong>. For these pages, 
                                    however, I did <strong>style all of the elements implemented</strong> to <strong>ensure a cohesive website design</strong>.
                                </p>

                                <h3 className="text-primary text-start">Team Leadership</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    Although we were assigned a designated team lead by our professor at the beginning of the project, unfortunately, he 
                                    was unable to fulfill the responsibilities required for this role. To help maintain our project, <strong>I stepped in to help with some of the project 
                                    management responsibilities</strong>. As a quick summary of some of the things I worked on, 
                                    <strong> I was responsible for deadline management</strong>, <strong>scheduling of group meetings</strong>, and <strong>leading our 
                                    weekly presentations</strong> on the progress we made over the previous week. Due to a lack of an attendance 
                                    policy by our professor, <strong>most weeks I was the only one present to give our presentations</strong> but <strong>under 
                                    my leadership, development resulted in a finished, polished product</strong> that I would be <strong>happy to run 
                                    on a server accessible on the web</strong>.
                                </p>

                                <h3 className="text-primary text-start">Confluence + Jira Management</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    With some of the management responsibilities I helped take on, I also held the <strong>responsibility</strong> of <strong>managing our team's Confluence and 
                                    Jira pages</strong>, including <strong>writing weekly reports</strong>, <strong>creating demo videos</strong>, <strong>creating, assigning, and 
                                    managing the Jira issues</strong> each team member was responsible for, and <strong>creating branches through Jira </strong>
                                    for each Jira issue. As team lead, I would also <strong>send out weekly reminders</strong> for the team to fill 
                                    out their contribution sections on the weekly report.
                                </p>

                                <h3 className="text-primary text-start">Github Repository Management</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    I was also <strong>responsible for the upkeep</strong> of our shared <strong>Github 
                                    repository</strong> including <strong>branch management</strong>, <strong>performing rollbacks</strong> when needed (which was surprisingly 
                                    frequent), and <strong>fixing errors</strong> implemented when large sections of code were <strong>merged onto the main branch</strong>.
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
                        
                        <h3 className="text-primary text-start">Confluence Project Documentation </h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Throughout the semester-long project, I was <strong>responsible</strong> for <strong>managing our Confluence documentation</strong>. 
                            This involved <strong>creating weekly progress reports</strong>, <strong>sending out weekly reminders</strong> to team members for 
                            their updates to progress reports, and <strong>creating meeting notes</strong> for our weekly meetings.
                        </p>

                        <h3 className="text-primary text-start">Jira for Development Progress Tracking </h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            I also <strong>managed our project's Jira page</strong>. For this, I <strong>created our Jira issues</strong> and <strong>created linked 
                            branches</strong> to our GitHub repo, <strong>assigned Jira issues</strong>, <strong>ensured completion of Jira issues</strong>, <strong>marked issues 
                            as completed</strong>, and <strong>checked back over team members' work</strong> to <strong>ensure all portions</strong> of the updated code were <strong>working 
                            as intended</strong>.
                        </p>

                        <h3 className="text-primary text-start">React Web Development</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            For our weather dashboard, we <strong>used React</strong> to create separate components representing 
                            each of our pages. All of the components of our website were created using components 
                            but the <strong>main benefit</strong> we gained from <strong>using React</strong> was the use of a <strong>single HTML page</strong> with 
                            constant headers and sidebars while <strong>swapping out</strong> the <strong>content loaded into the main area </strong> 
                            of <strong>the page</strong>.
                        </p>

                        <h3 className="text-primary text-start">Flask + Python Web Development</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            The <strong>API created with our backend directory</strong> was created <strong>using Flask scripts </strong> 
                            using <strong>separate ports</strong> to <strong>send queries to OpenWeather API</strong> and <strong>Google Maps API</strong> for 
                            our interactive map and weather data. 
                        </p>

                        <h3 className="text-primary text-start">API Construction using Processes</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Though Flask's blueprint system would have been a significantly better way of running 
                            this system (something that I didn't learn about until my foodstop project), I learned 
                            a lot about <strong>running separate processes</strong> on <strong>different ports</strong> to have access to different 
                            Python scripts. To avoid the hassle of running each script individually, I set up a 
                            <strong> main.py file</strong> that <strong>ran all of the separate Python files</strong> attached to different ports.
                        </p>

                        <h3 className="text-primary text-start">Git Version Control</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            As with most of my other projects, this project was <strong>maintained through Git</strong> version control 
                            further familiarizing me with <strong>Git workflows</strong>, <strong>maintaining branches</strong>, and <strong>collaborating between 
                            a GitHub repository and a Jira project</strong>.
                        </p>

                        <h3 className="text-primary text-start">Team Leadership and Management</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            As mentioned above, I <strong>helped take on some of the responsibilities for team management</strong> on this project. This included 
                            <strong> managing our jira page</strong> by <strong>creating, assigning, and marking completion on issues</strong>, <strong>managing our 
                            confluence page</strong> by <strong>creating weekly reports</strong>, sending out <strong>weekly reminders on reports</strong>, and <strong>creating 
                            meeting notes</strong>, <strong>creating demo videos</strong>, <strong>leading in class progress presentations</strong>, <strong>coordinating group 
                            meetings</strong>, <strong>assigning tasks</strong>, <strong>ensuring task completion</strong>, and <strong>ensuring project polish</strong>.
                        </p>

                    </div>

                </div>
            
            </div>

        </div>
    );
}

export default WGJDashboard;