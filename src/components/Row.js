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
import FlipMove from 'react-flip-move';
import movieTrailer from 'movie-trailer';
import AddIcon from '@material-ui/icons/Add';
import ReactPlayer from 'react-player'
import Nav from './Nav';
import Slide from '@material-ui/core/Slide';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CircularProgress from '@material-ui/core/CircularProgress';
const API_KEY = "7e0f5e57c7fdc5e30af84956f6d5a5c8";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const baseURL="https://image.tmdb.org/t/p/original";
function Row({title,fetch,large,e}) {
    const history = useHistory();
    const [movies, setmovies] = useState([]);
    const [bool, setbool] = useState([]);
    const [trailer, settrailer] = useState("");
    const [open, setOpen] =useState(false);
    const [openn, setOpenn] =useState(false);
    const [sim, setsim] = useState([])
    const [success,setsuccess]=useState(false);
    const [tt,settt]=useState(false);
    const [err,seterr]=useState(false);
    const [mov, setmov] = useState([])
    const handleClose = () => {
        setOpen(false);
        settrailer("");
    };
    const handleClos = () => {
        setOpenn(false);
        settrailer("");
    };
    console.log(e);
    useEffect(() => {
        async function Data(){
            const val=await axios.get(fetch);
            setmovies(val.data.results);
        }         
        async function fun(){
            const val=await Axios.get("/movlist",{timeout:5000});
            setmov(val.data[0].list);
        }
    fun();
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
        // const page=Math.floor(Math.random()*(5-1))+1;
        getData();
        async function getData(){
            const find=await axios.get(`/movie/${movie.id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
            setsim(find.data.results.slice(0,9));
        }        
    }
    function handleTrail(){
        setOpen(false);
        setOpenn(true);
    }
    function handleList(movie){
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
        var array=[];
        for(var i=0;i<mov.length;i++){
            array[i]=mov[i].id;
        }
        if(!array.includes(movie.id) && tt===false){
            settt(true);
            setsuccess(true);
            setTimeout(() => {
                setsuccess(false);
            }, 3000);
            Axios.post("/list",{e},{timeout:3000})
            .then(res=>{
                console.log("Tick");
            }).catch(err=>{
                console.log("Done");
            })
        }
        else{
            seterr(true);
            setTimeout(() => {
                seterr(false);
            }, 2000);
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
                <div className="main" style={{backgroundColor:"#111",overflowX:"hidden"}}>
                <header className="banne"  style={{
                backgroundSize:"cover",
                position:"relative",
                height:"650px",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${bool?.backdrop_path}")`,
                backgroundPosition:"center center",
                }}><div style={{textAlign:"end",paddingRight:"4%",paddingTop:"2%"}} onClick={handleClose}><CloseIcon style={{position:"fixed"}}/></div>
                <div style={{position:"absolute", paddingTop:"45%",paddingLeft:"2%"}}><span style={{color:"white",paddingTop:"100%",fontWeight:"lighter",fontSize:"30px"}}>{bool?.title || bool?.name || bool?.original_name}</span></div>
                </header>
                
                <div style={{paddingLeft:"2%",paddingTop:"1%"}}>
                    <div style={{color:"white",paddingBottom:"2%",paddingTop:"2%"}}><GradeIcon style={{fontSize:"15px"}}/> {bool.vote_average!=undefined?<span style={{fontSize:"20px",paddingRight:"2%"}}>{bool.vote_average}</span>:<span style={{fontSize:"25px",paddingRight:"2%"}}>N/A</span>}{bool.release_date!==undefined?<span><CalendarTodayIcon style={{fontSize:"15px"}}/> {bool.release_date}</span>:<span><CalendarTodayIcon style={{fontSize:"15px"}}/> N/A</span>}<span style={{color:"white",fontSize:"25px",paddingLeft:"2%"}}>{bool.adult===true?"A":"U/A"}</span><span style={{paddingLeft:"2%"}} onClick={()=>handleTrail()}><YouTubeIcon style={{color:"white",fontSize:"20px"}}/><span style={{fontSize:"25px"}}> Trailer</span></span></div>
                            <div style={{color:"white",fontSize:"20px",width:"1030px",fontWeight:"lighter"}}>
                                {bool.overview}
                            </div>
                        </div>
                        <div style={{paddingLeft:"2%",paddingTop:"2%",paddingBottom:"2%"}} onClick={()=>handleList(bool)}><AddIcon style={{color:"white",fontSize:"60px"}}/><br/><span style={{color:"white",fontSize:"20px"}}>My List</span></div>
                        <Grid container style={{width:"1200px"}} className="rowrow">
                            <FlipMove>
                        {sim.map((movie,idx)=>(
                        movie.backdrop_path?<Grid item xs={4} key={movie?.id}>
                                <img src={`${baseURL}${movie?.backdrop_path}`} alt={movie?.title} className={"row_pos"} onClick={()=>handleModal(movie)}/></Grid>:<div key={movie.id}/>
                            ))}
                            </FlipMove>
                        </Grid>
                    </div>
            </Dialog>
            <Dialog open={openn} maxWidth='xl' onClose={handleClos} TransitionComponent={Transition}>
                <div className="main" style={{backgroundColor:"#111",width:"670px"}}>
                <ReactPlayer controls={true} light={true} url={trailer} className="player"/>
                </div>
            </Dialog>
            {success===true && <Dialog
                    style={{color:"black"}}
                    open={true}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title" style={{backgroundColor:"black"}}><span style={{color:"white"}}>Added in list Successfully</span></DialogTitle>
                    <DialogContent style={{backgroundColor:"black",textAlign:"center"}}>
                    <DialogContentText id="alert-dialog-description">
                    <DoneIcon style={{color:"white"}}/>
                    </DialogContentText>
                    </DialogContent>
                </Dialog>}
                {err===true && <Dialog
                    style={{color:"black"}}
                    open={true}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title" style={{backgroundColor:"black"}}><span style={{color:"white"}}>Already present in your list</span></DialogTitle>
                    <DialogContent style={{backgroundColor:"black",textAlign:"center"}}>
                    <DialogContentText id="alert-dialog-description">
                    <CloseIcon style={{color:"white"}}/>
                    </DialogContentText>
                    </DialogContent>
                </Dialog>}
        </div>
    );
}

export default Row
