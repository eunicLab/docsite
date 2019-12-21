import React from 'react';
import './App.css';
import Home from './home.js'
import AtAGlance from './atAglance.js'
import BookAppointment from './BookAppointment.js'
import About from './About.js'
import Departments from './Departments.js'
import Footer from './Footer.js'


function App() {
  return (
    
    <body>
      <div class="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#dropdown">dropdown</a>
        <a href="#departments">Departments</a>
        <a href="#contact us">Contact Us</a>
      </div>
      <div className="main">
    
      <div id="home">
        <Home/>
      </div>

        <AtAGlance/>
        <BookAppointment/>

      <div id="about">
        <About/>
      </div>

      <div id="departments">
        <Departments/>
      </div>


      <div id="contact us">
      <Footer/>
      </div>

      </div>

    </body>
  );
}

export default App;
