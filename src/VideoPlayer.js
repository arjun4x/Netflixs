import React from 'react'
import './VideoPlayer.css' ;
import YouTube from 'react-youtube';
function VideoPlayer(props) {
	
	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
		  // https://developers.google.com/youtube/player_parameters
		  autoplay: 1,
		},
	  };
	  const trailerCloser =() =>{
		  props.onCloser();
	  }
	return (
		<div className= {props.object? "newClass" : "class"} >
			<YouTube videoId={props.object} opts={opts}  />
			<button onClick={()=>{
				trailerCloser()   
			}} type="button" className="button">close</button>
	
		</div>
	)
}

export default VideoPlayer
