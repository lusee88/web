import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'
import logo from '../../Assets/Images/logo.png'
  

class Header extends Component {
    render (){
      return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" width="80px"/>
            </div>

            <nav>
                <ul>
                    <li className="first">
                        <a href="/web">Me!</a>
                    </li>
                    <li>
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li className="last">
                        <Link to="/Experiences">Experiences</Link>
                    </li>
                </ul>
            </nav>
        </header>

        
      );
    }
  }
  
  export default Header;