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
import { Dialog, Grid } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import movieTrailer from 'movie-trailer';
import Data from './Data';
import ReactPlayer from 'react-player';
function Search() {
    const [movies, setmovies] = useState([]);
    const [bool, setbool] = useState([]);
    const [open, setOpen] =useState(false);
    const [trailer, settrailer] = useState("");
    const [value, setvalue] = useState("");
    const [search, setsearch] = useState([])
    const handleClose = () => {
        setOpen(false);
        settrailer("");
    };
    function handleModal(movie){
        setOpen(true);
        movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then((url)=>{
            settrailer(url);
        })
        .catch((err)=>{
            console.log("Done");
        })
        setbool(movie);
    }
    async function handlesearch(){
        const vall=await axios.get((request.search+"&query="+value));
        setsearch(vall.data.results);
    }
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
        onChange={(v) =>setvalue(v)}
        onRequestSearch={() =>
            handlesearch()
            // console.log(axios.get(request.search+"&query="+value))
            // setsearch(axios.get(request.search+"&query="+value))
        }
        style={{
            margin: '0 auto',
            maxWidth: 1490
        }}
        />
        {search.length===0 && <h1 style={{color:"white",width:"400px",fontWeight:"lighter",paddingTop:"2%",paddingLeft:"1%"}}>Suggestions</h1>}
    {search.length!==0 && <h1 style={{color:"white",width:"400px",fontWeight:"lighter",paddingTop:"2%",paddingLeft:"1%"}}>Search found ({search.length})</h1>}
       {search.length===0 && <Grid container className="pos" style={{paddingTop:"2%"}}>
       <FlipMove>
                    {movies.map(movie=>
                        <Grid key={movie.id} item xs={4} style={{paddingBottom:"2%"}} onClick={()=>handleModal(movie)}>
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
            </Grid>}
            {search.length!==0 && <Grid container className="pos" style={{paddingTop:"2%"}}>
       <FlipMove>
                    {search.map(movie=>
                        <Grid key={movie.id} item xs={4} style={{paddingBottom:"2%"}} onClick={()=>handleModal(movie)}>
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
            </Grid>}
            </div>
            <Dialog fullScreen open={open} onClose={handleClose}>
                     <Nav check={true}/>
                <Data movie={bool}/>
                 <div className="main">
                     <Grid container>
                         {/* <Grid item xs={1}></Grid> */}
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
        </div>
    )
}

export default Search
