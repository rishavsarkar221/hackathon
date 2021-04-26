import React from 'react';

const App = () => {
    return(
        <React.Fragment>
            <h1>THE PROGRAMMERS + GAMERS <br />WEB JAM 2021</h1>

            <div className="main">
                <div className="content">
                    <div className="header">
                        <h1>THE PROGRAMMERS + GAMERS WEB JAM 2021</h1>
                    </div>

                    <div className="texts">
                        Hello Developers! <br />We Are Organizing Hackathon Event In Our Web Development Server. (The Developers Are From World Wide).<br/>
                        We appreciate your willingness to join this Event 😁<br/><br/> Want to know how to join? <a href="#join">Click here</a>
                        <br/><br/>
                    
                        <div className="centerAlign">
                            <h2>The Theme of the event is: SPACE</h2>
                        </div>
                        We are happy to say that the current event theme is SPACE <br/>
                        This will be a 1 week event where developers like you will be making a website about the topic given <br /> and then voted by the admins of this event.
                        <br/><br/>

                        <div className="centerAlign">
                            <h2>Prerequisites before joining this event</h2>
                        </div>                        
                        This time we have decided this topic so that most of you aspiring new developers can join
                        <br/>
                        You should know:
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript (You can add it only if you want to add Interactivity in your site. If you don't know JavaScript then it's completely fine)</li>
                        </ul>

                        <br/>

                        <div className="centerAlign">
                            <h2>Rating System</h2>
                        </div>
                        Your website will be rated in these criterias: <strong>Design, Fun, Graphics, Something New and Eye catching</strong>

                        <br/><br/>

                        <div className="centerAlign">
                            <h2>Winning</h2>
                        </div>                        
                        The best overall website which follows each criterias above will be declared the winner. <br/>
                        The Winner will be showcased in our discord server along with the top 3 best participants.

                        <br/><br/>

                        <div className="centerAlign">
                            <h2>Rules</h2>
                        </div>                        
                        The following should be followed strictly:
                        <ul>
                            <li>No Plagiarism</li>
                            <li>Your website should be hosted on a live url (ex: <a href="https://gif-searcher-by-rishav.herokuapp.com/">https://gif-searcher-by-rishav.herokuapp.com</a>)</li>
                        </ul>

                        <br/><br/>
                        <span id="join">
                            So what are you waiting for? <br />Join this Event by entering our Discord Server <br/>
                            <a href="https://discord.gg/vNbMKKRs6T" target="_blank">https://discord.gg/vNbMKKRs6T</a>
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;