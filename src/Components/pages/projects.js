import React, { Component } from 'react';
import biquadris from "./pieces/biquadris.png"
import CVT from "./pieces/siteCVT.png"
import scotia from "./pieces/scotia.png"

class Projects extends Component {
    render (){
      return (
        <div className="row">

          <div className="col">
            <div className="container">
              <img src={CVT} className="image"/>
              <div className="overlayT">
                <div className="text">This is an informational website created with HTML, CSS and Bootstrap</div>
              </div>
            </div>
            <div className="container">
              <img src={scotia} className="image"/>
              <div className="overlayR">
                <div className="text">This was a web-app made from ScotiaHacks to gather data for potential customers</div>
              </div>
            </div>

          </div>

          <div className="col">

          <div className="container">
            <img src={biquadris} className="image"/>
            <div className="overlayG">
              <div className="text">This was a game was made in C++ and is a local two-player tetris.</div>
            </div>
          </div>

          </div>

        </div>
        
      );
    }
  }
  
  export default Projects;