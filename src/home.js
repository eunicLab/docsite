import React from 'react';
import './App.css';
import backwardArrow from './backwardArrow.svg'
import forwardArrow from './forwardArrow.svg'

class Home extends React.Component {
	constructor(){
		global.count =0
		super()
		this.state={home: "home",
					backwardArrow: "noDisplay",
					forwardArrow: "navArrow2index",
					stickerNotes: "stickerNotesindex"


					}
		this.handleclick=this.handleclick.bind(this)
		this.handleclick2=this.handleclick2.bind(this)

	}

handleclick(){

	
	if(global.count===0){
	this.setState({home:"home2", forwardArrow:"navArrow2", stickerNotes:"stickerNotes"})};

	if (global.count===1){
	this.setState({home:"home3"})};

if (global.count===2){this.setState({home:"home4"})};
if(global.count>=0 && global.count <2){this.setState({backwardArrow:"navArrow1", forwardArrow:"navArrow2"})}
if(global.count===2){this.setState({forwardArrow:"noDisplay"})}
if(global.count<3 && global.count>=0) {global.count++};

}


handleclick2(){
	if(global.count===3){
	this.setState({home:"home3b"})};

	if (global.count===2){
	this.setState({home:"home2b"})};

if (global.count===1){this.setState({home:"homeb",forwardArrow: "navArrow2index", stickerNotes: "stickerNotesindex"})};
if (global.count>0 && global.count<=3){global.count--};
if (global.count===0){this.setState({backwardArrow:"noDisplay"})}
if (global.count>0){this.setState({backwardArrow:"navArrow1", forwardArrow:"navArrow2"})}

}


	render(){
	return(

<div className={this.state.home}>
<div className="sticker">
<img src={backwardArrow}  className = {this.state.backwardArrow} onClick={this.handleclick2}/>
<p className={this.state.stickerNotes}>
<h3>We Care For and Protect Your Health</h3>
<h5>We Will Help Restore good helath to everyone</h5>
</p>
<img src ={forwardArrow} className = {this.state.forwardArrow} onClick={this.handleclick}/>




</div>
</div>

		)
}
}
export default Home;