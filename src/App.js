import React from 'react';
import './App.css';
import Home from './home.js';
import AtAGlance from './atAglance.js';
import BookAppointment from './BookAppointment.js';
import About from './About.js';
import Departments from './Departments.js';
import Footer from './Footer.js';
import Location from './Location.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = { navbarName: 'navbar' };
  }

  myFunction = () => {
    var x = document.getElementById('myTopnav');
    if (x.className === 'navbar') {
      x.className += ' responsive';
    } else {
      x.className = 'navbar';
    }
  };

  myFunction2 = () => {
    var x = document.getElementById('myTopnav');
    x.className = 'navbar';
  };

  render() {
    return (
      <div>
        <div className='navbar' id='myTopnav'>
          <ul>
            <a href='#home' onClick={this.myFunction2}>
              Home
            </a>
            <a href='#aboutUs' onClick={this.myFunction}>
              About
            </a>
            <a href='#bookAppointment' onClick={this.myFunction}>
              Book Appointment
            </a>
            <a href='#departments' onClick={this.myFunction}>
              Departments
            </a>
            <a href='#location' onClick={this.myFunction}>
              Location
            </a>
            <a href='#connect' onClick={this.myFunction}>
              Connect
            </a>
            <a
              href='javascript:void(0);'
              class='icon'
              onClick={this.myFunction}>
              &#9776;
            </a>
          </ul>
        </div>

        <div className='main'>
          <div id='home'>
            <Home />
          </div>

          <div id='aboutUs'>
            <About />
          </div>

          <div id='bookAppointment'>
            <BookAppointment />
          </div>

          <div id='departments'>
            <Departments />
          </div>

          <div id='location'>
            <Location />
          </div>

          <div id='connect'>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
