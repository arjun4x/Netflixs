import React,{useState} from 'react'

const Form = (props) => {

const [enterNames,setEnterNames] =useState('');
const [enterAges,setEnterAges] = useState('');

const nameHandler = (e) =>{
    setEnterNames(e.target.value);

}
const ageHandler = (e) =>{
    setEnterAges(e.target.value);
}
const formData ={
    name: enterNames,
    age:enterAges
}
const submitHandler = (event) =>{
    event.preventDefault();
    props.onInputData(formData);
    

}


    return (
        <div>
 <form >
  <div >
    <input type="name" onChange={nameHandler} placeholder="Name"/>
    </div>
  <br/>
  <div >
    <input type="age" onChange={ageHandler}  placeholder="Age"/>
  </div>
  <button type="submit" onClick={submitHandler}>Submit</button>
</form>
        
            
        </div>
    )
}

export default Form
