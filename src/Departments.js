import React from 'react';
import './App.css';
import wheelchair from './Wheelchair2.jpg';
import massage from './massage.jpg';
import surgery from './surgery1.jpg';
import massage2 from './massage2.jpg';
import lab1 from './lab.jpg';
import lab2 from './lab2.jpg';
import surgery2 from './surgery2.jpg';

class Departments extends React.Component {
  constructor() {
    super();
    this.state = {
      picture1: wheelchair,
      picture2: surgery,
      departmentStyle1: 'section3Click',
      departmentStyle2: 'section3',
      departmentStyle3: 'section3',
      departmentStyle4: 'section3'
    };
  }

  handleCardiology = () => {
    this.setState({
      picture1: wheelchair,
      picture2: surgery,
      departmentStyle1: 'section3Click',
      departmentStyle2: 'section3',
      departmentStyle3: 'section3',
      departmentStyle4: 'section3'
    });
  };

  handleSurgery = () => {
    this.setState({
      picture1: surgery,
      picture2: surgery2,
      departmentStyle1: 'section3',
      departmentStyle2: 'section3Click',
      departmentStyle3: 'section3',
      departmentStyle4: 'section3'
    });
  };

  handleLaboratory = () => {
    this.setState({
      picture1: lab1,
      picture2: lab2,
      departmentStyle1: 'section3',
      departmentStyle2: 'section3',
      departmentStyle3: 'section3Click',
      departmentStyle4: 'section3'
    });
  };

  handleTherapy = () => {
    this.setState({
      picture1: massage,
      picture2: massage2,
      departmentStyle1: 'section3',
      departmentStyle2: 'section3',
      departmentStyle3: 'section3',
      departmentStyle4: 'section3Click'
    });
  };

  render() {
    return (
      <div className='departments'>
        <h1 className='heading'>Departments</h1>
        <div className='flex-container2'>
          <h5
            className={this.state.departmentStyle1}
            onClick={this.handleCardiology}>
            Cardiology
          </h5>
          <h5
            className={this.state.departmentStyle2}
            onClick={this.handleSurgery}>
            Surgery
          </h5>
          <h5
            className={this.state.departmentStyle3}
            onClick={this.handleLaboratory}>
            Laboratory
          </h5>
          <h5
            className={this.state.departmentStyle4}
            onClick={this.handleTherapy}>
            Therapy
          </h5>
        </div>

        <img
          className='department-image'
          src={this.state.picture1}
          alt='hospital department'
        />
        <img
          className='department-image'
          src={this.state.picture2}
          alt='hospital department'
        />
      </div>
    );
  }
}

export default Departments;
