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
                            Our goal when developing our Text-Based Role Playing Game was to create a game with tons of 
                            replayability allowing you to fully immerse yourself in a medieval fantacy world with magic, 
                            enemies, dragons, and tons of cool areas to find. With 4 different classes to play through, 
                            tons of NPCs to talk to, places to explore, and at least 40 distinct weapons per class, there 
                            are tons of things to explore. We also wanted to make the game functional on the most outdated 
                            machines. For this reason, we have no graphics and the game is <strong>entirely playable through the 
                            terminal</strong>. To run the game, all you need to do is have the Java Development Kit installed on your 
                            machine and run the GameThread.java file to start your journey. As each playthrough can take 
                            hours to complete, we also implemented a saving feature to allow you to come back to your playthrough 
                            when you have the free time to do so! An interesting restriction we placed on ourselves when 
                            creating the game was to implement <strong>all functionality entirely through Java's Class Hierarchy 
                            system</strong>! Though there might have been some easier ways to achieve the things we created in our 
                            game, this restriction <strong>promoted creative problem solving</strong> and led to our <strong>full utilization of 
                            object-oriented programming in game development</strong>! With all that being said, feel free to jump in 
                            and begin your journey in the mystical world achieved entirely through code!
                        </p>
                    
                    </div>
                
                </div>

                <div className="row">

                    <div className="col-12">
                        <h2 className="text-primary text-start">My Contributions</h2>
                        <hr className="my-4 border border-primary border-2"/>

                        <div className="row">

                            <div className="col-6">
                                
                                <h3 className="text-primary text-start">Team Lead and Head of Code Structure Design</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    As the Team Lead, I was <strong>responsible for coordinating and leading group meetings</strong>. 
                                    In this role, I used a whiteboard to <strong>coordinate and design the code structure of 
                                    the class hierarchy system</strong> with input from the team. Along with code structure, I 
                                    also led the <strong>design of the storyline structure</strong> of our game, indicating branches 
                                    in the storyline and where storylines would reconverge to progress with a <strong>semilinear 
                                    storyline</strong> with slight deviations depending on the class path.
                                </p>

                                <h3 className="text-primary text-start">Creation and Implementation of Class Hierarchies</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    As the owner of the GitHub Repository, I <strong>created and implemented the 13 separate 
                                    game feature classes</strong> discussed in our meetings <strong>including their parent classes for shared 
                                    characteristics</strong>. This involved <strong>implementing their variables and constructors</strong> as well 
                                    as their <strong>class relationships</strong>.
                                </p>

                                <h3 className="text-primary text-start">All Aspects of the Mage Class</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    As a 4-person group, each group member took <strong>responsibility for developing one of the 
                                    4 playable classes</strong>. My selected class was the <strong>mage class</strong>. Development of this class 
                                    involved <strong>creating the tutorial</strong>, a <strong>special mage-specific mission</strong> (which served as 
                                    chapter 3 of our game), <strong>implementation of a mana system for battles</strong> fought with a 
                                    mage weapon, and <strong>creation of 40 different magic weapons</strong>, each with <strong>accompanying 
                                    special attacks</strong>.
                                </p>

                                <h3 className="text-primary text-start">Game Thread Functionality Mage Class Storyline, and Final Mission</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    I was <strong>responsible for the initial setup of the GameThread</strong>, indicating how <strong>the GameThread 
                                    file would run</strong> the individual choices the player makes. Along with this, the major contribution 
                                    I made to the GameThread file was the <strong>development of the mage class special mission</strong>, the <strong>mage tutorial</strong>, and 
                                    the <strong>final mission given to all players</strong> which served as chapter 4. 
                                </p>

                                <h3 className="text-primary text-start">Shop and Battle Functionality</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    I also <strong>developed all of the shop functionality</strong> and <strong>battle functionality</strong>. The shop functionality 
                                    was <strong>present in the hub at each stage of the game</strong> whereas the <strong>battle functionality was present in 
                                    all phases of the game</strong>, both <strong>in storyline and in hub areas</strong>. The battle functionality was particularly 
                                    interesting as <strong>I implemented the use of consumables</strong>, <strong>weapons</strong>, <strong>special attacks</strong> (which had a chance 
                                    to miss or do extra damage), <strong>and guarding</strong> which reduced damage taken for 3 turns in a battle.
                                </p>

                                <h3 className="text-primary text-start">Development of Consumables</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    I also <strong>developed 5 different consumables</strong> (<strong>14 if you consider chapter variants </strong> 
                                    of potions) which were also <strong>implemented into the battle class</strong> to allow for health 
                                    recovery, mana recovery, damage over time through poison, speed boosts allowing for 
                                    two attack turns in a row, and damage boosts increasing your attack damage for a turn.
                                </p>
                                
                            </div>

                            <div className="col-6">
                                <h3 className="text-primary text-start">Files Written</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    -<strong>Battle.java:</strong> <em>Handled battle functionality with special functionality for the final boss</em> <br />
                                    -<strong>Consumable.java:</strong> <em>Handled consumable information.</em><br />
                                    -<strong>Enemy.java:</strong> <em>Handled enemy information.</em><br />
                                    -<strong>GameChar.java:</strong> <em>Parent object handling game character information.</em><br />
                                    -<strong>GameThread.java:</strong> <em>Handled running the game. I specifically contributed the mage storyline and final mission</em><br />
                                    -<strong>Inventory.java:</strong> <em>Handled inventory information containing weapons and consumables.</em><br />
                                    -<strong>Item.java:</strong> <em>Parent object to store common item information.</em><br />
                                    -<strong>Lootable.java:</strong> <em>Parent object to store objects that were lootable.</em><br />
                                    -<strong>Luck.java:</strong> <em>Handled luck calculation for special attacks.</em><br />
                                    -<strong>NPC.java:</strong> <em>Parent object for NPCs to hold dialogue.</em><br />
                                    -<strong>Player.java:</strong> <em>Handled player information.</em><br />
                                    -<strong>Shop.java:</strong> <em>Handled shop functionality.</em><br />
                                    -<strong>ShopKeeper.java:</strong> <em>Handled shopkeeper specific information.</em><br />
                                    -<strong>SpecialAttack.java:</strong> <em>Handled special attacks for weapons.</em><br />
                                    -<strong>Weapon.java:</strong> <em>Handled weapon information.</em><br />
                                    -<strong>ConsumableList.java:</strong> <em>Index of available consumables.</em><br />
                                    -<strong>EnemyList.java:</strong> <em>Index of enemies. I specifically contributed mage and final mission enemies.</em><br />
                                    -<strong>SpAtkList.java:</strong> <em>Index of special attacks. I specifically contributed mage weapon, enemy, and final mission enemy special attacks.</em><br />
                                    -<strong>WeaponList.java:</strong> <em>Index of weapons. I specifically handled mage weapons.</em><br />
                                </p>

                                <div class="float-end me-3 w-100">
                                    <img class="w-100 h-auto rounded ms-3 mb-3" 
                                        src="src/assets/images/TextBasedRPG_Graph.png" 
                                        alt="Text-Based RPG Class Heirarchy Graph" />
                                    <p class="mt-1 text-center text-secondary">
                                        <em>*Text-Based RPG Class Hierarchy Graph and Interactions*</em>
                                    </p>
                                </div>

                            </div>

                                

                        </div>

                    </div>

                    <div className="col-12">
                        <h2 className="text-primary text-start">Skills Developed</h2>
                        <hr className="my-4 border border-primary border-2"/>
                    </div>
                    
                    <div className="col-11 offset-1">
                        
                        <h3 className="text-primary text-start">Object Oriented Programming</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Since our project was <strong>entirely coded through object-oriented programming</strong>, through 
                            development, I got <strong>very comfortable with object-oriented programming</strong> and class 
                            <strong>interactions between parent and child classes</strong>. This was necessary to develop 
                            our fully functional game utilizing classes to <strong>avoid repeated code and data</strong>.
                        </p>

                        <h3 className="text-primary text-start">Java Class Hierarchies</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Expanding on object-oriented programming, as this project was developed completely 
                            using Java classes, I became very familiar <strong>specifically with how Java's classes work </strong> 
                            and how <strong>different classes interact in the Java</strong> coding language.
                        </p>
                    
                        <h3 className="text-primary text-start">Team Leadership</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            For this project, <strong>I served as team lead</strong> by <strong>coordinating meetings</strong>, <strong>setting deadlines</strong>, 
                            <strong> managing our repository</strong>, <strong>leading group discussions</strong>, <strong>doing a large portion of the architecture </strong> 
                            design (with a lot of group collaboration and input from my team), and <strong>ensuring a polished 
                            final product</strong>.
                        </p>

                        <h3 className="text-primary text-start">Git Version Control</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            This was <strong>my first large project using GitHub and Git</strong> version control and as such was a 
                            <strong> major learning experience</strong> for me on how to <strong>manage branches</strong>, <strong>merge</strong>, 
                            <strong> push</strong>, and <strong>pull updated changes </strong> from my groupmates. 
                            <strong> I would continue on to hone my skills</strong> in this area 
                            on future projects but this was my introduction. 
                        </p>


                    </div>

                </div>
            
            </div>

        </div>
    );
}

export default TextBased;