import React from 'react';
import './App.css';

class BookAppointment extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='BookAppointment'>
        <form>
          <label>Book Appointment</label>
          <input type='text' placeholder='Your Name' />
          <input type='text' placeholder='Contact Number' />
          <input type='text' placeholder='Address' />
          <input type='text' placeholder='Timing' />
          <button className='btn'>Quick Appointment</button>
        </form>
      </div>
    );
  }
}

export default BookAppointment;
