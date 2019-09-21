import React, { Component } from 'react';
import {Card} from 'react-bootstrap'

class Experiences extends Component {
    render (){
      
      return (
        <div className="expContainer">
          <div className="cardRow">

            <div className="cardColumn">
              <Card border="success" style={{ width: '18rem'}}>
                  <Card.Header>Jan-Apr 2019</Card.Header>
                  <Card.Body>
                    <Card.Title>Toronto-Dominion Bank</Card.Title>
                    <Card.Text>
                    I worked as a Cybersecurity Analyst focusing on web
                    certificate management and crytography technologies.
                    My primary contributions involved developing programs
                    to automate collection and management of web-certificate data. Through 
                    my <b>Python</b> and <b>VBA</b> programs, I was able 
                    to reduce the need for manual labour by 3x the anticipated
                    amount.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className="cardColumn">
                <Card border="info" style={{ width: '18rem' }}>
                  <Card.Header>Apr-Aug 2018</Card.Header>
                  <Card.Body>
                    <Card.Title>MCAP Inc.</Card.Title>
                    <Card.Text>
                    During my time at MCAP Inc, I worked as a Security Analyst.
                    My primary initatives involved development of <b>VBScript</b> to 
                    perform company wide audits and to ensure good security practices that 
                    meet industry standard. I also took 
                    part in developing scripts in <b>VBA</b> to generate reports on
                    vunerabilities and IDS/IPS threats in the company and external threats to the industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
                <div className="cardColumn">
                  <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header>Apr-Aug 2018</Card.Header>
                    <Card.Body>
                      <Card.Title>CVT</Card.Title>
                      <Card.Text>
                      I acted as a web-developer at Calibration Validation Technologies
                      and developed their informational website through HTML and CSS using 
                      Bootstrap. Through its development, CVT was able to increase its customer
                      base by 200%. The website also included a <b>PHP</b> aspect to allow for
                      customers to securely send inquiries to the CVT business email. 
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="cardColumn">
                  <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Header>2018-2019</Card.Header>
                    <Card.Body>
                      <Card.Title>VR Vertigo</Card.Title>
                      <Card.Text>
                      I acted as a Project Manager for VR Vertigo, a company created to help 
                      understand and research why certain people experience nausea when using 
                      VR sets. Through this, we were able to explore and understand the game 
                      making process through Unity and Epic Games. We were able understand how 
                      we perceive dimensions and how to imitate the effect through game creation. 
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
          </div>
          
        </div>
        
      );
    }
  }
  
  export default Experiences;