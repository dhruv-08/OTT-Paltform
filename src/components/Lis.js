import { ListItem,List,Dialog, Grid, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Data from './Data'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import StarsIcon from '@material-ui/icons/Stars';
import GradeIcon from '@material-ui/icons/Grade';
import movieTrailer from 'movie-trailer';
import FlipMove from 'react-flip-move';
import ReactPlayer from 'react-player'
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import Axios from 'axios';
import { Helmet } from 'react-helmet';
const baseURL="https://image.tmdb.org/t/p/original";
function Lis() {
    const [movies, setmovies] = useState([]);
    const [bool, setbool] = useState([]);
    const [open, setOpen] =useState(false);
    const [check, setcheck] = useState(false)
    const [trailer, settrailer] = useState("");
    const [success, setsuccess] = useState(false)
    const [length, setlength] = useState(0);
    const handleClose = () => {
        setOpen(false);
        settrailer("");
    };
    function handleDelete(movie){
        setsuccess(true);
            setTimeout(() => {
                setsuccess(false);
            }, 2000);
        Axios.post("/dellist",{movie},{timeout:2000})
          .then(res=>{
              console.log("Tick");
            //   setcheck(!check);
          }).catch(err=>{
            setcheck(!check);
            console.log("Done");
          })
        
        //   window.location.reload(false);      
    }
    useEffect(() => {
        async function fun(){
            const val=await Axios.get("/movlist",{timeout:2000});
            setmovies(val.data[0].list);
            setlength(val.data[0].list.length);
            console.log(length)
        }
        fun();
     },[check]);
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
    return (
        // <div>
        //    <Nav check={true}/>
        //    <FlipMove>
        //    {movies.map(movie=>(
        //        movie!==null &&
        //        <div key={movie.id}>
        //             <List key={movie.id} component="nav" style={{paddingTop:"50px"}}>
        //             <ListItem button>
        //             <Grid container>
        //                             <Grid item xs style={{padding:"2%"}}>
        //                             <img style={{width:"300px",height:"300px",paddingLeft:"100px"}} src={`${baseURL}${movie.backdrop_path}`} onClick={()=>handleModal(movie)} alt="movie"/>
        //                             </Grid>
        //                             <Grid item xs style={{padding:"7%"}}>
        //                                <h1>{movie.name}</h1>
        //                                <p>{movie.overview}</p>
        //                             </Grid>
        //                             <Grid item xs style={{paddingTop:"7%"}}>
        //                                <HighlightOffIcon style={{fontSize:"30px"}} onClick={()=>handleDelete(movie)}/>
                                       
        //                             </Grid>
        //                 </Grid>
        //                 </ListItem>
        //             </List>
        //             <Dialog fullScreen open={open} onClose={handleClose}>
        //             <Nav/>
        //         <Data movie={bool}/>
        //         <div className="main" >
        //             <Grid container spacing={2}>
        //                 <Grid item xs>
        //                     <ReactPlayer controls={true} light={true} url={trailer} className="player"/>
        //                 </Grid>
        //                 <Grid item xs style={{paddingTop:"14%"}}>
        //                     <Grid container spacing={3}>
        //                     <Grid item xs>
        //                         <h1 style={{color:"white"}}><StarsIcon/><span> {bool.vote_average}(Rating)</span></h1>
        //                     </Grid>
        //                     <Grid item xs>
        //                         <h1 style={{color:"white"}}><CalendarTodayIcon/><span> {bool.release_date}</span></h1>
        //                     </Grid>
        //                     <Grid item xs>
        //                     <h1 style={{color:"white"}}>{bool.adult===true?"A":"R"}</h1>
        //                     </Grid>
        //                     </Grid>
        //                 </Grid>
        //             </Grid>
        //             </div>
        //     </Dialog>
        //         </div>
        //     ))}
        //     </FlipMove>
        //     {success===true && <Dialog
        //             open={true}
        //             aria-labelledby="alert-dialog-title"
        //             aria-describedby="alert-dialog-description">
        //             <DialogTitle id="alert-dialog-title">Deleted from list Successfully</DialogTitle>
        //             <DialogContent>
        //             <DialogContentText id="alert-dialog-description">
        //             <img src="https://thumbs.gfycat.com/QuaintLikelyFlyingfish-size_restricted.gif" alt="success" style={{width:"250px",height:"200px"}}/>
        //             </DialogContentText>
        //             </DialogContent>
        //         </Dialog>}

        // </div>
        <div>
            <Helmet>
                <style>{'body { background-color: #1a1a1a; }'}</style>
            </Helmet>
             <Nav check={true}/>
             {length===1 && <span style={{color:"white",fontWeight:"lighter"}}>EMPTY</span>}
             {length===0 && <span style={{color:"white",fontWeight:"lighter"}}>EMPTY</span>}
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
              <Dialog fullScreen open={open} onClose={handleClose}>
                     <Nav/>
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
            </div>}
        </div>
    )
}

export default Lis
