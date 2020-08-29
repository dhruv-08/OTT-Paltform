import React, { useEffect, useState } from 'react'
import SearchBar from "material-ui-search-bar";
import { Helmet } from 'react-helmet';
import request from "../request";
import FlipMove from 'react-flip-move';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import StarsIcon from '@material-ui/icons/Stars';
import GradeIcon from '@material-ui/icons/Grade';
import Nav from './Nav'
import "../search.css";
import axios from '../Axios/axios'
import { Grid } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
function Search() {
    const [movies, setmovies] = useState([])
    useEffect(() => {
        async function Data(){
            const val=await axios.get(request.Action);
            setmovies(val.data.results);
        }
        Data();
    }, []);
    return (
        <div>
            <Nav check={true}/>
            <Helmet>
                <style>{'body { background-color: #1a1a1a; }'}</style>
            </Helmet>
            <div style={{paddingTop:"80px"}}>
            <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
            margin: '0 auto',
            maxWidth: 1490
        }}
        />
        <h1 style={{color:"white",width:"400px",fontWeight:"lighter",paddingTop:"2%",paddingLeft:"1%"}}>Suggestions</h1>
       <Grid container className="pos" style={{paddingTop:"2%"}}>
       <FlipMove>
                    {movies.map(movie=>
                        <Grid key={movie.id} item xs={4} style={{paddingBottom:"2%"}}>
                        <div className="poster" style={{width:"480px",height:"300px",borderRadius:"15px",margin:"auto",boxShadow: "inset 200px 100px 550px #111",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
                        <div style={{paddingLeft:"2%",paddingTop:"4%"}}>
                            <span style={{color:"white",paddingBottom:"4%",fontWeight:"lighter",paddingTop:"2%",fontSize:"30px"}}>{movie?.title || movie?.name || movie?.original_name}</span>
                    <div style={{color:"white",paddingBottom:"4%",paddingTop:"3%"}}><GradeIcon style={{fontSize:"15px"}}/> {movie.vote_average!=undefined?<span style={{fontSize:"20px",paddingRight:"2%"}}>{movie.vote_average}</span>:<span style={{fontSize:"20px",paddingRight:"2%"}}>N/A</span>}{movie.release_date!==undefined?<span><CalendarTodayIcon style={{fontSize:"15px"}}/> {movie.release_date}</span>:<span><CalendarTodayIcon style={{fontSize:"15px"}}/> N/A</span>}</div>
                            <div style={{color:"white",width:"400px",fontWeight:"lighter"}} className="dis">
                                {movie.overview}
                            </div>
                        </div>
                        </div>
                        </Grid>
                    )}
                    </FlipMove>
            </Grid>
            </div>
        </div>
    )
}

export default Search
