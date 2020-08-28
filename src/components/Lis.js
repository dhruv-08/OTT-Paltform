import { ListItem,List,Dialog, Grid, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Data from './Data'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import StarsIcon from '@material-ui/icons/Stars';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import movieTrailer from 'movie-trailer';
import FlipMove from 'react-flip-move';
import ReactPlayer from 'react-player'
import Axios from 'axios';
const baseURL="https://image.tmdb.org/t/p/original";
function Lis() {
    const [movies, setmovies] = useState([]);
    const [bool, setbool] = useState([]);
    const [open, setOpen] =useState(false);
    const [check, setcheck] = useState(false)
    const [trailer, settrailer] = useState("");
    const [success, setsuccess] = useState(false)
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
              console.log("Done!!");
            //   setcheck(!check);
          }).catch(err=>{
            setcheck(!check);
              console.log(err);
          })
        
        //   window.location.reload(false);      
    }
    useEffect(() => {
        async function fun(){
            const val=await Axios.get("/movlist",{timeout:2000});
            setmovies(val.data[0].list);
 
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
            console.log(err);
        })
        setbool(movie);
    }
    return (
        <div>
           <Nav/>
           <FlipMove>
           {movies.map(movie=>(
               movie!==null &&
               <div key={movie.id}>
                    <List key={movie.id} component="nav" style={{paddingTop:"50px"}}>
                    <ListItem button>
                    <Grid container>
                                    <Grid item xs style={{padding:"2%"}}>
                                    <img style={{width:"300px",height:"300px",paddingLeft:"100px"}} src={`${baseURL}${movie.backdrop_path}`} onClick={()=>handleModal(movie)} alt="movie"/>
                                    </Grid>
                                    <Grid item xs style={{padding:"7%"}}>
                                       <h1>{movie.name}</h1>
                                       <p>{movie.overview}</p>
                                    </Grid>
                                    <Grid item xs style={{paddingTop:"7%"}}>
                                       <HighlightOffIcon style={{fontSize:"30px"}} onClick={()=>handleDelete(movie)}/>
                                       
                                    </Grid>
                        </Grid>
                        </ListItem>
                    </List>
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
                </div>
            ))}
            </FlipMove>
            {success===true && <Dialog
                    open={true}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">Deleted from list Successfully</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    <img src="https://thumbs.gfycat.com/QuaintLikelyFlyingfish-size_restricted.gif" alt="success" style={{width:"250px",height:"200px"}}/>
                    </DialogContentText>
                    </DialogContent>
                </Dialog>}

        </div>
    )
}

export default Lis
