import React, { useState, useEffect } from 'react';
import './Banner.css'
import axios from '../../axios';
import {apiKey,imageUrl} from '../../constands/constands';
import VideoPlayer from '../../VideoPlayer';

function Banner(props) {
	const [movie, setMovie] = useState();
	const [id,setId] = useState([]);
	useEffect(() => {
		axios.get(`/trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
		
			setMovie(response.data.results[12]);
				
				})
			  
	}, [])
	
	const movieTrailer=(obj)=>{
		console.log(obj)
		axios.get(`/movie/${obj}/videos?api_key=${apiKey}&language=en-US`).then((response)=>{
			
			if(response.data.results.length !== 0){
				setId(response.data.results[0]);
				console.log(response.data.results[0]);
			}else{
				console.log(response.data);
			}
			
		})
	}
	const closeTrailer =()=>{
		setId('');
	}
	
	return (
		<div 
		style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})`}} className='banner'>
			<div className='content'>
				<h1 className='title'>{ movie ? movie.title : ''}</h1>
				<div className='banner-buttons' >
					<button className='button' onClick={()=>{movieTrailer(movie.id)}}>Play</button>
					
					</div>
				<h1 className='description'>{movie ? movie.overview : ''}</h1>
				 
			</div>
			<div className="fade_bottom">

			</div>
			<VideoPlayer object={id.key} onCloser={closeTrailer}/>
			
		</div>
	)
}

export default Banner
