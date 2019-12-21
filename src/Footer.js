import React from 'react';
import './App.css';
class Footer extends React.Component {
	constructor(){
		super()
		this.state={}
	}
		render(){
		return(

			<div className="footer">
			<h3>DocSite</h3>
			<h5>PO Box 1407 </h5>
			<h5>Anderson, SC 29622</h5>
			<h5>(864) 965-9990</h5>
			</div>



			)
	}
}

export default Footer;