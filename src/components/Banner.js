import React, { useEffect, useState } from 'react'
import axios from '../Axios/axios'
import request from "../request";
import '../banner.css'
import Axios from 'axios';
function Banner() {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        async function req(){
            const mov=await axios.get(request.Trending);
            setMovie(mov.data.results[Math.floor(Math.random()*(mov.data.results.length-1))]);
            return request;
        }
        req();
    },[]);
    var i=0;
    function handleList(){
        var e=[
            {
                "id":movie.id,
                "name":movie?.title || movie?.name || movie?.original_name,
                "backdrop_path":movie.backdrop_path,
                "overview":movie.overview,
                "vote_average":movie.vote_average,
                "release_date":movie.release_date,
                "adult":movie.adult
            }
        ]
        console.log(e);
        Axios.post("/list",{e})
        .then(res=>{
            console.log(res);
        })
    }
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
                    <button className="banner__button" onClick={()=>handleList()}>My List</button>
                    </div>
                    <div className="description">
                        {movie.overview}
                    </div>
                </div>
            </header>
    )
}

export default Banner
