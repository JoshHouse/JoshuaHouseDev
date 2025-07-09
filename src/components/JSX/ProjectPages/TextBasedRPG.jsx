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
                            Our goal when developing our Text Based Role Playing Game was to create a game with tons of 
                            replay-ability allowing you to fully emerse yourself in a medival fantacy world with magic, 
                            enemies, dragons, and tons of cool areas to find. With 4 different classes to play through, 
                            tons of NPC's to talk to, places to explore, and at least 40 distinct weapons per class, there 
                            are tons of things to explore. We also wanted to make the game functional on the most outdated 
                            machines. For this reason, we have no graphics and the game is entirely playable through the 
                            terminal. To run the game, all you need to do is have the Java Developer Kit installed on your 
                            machine and run the GameThread.java file to start your journey. As each playthrough can take 
                            hours to complete, we also implemented a saving feature to allow you to come back to your playthrough 
                            when you have the free time to do so! An interesting restriction we placed on ourselves when 
                            creating the game was to implement all functionality entirely through Java's Class Heirarchy 
                            system! Though there might have been some easier ways to achieve the things we created in our 
                            game, this restriction promoted creative problem solving and lead to our full utilization of 
                            object oriented programming in game development! With all that being said, feel free to jump in 
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
                                    As the Team Lead, I was responsible for coordinating and leading group meetings. 
                                    In this role, I used a whiteboard to coordinate and design the code structure of 
                                    the class heirarchy system with input from the team. Along with code structure, I 
                                    also lead the design of the storyline structure of our game, indicating branches 
                                    in storyline and where storylines would reconverge to progress with a semilinear 
                                    storyline with slight deviations depending on class path.
                                </p>

                                <h3 className="text-primary text-start">Creation and Implementation of Class Heirarchies</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    As the owner of the GitHub Repository, I created and implemented the 13 separate 
                                    game feature classes discussed in our meetings including their parent classes for shared 
                                    characteristics. This involved implementing their variables and constructors as well 
                                    as their class relationships.
                                </p>

                                <h3 className="text-primary text-start">All Aspects of the Mage Class</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    As a 4 person group, each group member took responsiblity for developing one of the 
                                    4 playable classes. My selected class was the mage class. Development of this class 
                                    involved creating the tutorial, a special mage-specific mission (which served as 
                                    chapter 3 of our game), implementation of a mana system for battles fought with a 
                                    mage weapon, and creation of 40 different magic weapons, each with accompanying 
                                    special attacks.
                                </p>

                                <h3 className="text-primary text-start">Game Thread Functionality Mage Class Storyline, and Final Mission</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    I was responsible for the inital setup of the Gamethread, indicating how the GameThread 
                                    file would run the individual choices the player makes. Along with this, the major contribution 
                                    I made to the GameThread file was the development of the mage class, the mage tutorial, and 
                                    the final mission given to all players which served as chapter 4. 
                                </p>

                                <h3 className="text-primary text-start">Shop and Battle Functionality</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    I also developed all of the shop functionality and battle functionality. The shop functionality 
                                    was present in the hub at each stage of the game whereas the battle functionality was present in 
                                    all phases of the game, both in storyline and in hub areas. The battle functionality was particularly 
                                    interesting as I implemented the use of consumables, weapons, special attacks (which had a chance 
                                    to miss or do extra damage), and guarding which reduced damage taken for 3 turns in a battle.
                                </p>

                                <h3 className="text-primary text-start">Development of Consumables</h3>
                                <hr className="my-4 border border-primary border-2"/>

                                <p className="text-dark">
                                    I also developed 5 different consumables (14 if you consider chapter variants 
                                    of potions) which were also implemented into the battle class to allow for health 
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
                                        <em>*Text Based RPG Class Heirarchy Graph and Interactions*</em>
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
                            Since our project was entirely coded through object oriented programming, through 
                            development, I got very comfortable with object oriented programming and class 
                            interactions between parent and child classes. This was necessary to develop 
                            our fully functional game utilizing classes to avoid repeated code and data.
                        </p>

                        <h3 className="text-primary text-start">Java Class Heirarchies</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            Expanding on object oriented programming, as this project was developed completely 
                            using Java classes, I became very firmiliar specifically with how Java's classes work 
                            and how different classes interact in the Java coding language.
                        </p>
                    
                        <h3 className="text-primary text-start">Team Leadership</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            For this project, I served as team lead by coordinating meetings, setting deadlines, 
                            managing our repository, leading group discussion, doing a large portion of the architecture 
                            design (with a lot of group collaboration and input from my team), and ensuring a polished 
                            final product.
                        </p>

                        <h3 className="text-primary text-start">Git Version Control</h3>
                        <hr className="my-4 border border-primary border-2"/>
                        
                        <p className="text-dark">
                            This was my first large project using GitHub and Git version control and as such was a 
                            major learning experience for me on how to manage branches, merge, push, and pull with 
                            updated changes from my groupmates. I would continue on to hone my skills in this area 
                            on future projects but this was my introduction. 
                        </p>


                    </div>

                </div>
            
            </div>

        </div>
    );
}

export default TextBased;