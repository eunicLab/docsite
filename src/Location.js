import React from 'react';
import './App.css';
class Location extends React.Component {
	constructor(){
		super()
		this.state={}
	}
	render(){
		return(

		<div className="departments">
		<h1>Location</h1>
      	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1790.993188386633!2d-0.17578602685794503!3d51.532932674119884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761abce17a0219%3A0x66401e7ff0c94141!2sHospital%20of%20Saint%20John%20and%20Saint%20Elizabeth!5e0!3m2!1sen!2scz!4v1577619544988!5m2!1sen!2scz "width="100%" height="600" ></iframe>
		</div>	
			)
	}
}

export default Location;