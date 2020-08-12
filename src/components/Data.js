import Axios from 'axios';
import React from 'react'
import '../data.css'
function Data({movie}) {
    function handleList(){
        var e=[
            {
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
            <header className="banne"  style={{
                backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center"
                }}>
                <div className="banner_conten">
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

export default Data
