import React,{useState,useEffect} from 'react'
import axios from '../../axios';
import { imageUrl,apiKey } from '../../constands/constands';
import VideoPlayer from '../../VideoPlayer';
import './RawPost.css';

function RawPost(props) {
	const [poster, setPoster] = useState([]);
	const [id,setId] = useState({});
	useEffect(() => {
		
		axios.get(props.url).then((response)=>{
			setPoster(response.data.results);
		})}, [])
	

		const trailerHandler = (obj) =>{
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
		<div className='row'>
			<h2>{props.title}</h2>
			<div className='posters' >
				{poster.map((obj)=>
				
					<img onClick={()=> trailerHandler(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} key={obj.id} alt="poster" src={obj.backdrop_path ? `${imageUrl+obj.backdrop_path}` : ""}/>
					
					)}
			</div >
		
				<VideoPlayer object={id.key} onCloser={closeTrailer}/>
		

		</div>
	)
}

export default RawPost
