import React from 'react'
import './Form.css';

function Input(props) {
  
	return (
		<div className={props.data ? "form":"noform"}>
			<form className='form-controls'>
<label>Email address</label>

<br/>
    <input type="email" className="input"  aria-describedby="emailHelp" placeholder="Enter email"/> 
    <br/>
    <label>Password</label>
    <br/>
    <input type="password" className="input"  placeholder="Password"/>
 <br/>
    <input type="checkbox" className="input" />
<label className="input" >Check me out</label>
    <br/>
  <button type="submit" onClick={props.onLogin} className="btns">Submit</button>
</form>
		</div>
	)
}

export default Input
