import {apiKey} from '../constands/constands';

export const action=`/discover/movie?api_key=${apiKey}&with_genres=28`;
export const comedy= `/discover/movie?api_key=${apiKey}&with_genres=35`;
export const horror= `/discover/movie?api_key=${apiKey}&with_genres=27`;
export const original=`/discover/tv?api_key=${apiKey}&with_networks=213`;
export const romance = `/discover/movie?api_key=${apiKey}&with_genres=10749`;