import {Dialog, Grid, Menu, MenuItem } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Data from './Data'
import Nav from './Nav'
import axios from '../Axios/axios'
import Link from '@material-ui/core/Link';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import '../row.css';
import StarsIcon from '@material-ui/icons/Stars';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
const baseURL="https://image.tmdb.org/t/p/original";
function Row({title,fetch,large}) {
    const history = useHistory();
    const [movies, setmovies] = useState([]);
    const [bool, setbool] = useState([]);
    const [trailer, settrailer] = useState("");
    const [open, setOpen] =useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClic = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClos = () => {
        setAnchorEl(null);
    };
    const handleClose = () => {
        setOpen(false);
        settrailer("");
    };
    function handleLogout(){
        Axios.get("/logout")
              .then(res=>{
                  console.log(res);
                  history.replace("/",null);
              })
      }
    useEffect(() => {
       
        async function Data(){
            const val=await axios.get(fetch);
            setmovies(val.data.results);
        }
        Data();
    }, [fetch]);
    function handlepro(){
        history.push("/profile");
    }
    function handlelis(){
        history.push("/list");
    }
    function handleModal(movie){
        setOpen(true);
        movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then((url)=>{
            settrailer(url);
        })
        setbool(movie);
    }
    return(
        <div className="row">
            <h1 className="heading">{title}</h1>
            <div className="row_posters">
            {movies.map(movie=>(
                   <img key={movie?.id} src={`${baseURL}${large===true?movie?.poster_path:movie?.backdrop_path}`} alt={movie?.title} className={large===true?"row_large":"row_poster"} onClick={()=>handleModal(movie)}/>
            ))}
            </div>
            <>
            <Dialog fullScreen open={open} onClose={handleClose}>
            <Nav/>
                <Data movie={bool}/>
                <div className="main" >
                    <Grid container spacing={2}>
                        <Grid item xs>
                            <ReactPlayer controls={true} light={true} url={trailer} className="player"/>
                        </Grid>
                        <Grid item xs style={{paddingTop:"14%"}}>
                            <Grid container spacing={3}>
                            <Grid item xs>
                                <h1 style={{color:"white"}}><StarsIcon/><span> {bool.vote_average}(Rating)</span></h1>
                            </Grid>
                            <Grid item xs>
                                <h1 style={{color:"white"}}><CalendarTodayIcon/><span> {bool.release_date}</span></h1>
                            </Grid>
                            <Grid item xs>
                            <h1 style={{color:"white"}}>{bool.adult===true?"A":"R"}</h1>
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
