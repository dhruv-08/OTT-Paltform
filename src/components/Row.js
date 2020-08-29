import {Dialog, Grid, Menu, MenuItem} from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Data from './Data'
import { Link, useHistory} from 'react-router-dom';
import axios from '../Axios/axios'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import '../row.css';
import StarsIcon from '@material-ui/icons/Stars';
import FlipMove from 'react-flip-move';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player'
import Nav from './Nav';
const baseURL="https://image.tmdb.org/t/p/original";
function Row({title,fetch,large}) {
    const history = useHistory();
    const [movies, setmovies] = useState([]);
    const [bool, setbool] = useState([]);
    const [trailer, settrailer] = useState("");
    const [open, setOpen] =useState(false);
    const handleClose = () => {
        setOpen(false);
        settrailer("");
    };
    useEffect(() => {
        async function Data(){
            const val=await axios.get(fetch);
            setmovies(val.data.results);
        }
        Data();
    }, [fetch]);
    const [anchorEl, setAnchorEl] = useState(null);
    function handleModal(movie){
        setOpen(true);
        movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then((url)=>{
            settrailer(url);
        }).catch(err=>{
            console.log("Done");
        })
        setbool(movie);
    }
    return(
        <div className="row" >
            <h1 className="heading" style={{fontWeight:"lighter",fontSize:"20px",paddingLeft:"1.2%"}}>{title}</h1>
            <div className="row_posters">
                <FlipMove>
            {movies.map(movie=>(
                   movie.backdrop_path?<img key={movie?.id} src={`${baseURL}${large===true?movie?.poster_path:movie?.backdrop_path}`} alt={movie?.title} className={large===true?"row_large":"row_poster"} onClick={()=>handleModal(movie)}/>:<div key={movie.id}>{console.log(movie?.name||movie?.title)}</div>
            ))}
            </FlipMove>
            </div>
            <>
            <Dialog fullScreen open={open} onClose={handleClose}>
            <Nav check={true}/>
                <Data movie={bool}/>
                <div className="main" style={{backgroundColor:"#111"}}>
                    <Grid container>
                        <Grid item xs={6}>
                            <ReactPlayer controls={true} light={true} url={trailer} className="player"/>
                        </Grid>
                        <Grid item xs={6} style={{paddingTop:"14%"}}>
                            <Grid container>
                            <Grid item xs={4}>
                                <h1 style={{color:"white"}}><StarsIcon/><span> {bool.vote_average}(Rating)</span></h1>
                            </Grid>
                            <Grid item xs={4}>
                                <h1 style={{color:"white"}}><CalendarTodayIcon/><span> {bool.release_date}</span></h1>
                            </Grid>
                            <Grid item xs={4}>
                            <h1 style={{color:"white"}}>{bool.adult===true?"A":"U/A"}</h1>
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    </div>
            </Dialog>
            </>
        </div>
    );
}

export default Row
