import {Dialog, Grid, Menu, MenuItem} from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Data from './Data'
import { Link, useHistory} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from '../Axios/axios'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import '../row.css';
import Axios from 'axios';
import StarsIcon from '@material-ui/icons/Stars';
import FlipMove from 'react-flip-move';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player'
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClos = () => {
    setAnchorEl(null);
  };
    function handleModal(movie){
        setOpen(true);
        movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then((url)=>{
            settrailer(url);
        }).catch(err=>{
            console.log(err);
        })
        setbool(movie);
    }
    return(
        <div className="row" >
            <h1 className="heading">{title}</h1>
            <div className="row_posters">
                <FlipMove>
            {movies.map(movie=>(
                   movie.backdrop_path?<img key={movie?.id} src={`${baseURL}${large===true?movie?.poster_path:movie?.backdrop_path}`} alt={movie?.title} className={large===true?"row_large":"row_poster"} onClick={()=>handleModal(movie)}/>:<div key={movie.id}>{console.log(movie?.name||movie?.title)}</div>
            ))}
            </FlipMove>
            </div>
            <>
            <Dialog fullScreen open={open} onClose={handleClose}>
            <div className="nav_bar" style={{backgroundColor:"#111",color:"white",position:"fixed",height:"50px"}}>
            <Link to="/home" style={{textDecoration:"none",color:"red",fontSize:"17px",paddingTop:"0.8%",paddingLeft:"1.5%",fontWeight:"bold",fontFamily: 'Alata'}} onClick={()=>setOpen(false)}>MOVIES TALK</Link>
            <AccountCircleIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{paddingTop:"0.8%",paddingRight:"1.5%",fontSize:"25px"}}/>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem onClick={handleClos}><Link to="/list" style={{textDecoration:"none",color:"black"}}>My List</Link></MenuItem>
            </Menu>            
        </div>
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
