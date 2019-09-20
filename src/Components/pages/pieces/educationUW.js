import React, { Component } from 'react';

class EducationUW extends Component {
    render (){
      return (
        <div className="container-fluid">
            <div id="terminal">
                <h5>Command Prompt</h5>
                <div id="typewriterWrapper">
                    <div id="parent">> I am a student at the University of Waterloo  
                    </div>
                    <div id="child">
                    > I'm in my 3rd year studying Computer Science
                    </div>
                    <div className="border"></div>
                </div>
            </div>  
        </div>
        
      );
    }
  }
  
  export default EducationUW;