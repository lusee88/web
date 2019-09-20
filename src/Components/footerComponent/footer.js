import React, { Component } from 'react';

//components

class Footer extends Component {
    render (){
      return (
        <footer>

          <a href="mailto:y343yu@uwaterloo.ca" target="_top">
            <i class="far fa-envelope"></i>
          </a>
          <a href="https://github.com/lusee88/">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/lucyyu-99/">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="LucyYuResume.pdf" target="_blank">
            <i class="far fa-file-alt"></i>
          </a>

        </footer>
        
      );
    }
  }
  
  export default Footer;