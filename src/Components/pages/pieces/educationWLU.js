import React, { Component } from 'react';
import cueCards from "./cueCards.jpg"
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


class EducationWLU extends Component {
    render (){
      return (
        <div className="container-fluid">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block mx-auto"
                src={cueCards}
                alt="First slide"
              />
              <Carousel.Caption>
                <p className="ctext">I study Business Administration <br>
                </br>at Wilfred Laurier University.</p>              
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block mx-auto"
                src={cueCards}
                alt="Third slide"
              />

              <Carousel.Caption>
                <p className="ctext">I am expected to graduate in 2022</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block mx-auto"
                src={cueCards}
                alt="Third slide"
              />

              <Carousel.Caption>
                <p className="ctext">I have taken courses in Finance, <br>
                </br>Economics, Accounting, and Marketing</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        
      );
    }
  }
  
  export default EducationWLU;