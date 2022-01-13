import React from 'react'
import './Input.css';

function Input(props) {
  
	return (
		<div className={props.data ? "form":"noform"}>
			<form className='form-controls'>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"  placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={props.onLogin} classNameName="btn ">Submit</button>
</form>
		</div>
	)
}

export default Input
