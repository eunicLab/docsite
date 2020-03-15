import React from 'react';
import './App.css';
class AtAGlance extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='AtAGlance'>
        <div className='section'>
          <h3>Modern Equipment</h3>
          <h5>The best medical service at affordable price</h5>
        </div>

        <div className='section'>
          <h3>Famous Doctors</h3>
          <h5>The best medical service at affordable price</h5>
        </div>

        <div className='section'>
          <h3>Health Monitoring</h3>
          <h5>The best medical service at affordable price</h5>
        </div>

        <div className='section'>
          <h3>Book a visit online</h3>
          <h5>The best medical service at affordable price</h5>
        </div>
      </div>
    );
  }
}

export default AtAGlance;
