import React, { useEffect, useState } from 'react'
import SearchBar from "material-ui-search-bar";
import {  DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import request from "../request";
import FlipMove from 'react-flip-move';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import StarsIcon from '@material-ui/icons/Stars';
import GradeIcon from '@material-ui/icons/Grade';
import Nav from './Nav'
import AddIcon from '@material-ui/icons/Add';
import "../search.css";
import axios from '../Axios/axios'
import { Dialog, Grid } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import movieTrailer from 'movie-trailer';
import Data from './Data';
import Slide from '@material-ui/core/Slide';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ReactPlayer from 'react-player';
import Axios from 'axios';
const API_KEY = "7e0f5e57c7fdc5e30af84956f6d5a5c8";
const baseURL="https://image.tmdb.org/t/p/original";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Search() {
    const [movies, setmovies] = useState([]);
    const [bool, setbool] = useState([]);
    const [open, setOpen] =useState(false);
    const [openn, setOpenn] =useState(false);
    const [sim, setsim] = useState([])
    const [success,setsuccess]=useState(false);
    const [trailer, settrailer] = useState("");
    const [value, setvalue] = useState("");
    const [tt,settt]=useState(false);
    const [err,seterr]=useState(false);
    const [mov, setmov] = useState([])
    const [search, setsearch] = useState([])
    const handleClose = () => {
        setOpen(false);
        settrailer("");
    };
    function handleTrail(){
        setOpen(false);
        setOpenn(true);
    }
    const handleClos = () => {
        setOpenn(false);
        settrailer("");
    };
    useEffect(() => {
        async function fun(){
            const val=await Axios.get("/movlist",{timeout:5000});
            setmov(val.data[0].list);
        }
    fun();
    }, [])
    function handleModal(movie){
        setOpen(true);
        movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then((url)=>{
            settrailer(url);
        }).catch(err=>{
            console.log("Done");
        });
        setbool(movie);
        getData();
        async function getData(){
            const find=await axios.get(`/movie/${movie.id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
            setsim(find.data.results.slice(0,9));
        }        
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
        if(!array.includes(movie.id)){
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
            // window.location.reload(false);
        }
        else{
            seterr(true);
            setTimeout(() => {
                seterr(false);
            }, 2000);
        }
    }
    async function handlesearch(){
        const vall=await axios.get((request.search+"&query="+value));
        setsearch(vall.data.results);
    }
    return (
        <div>
            <Nav check={true}/>
            <Helmet>
                <style>{'body { background-color: #1a1a1a; }'}</style>
            </Helmet>
            <div style={{paddingTop:"80px"}}>
            <SearchBar
        onChange={(v) =>setvalue(v)}
        onRequestSearch={() =>
            {value!="" && handlesearch()}
            // console.log(axios.get(request.search+"&query="+value))
            // setsearch(axios.get(request.search+"&query="+value))
        }
        style={{
            margin: '0 auto',
            maxWidth: 1490
        }}
        />
        {search.length===0 && <h1 style={{color:"white",width:"400px",fontWeight:"lighter",paddingTop:"2%",paddingLeft:"1%"}}>Want to find movie ? Search</h1>}
    {search.length!==0 && <h1 style={{color:"white",width:"400px",fontWeight:"lighter",paddingTop:"2%",paddingLeft:"1%"}}>Search found ({search.length})</h1>}
       {/* {search.length===0 && <Grid container className="pos" style={{paddingTop:"2%"}}>
       <FlipMove>
                    {movies.map(movie=>
                        !movie.backdrop_path?<Grid key={movie.id} item xs={4} style={{paddingBottom:"2%"}} onClick={()=>handleModal(movie)}>
                        <div className="poster" style={{width:"480px",height:"300px",borderRadius:"15px",margin:"auto",boxShadow: "inset 200px 100px 550px #111",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
                        <div style={{paddingLeft:"2%",paddingTop:"4%"}}>
                            <span style={{color:"white",paddingBottom:"4%",fontWeight:"lighter",paddingTop:"2%",fontSize:"30px"}}>{movie?.title || movie?.name || movie?.original_name}</span>
                    <div style={{color:"white",paddingBottom:"4%",paddingTop:"3%"}}><GradeIcon style={{fontSize:"15px"}}/> {movie.vote_average!=undefined?<span style={{fontSize:"20px",paddingRight:"2%"}}>{movie.vote_average}</span>:<span style={{fontSize:"20px",paddingRight:"2%"}}>N/A</span>}{movie.release_date!==undefined?<span><CalendarTodayIcon style={{fontSize:"15px"}}/> {movie.release_date}</span>:<span><CalendarTodayIcon style={{fontSize:"15px"}}/> N/A</span>}</div>
                            <div style={{color:"white",width:"400px",fontWeight:"lighter"}} className="dis">
                                {movie.overview}
                            </div>
                        </div>
                        </div>
                        </Grid>:<div key={movie.id}/>
                    )}
                    </FlipMove>
            </Grid>} */}
            {search.length!==0 && <Grid container className="pos" style={{paddingTop:"2%"}}>
       <FlipMove>
                    {search.map(movie=>
                        movie.backdrop_path?<Grid key={movie.id} item xs={4} style={{paddingBottom:"2%"}} onClick={()=>handleModal(movie)}>
                        <div className="poster" style={{width:"480px",height:"300px",borderRadius:"15px",margin:"auto",boxShadow: "inset 200px 100px 550px #111",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
                        <div style={{paddingLeft:"2%",paddingTop:"4%"}}>
                            <span style={{color:"white",paddingBottom:"4%",fontWeight:"lighter",paddingTop:"2%",fontSize:"30px"}}>{movie?.title || movie?.name || movie?.original_name}</span>
                    <div style={{color:"white",paddingBottom:"4%",paddingTop:"3%"}}><GradeIcon style={{fontSize:"15px"}}/> {movie.vote_average!=undefined?<span style={{fontSize:"20px",paddingRight:"2%"}}>{movie.vote_average}</span>:<span style={{fontSize:"20px",paddingRight:"2%"}}>N/A</span>}{movie.release_date!==undefined?<span><CalendarTodayIcon style={{fontSize:"15px"}}/> {movie.release_date}</span>:<span><CalendarTodayIcon style={{fontSize:"15px"}}/> N/A</span>}</div>
                            <div style={{color:"white",width:"400px",fontWeight:"lighter"}} className="dis">
                                {movie.overview}
                            </div>
                        </div>
                        </div>
                        </Grid>:<div key={movie.id}/>
                    )}
                    </FlipMove>
            </Grid>}
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
    )
}

export default Search
