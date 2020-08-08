import React, { useEffect, useState } from 'react'
import axios from '../Axios/axios'
import request from "../request";
import '../banner.css'
import { Button } from '@material-ui/core';
function Banner() {
    const [movie,setMovie]=useState([]);
    const [img,setimg]=useState('');
    useEffect(()=>{
        async function req(){
            const mov=await axios.get(request.Trending);
            setMovie(mov.data.results[Math.floor(Math.random()*(mov.data.results.length-1))]);
            setimg(movie?.backdrop_path);
            return request;
        }
        req();
        
    },[]);
    return (
            <header className="banner"  style={{
                backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center"
                }}>
                <div className="banner_content">
                    <h1 className="title">{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button" >My List</button>
                    </div>
                    <div className="description">
                        {movie.overview}
                    </div>
                </div>
            </header>
    )
}

export default Banner
