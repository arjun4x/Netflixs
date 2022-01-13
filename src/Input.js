import React from 'react'
import './Input.css';

function Input(props) {
  
	return (
		<div className={props.data ? "form":"noform"}>
			<form className='form-controls'>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
    <small  className="form-text">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control"  placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check" />
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="submit" onClick={props.onLogin} className="btn ">Submit</button>
</form>
		</div>
	)
}

export default Input
