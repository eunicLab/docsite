import React from 'react';
import './App.css';
import intensive from './intensive.jpg'
import wheelchair from './Wheelchair.jpg'
import massage from './massage.jpg'

class About extends React.Component {
	constructor(){
		super()
		this.state={}
	}
	render(){
		return(
			<div className="About">
			
			<div className="mission">
			<h3>About Us</h3>
		We will help to find health, to everyone.
		integer pulvinar leo id viverra feugiat.Sed porttitor 
		orci vel fermentum elit maximus. Curabitur ut turpis massa 
		in condimentum libero.
 		Integer sit amet mattis quam
 		Praesent ullamcorper dui turpis
 			Integer sit amet mattis quam



 </div>


			<img className= "images" src={intensive} />
			<img className= "images"src ={wheelchair}/>
			<img className= "images" src={intensive} />

			<div className="flex-container">

			<div className="section2">
			<h1>7200+</h1>
			<h3>Healthy and Happy Customers</h3>
			</div>

			<div className="section2">
			<h1>150+</h1>
			<h3>Professional medical specialist</h3>
			</div>

			<div className ="section2">
			<h1>15+</h1>
			<h3>Years of impeccable work</h3>
			</div>		



			</div>





			</div>

			)
	}
}

export default About;