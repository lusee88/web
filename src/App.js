import React, { Component } from 'react';
import './Assets/css/default.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//the bridge between react and browser 

//components
import Header from './Components/headerComponent/header'
import Footer from './Components/footerComponent/footer'
import HomePage from './Components/pages/homePage'
import Projects from './Components/pages/projects'
import Experiences from './Components/pages/experiences'
import Interests from './Components/pages/interests'

class App extends Component{
  render (){
    return (
      //router wrap
      <Router>
        <div className="App">
          <Header />

            <Route exact path='/' component={HomePage} />
            <Route exact path='/Projects' component={Projects} />
            <Route exact path='/Experiences' component={Experiences} />
            <Route exact path='/Interests' component={Interests} />

          <Footer />
        </div>
      </Router>
      
    );
  }
}

export default App;
