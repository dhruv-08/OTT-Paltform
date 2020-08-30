import { ListItem,List,Dialog, Grid, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Data from './Data'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import StarsIcon from '@material-ui/icons/Stars';
import GradeIcon from '@material-ui/icons/Grade';
import AddIcon from '@material-ui/icons/Add';
import movieTrailer from 'movie-trailer';
import FlipMove from 'react-flip-move';
import ReactPlayer from 'react-player'
import DoneIcon from '@material-ui/icons/Done';
import axios from '../Axios/axios'
import Slide from '@material-ui/core/Slide';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CloseIcon from '@material-ui/icons/Close';
import Axios from 'axios';
import { Helmet } from 'react-helmet';
const baseURL="https://image.tmdb.org/t/p/original";
const API_KEY = "7e0f5e57c7fdc5e30af84956f6d5a5c8";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
function Lis() {
    const [movies, setmovies] = useState([]);
    const [bool, setbool] = useState([]);
    const [open, setOpen] =useState(false);
    const [openn, setOpenn] =useState(false);
    const [check, setcheck] = useState(false)
    const [sim, setsim] = useState([])
    const [tt,settt]=useState(false);
    const [trailer, settrailer] = useState("");
    const [success, setsuccess] = useState(false)
    const [err,seterr]=useState(false);
    const [mov, setmov] = useState([])
    const [length, setlength] = useState(0);
    const handleClose = () => {
        setOpen(false);
        settrailer("");
    };
    const handleClos = () => {
        setOpenn(false);
        settrailer("");
    };
    function handleTrail(){
        setOpen(false);
        setOpenn(true);
    }
    function handleDelete(movie){
        setsuccess(true);
            setTimeout(() => {
                setsuccess(false);
            }, 3000);
        Axios.post("/dellist",{movie},{timeout:3000})
          .then(res=>{
              console.log("Tick");
            //   setcheck(!check);
          }).catch(err=>{
            setcheck(!check);
            console.log("Done");
          })     
    }
    useEffect(() => {
        async function fun(){
            const val=await Axios.get("/movlist",{timeout:4000});
            setmovies(val.data[0].list);
            setlength(val.data[0].list.length);
        }
        fun();
     },[check]);
     function handleAlready(){
        seterr(true);
        setTimeout(() => {
            seterr(false);
        }, 2000);
     }
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
        getData();
        async function getData(){
            const find=await axios.get(`/movie/${movie.id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
            setsim(find.data.results.slice(0,9));
        }
    }
    return (
        <div>
            <Helmet>
                <style>{'body { background-color: #1a1a1a; }'}</style>
            </Helmet>
             <Nav check={true}/>
             {length!==0 && <div style={{paddingTop:"50px"}}>
                <div style={{textAlign:"center",padding:"4.5%"}}><h1 style={{color:"white",fontWeight:"lighter",fontSize:"40px"}}>My List</h1></div>
            <FlipMove>
                    {movies.map(movie=>
                    <Grid key={movie.id} container>
                        <Grid item xs={12} style={{paddingBottom:"2%"}}>
                        <div className="poster" style={{width:"1000px",height:"450px",borderRadius:"15px",margin:"auto",boxShadow: "inset 600px 100px 550px #111",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
                        <div style={{paddingLeft:"2%",paddingTop:"1%"}}>
                            <div style={{display:"flex",justifyContent:"space-between"}}><span onClick={()=>handleModal(movie)} style={{color:"white",paddingBottom:"4%",fontWeight:"lighter",paddingTop:"2%",fontSize:"30px"}}>{movie?.title || movie?.name || movie?.original_name}</span>
                            <CloseIcon onClick={()=>handleDelete(movie)} style={{color:"white",fontSize:"20px",paddingRight:"2%",paddingTop:"2%"}}/>
                            </div>
                    <div style={{color:"white",paddingBottom:"2%"}}><GradeIcon style={{fontSize:"15px"}}/> {movie.vote_average!=undefined?<span style={{fontSize:"20px",paddingRight:"2%"}}>{movie.vote_average}</span>:<span style={{fontSize:"20px",paddingRight:"2%"}}>N/A</span>}{movie.release_date!==undefined?<span><CalendarTodayIcon style={{fontSize:"15px"}}/> {movie.release_date}</span>:<span><CalendarTodayIcon style={{fontSize:"15px"}}/> N/A</span>}</div>
                            <div style={{color:"white",width:"400px",fontWeight:"lighter"}}>
                                {movie.overview}
                            </div>
                        </div>
                        </div>
                        </Grid>
                        </Grid>
                    )}
                    </FlipMove>
                    {success===true && <Dialog
                    style={{color:"black"}}
                    open={true}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title" style={{backgroundColor:"black"}}><span style={{color:"white"}}>Deleted from list Successfully</span></DialogTitle>
                    <DialogContent style={{backgroundColor:"black",textAlign:"center"}}>
                    <DialogContentText id="alert-dialog-description">
                    <DoneIcon style={{color:"white"}}/>
                    </DialogContentText>
                    </DialogContent>
                </Dialog>}
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
                        <div style={{paddingLeft:"2%",paddingTop:"2%",paddingBottom:"2%"}} onClick={()=>handleAlready()}><AddIcon style={{color:"white",fontSize:"60px"}}/><br/><span style={{color:"white",fontSize:"20px"}}>My List</span></div>
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
            </div>}
        </div>
    )
}

export default Lis
