import React from 'react';
import './App.css';
import intensive from './intensive.jpg';
import wheelchair from './Wheelchair.jpg';
import AtAGlance from './atAglance.js';

class About extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='About'>
        <h1>About Us</h1>
        <AtAGlance />

        <img className='images' src={intensive} alt='intensive care unit' />
        <img
          className='images'
          src={wheelchair}
          alt='patient on a wheelchair'
        />
        <img className='images' src={intensive} alt='intensive care unit' />

        <div className='flex-container'>
          <div className='section2'>
            <h3>7200+</h3>
            <h5>Healthy and Happy Customers</h5>
          </div>

          <div className='section2'>
            <h3>150+</h3>
            <h5>Professional medical specialist</h5>
          </div>

          <div className='section2'>
            <h3>15+</h3>
            <h5>Years of impeccable work</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
