import React, { Component } from 'react'; 
import TabContent from './pieces/tabContent';



class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {active: 'education'};
  }

    render (){


      return (
        <div className="home">
 
          
              <div className="aboutMe">

                <div className="titleContainer">
                  <div className='nameBorder'>
                    <h1 className='firstName'>Lucy</h1>
                    <h1 className='lastName'>Yu</h1>
                  </div>
                </div>
                
                
                 
              </div>

              <div className="intro">
                <div className="containerIntro">
                  <div className="textContainer">
                    <p>I am a highly curious student who wants to assume the role of a developer and all that it has to offer. I am strongly motivated and wish to 
                    explore the various types of languages. Currently, I am most experienced with C/C++, Python, HTML/CSS, and React. However, I am a quick
                    learner and a hard worker so I am able to pick up on new languages and their functions speedily. I would love to learn more about full-stack development: 
                    specifically, I would like to learn about the different databases(SQL, MongoDB) and using Python on the server-side. I am also interested in API creation.
                    My interests lie with web development and design, security, and cloud programming in technology. However, I am also interested in pursuing a Project Manager
                    role in the future. My other hobbies enjoy jamming to music and playing sports such as Basketball, Badminton, and Ultimate Frisebee. 
                    </p>
                  </div>
                </div>

              </div>
              
            <div className="aboutMeLast"></div>

            <div className="eduContainer">
              <div className="edu">

                <TabContent />

              </div>
            </div>

            
            <div className="aboutMeLast"></div>

        </div>
        
      );
    }

    


  }
  
  export default HomePage;