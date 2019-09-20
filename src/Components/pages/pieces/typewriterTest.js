import React, { Component } from 'react';
import TypeWriter from 'typewriter-effect'

class TypewriterTest extends Component {
    render (){
      return (
        <div className="container-fluid">
            <TypeWriter 
              onInit={(typewriter) => {
                typewriter.typeString('I am currently attending the University of Waterloo for Computer Science')
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log('All strings were deleted');
                  })
                  .start();
              }}
            />
        </div>
        
      );
    }
  }
  
  export default TypewriterTest;