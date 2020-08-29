import {Dialog, Grid, Menu, MenuItem} from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Data from './Data'
import { Link, useHistory} from 'react-router-dom';
import {  DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import GradeIcon from '@material-ui/icons/Grade';
import Axios from 'axios';
import '../data.css'
import DoneIcon from '@material-ui/icons/Done';
import axios from '../Axios/axios'
import CloseIcon from '@material-ui/icons/Close';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import '../row.css';
import StarsIcon from '@material-ui/icons/Stars';
import FlipMove from 'react-flip-move';
import movieTrailer from 'movie-trailer';
import AddIcon from '@material-ui/icons/Add';
import ReactPlayer from 'react-player'
import Nav from './Nav';
import Slide from '@material-ui/core/Slide';
const API_KEY = "7e0f5e57c7fdc5e30af84956f6d5a5c8";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const baseURL="https://image.tmdb.org/t/p/original";
function Row({title,fetch,large}) {
    const history = useHistory();
    const [movies, setmovies] = useState([]);
    const [bool, setbool] = useState([]);
    const [trailer, settrailer] = useState("");
    const [open, setOpen] =useState(false);
    const [sim, setsim] = useState([])
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
        });
        setbool(movie);
        const page=Math.floor(Math.random()*(5-1))+1;
        getData();
        async function getData(){
            const find=await axios.get(`/movie/${movie.id}/similar?api_key=${API_KEY}&language=en-US&page=${page}`)
            setsim(find.data.results.slice(0,9));
        }
        
        
        
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
            <Dialog open={open} maxWidth='lg' onClose={handleClose} TransitionComponent={Transition}>
                <div className="main" style={{backgroundColor:"#111"}}>
                <header className="banne"  style={{
                backgroundSize:"cover",
                position:"relative",
                height:"650px",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${bool?.backdrop_path}")`,
                backgroundPosition:"center center",
                }}><div style={{textAlign:"end",paddingRight:"4%",paddingTop:"2%"}} onClick={handleClose}><CloseIcon style={{position:"fixed"}}/></div>
                <div style={{position:"absolute", paddingTop:"60%",paddingLeft:"2%"}}><span style={{color:"white",paddingTop:"100%",fontWeight:"lighter",fontSize:"30px"}}>{bool?.title || bool?.name || bool?.original_name}</span></div>
                </header>
                
                <div style={{paddingLeft:"2%",paddingTop:"1%"}}>
                    <div style={{color:"white",paddingBottom:"2%",paddingTop:"2%"}}><GradeIcon style={{fontSize:"15px"}}/> {bool.vote_average!=undefined?<span style={{fontSize:"20px",paddingRight:"2%"}}>{bool.vote_average}</span>:<span style={{fontSize:"20px",paddingRight:"2%"}}>N/A</span>}{bool.release_date!==undefined?<span><CalendarTodayIcon style={{fontSize:"15px"}}/> {bool.release_date}</span>:<span><CalendarTodayIcon style={{fontSize:"15px"}}/> N/A</span>}</div>
                            <div style={{color:"white",fontSize:"20px",width:"1030px",fontWeight:"lighter"}}>
                                {bool.overview}
                            </div>
                        </div>
                        <div style={{paddingLeft:"2%",paddingTop:"2%"}}><AddIcon style={{color:"white",fontSize:"60px"}}/><br/><span style={{color:"white",fontSize:"20px"}}>My List</span></div>
                        <Grid container>
                        {sim.map((movie,idx)=>(
                                movie.backdrop_path?<Grid item={6} key={movie?.id}><img  src={`${baseURL}${movie?.backdrop_path}`} alt={movie?.title} className={"row_poster"} onClick={()=>handleModal(movie)}/>:<div key={movie.id}>{console.log(movie?.name||movie?.title)}</div></Grid>:<div key={idx}/>
                            ))}
                            
                        </Grid>
                    {/* <Grid container>
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
                    </Grid> */}

                    </div>
            </Dialog>
        </div>
    );
}

export default Row
