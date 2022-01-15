import React from 'react';
import {action,horror,comedy,romance} from './Urls/url';

import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Banner from './Components/Banner/Banner';
import RawPost from './Components/Rawpost/RawPost';

function App() {
  return (
    <div>
    
    <Navbar/>
    <Banner />
   
    <RawPost url={action} title='Action' isSmall={false}/>
    <RawPost url={comedy} title='Comedy' isSmall={true}/>
    <RawPost url={romance} title='Romance' isSmall={true}/>
    <RawPost url={horror} title='Horror' isSmall={true}/>
   
    </div>
  
  )
}

export default App;
