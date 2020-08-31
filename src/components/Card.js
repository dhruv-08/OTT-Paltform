import { Grid } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import FlipMove from 'react-flip-move';
import GradeIcon from '@material-ui/icons/Grade';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CloseIcon from '@material-ui/icons/Close';
import Nav from './Nav';
import '../card.css'
function Card() {
    const [movies, setmovies] = useState([])
    useEffect(() => {
        async function fun(){
            const val=await Axios.get("/movlist",{timeout:2000});
            setmovies(val.data[0].list);
            console.log(val.data[0].list);
        }
        fun();
    }, [])
    return (
        // style={{backgroundColor:"#1a1a1a"}}
        <div style={{backgroundColor:"#1a1a1a"}}>
            <Nav check={true}/>
            <div style={{paddingTop:"50px"}}>
                <div style={{textAlign:"center",padding:"2%"}}><h1 style={{color:"white",fontWeight:"lighter",fontSize:"40px"}}>My List</h1></div>
            <FlipMove>
                    {movies.map(movie=>
                    <Grid container>
                        <Grid item xs={12} style={{paddingBottom:"2%"}}>
                        <div className="poster" style={{width:"1000px",height:"450px",borderRadius:"15px",margin:"auto",boxShadow: "inset 600px 100px 550px #111",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
                        <div style={{paddingLeft:"2%",paddingTop:"1%"}}>
                            <div style={{display:"flex",justifyContent:"space-between"}}><span style={{color:"white",paddingBottom:"4%",fontWeight:"lighter",paddingTop:"2%",fontSize:"30px"}}>{movie?.title || movie?.name || movie?.original_name}</span>
                            <CloseIcon style={{color:"white",fontSize:"20px",paddingRight:"2%",paddingTop:"2%"}}/>
                            </div>
                    <div style={{color:"white",paddingBottom:"2%"}}><GradeIcon style={{fontSize:"15px"}}/> {movie.vote_average!==undefined?<span style={{fontSize:"20px",paddingRight:"2%"}}>{movie.vote_average}</span>:<span style={{fontSize:"20px",paddingRight:"2%"}}>N/A</span>}{movie.release_date!==undefined?<span><CalendarTodayIcon style={{fontSize:"15px"}}/> {movie.release_date}</span>:<span><CalendarTodayIcon style={{fontSize:"15px"}}/> N/A</span>}</div>
                            <div style={{color:"white",width:"400px",fontWeight:"lighter"}}>
                                {movie.overview}
                            </div>
                        </div>
                        </div>
                        </Grid>
                        </Grid>
                    )}
                    </FlipMove>
            </div>
        </div>
    )
}

export default Card
