
import React,{useState} from 'react'
import './Navbar.css' ;

import Form from './Form'
function Navbar() {
	
	const [data,setData] =useState(null);
	
	const classHandler =()=>{
		setData(true);


	}
	const loginHandler=()=>{
		setData("hello");

	}

	
	return (
		
		<div className= 'navbar' >
			<img className='logo' src=
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" 
				alt="Netflix" />

		<button className='btn' onClick={classHandler}>login</button>
		    <img className='avatar' src=
			" https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png " 
			alt="" />
		<Form data={data} onLogin={loginHandler}/>
        
		
		</div>
		
	)
}

export default Navbar
