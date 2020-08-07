import React, { useEffect, useState } from 'react'
import axios from '../Axios/axios'
import '../row.css'
const baseURL="https://image.tmdb.org/t/p/original";
function Row({title,fetch,large}) {
    const [movies, setmovies] = useState([]);
    
    useEffect(() => {
        async function Data(){
            const val=await axios.get(fetch);
            console.log(val.data.results);
            setmovies(val.data.results);
        }
        Data();
    }, [fetch])
    return(
        <div className="row">
            <h1 className="heading">{title}</h1>
            <div className="row_posters">
            {movies.map(movie=>(
                    <img key={movie.id} src={`${baseURL}${large==true?movie.poster_path:movie.backdrop_path}`} alt={movie.title} className={large==true?"row_large":"row_poster"}/>
            ))}
            </div>
        </div>
    );
}

export default Row
