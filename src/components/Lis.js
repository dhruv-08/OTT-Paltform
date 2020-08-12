import { ListItem,List,Dialog, Menu, MenuItem, Grid } from '@material-ui/core'
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Data from './Data'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import StarsIcon from '@material-ui/icons/Stars';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
const baseURL="https://image.tmdb.org/t/p/original";
function Lis() {
    const [movies, setmovies] = useState([]);
    const [bool, setbool] = useState([]);
    const [open, setOpen] =useState(false);
    const [trailer, settrailer] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    useEffect(() => {
       async function fun(){
           const val=await Axios.get("/movlist");
           console.log(val.data[0].list[0].name);
           setmovies(val.data[0].list);
       }
       fun();
    }, []);
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
                  window.location.href = "/";
              })
      }
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
           {movies.map(movie=>(
               <div>
                    <List component="nav" style={{paddingTop:"50px"}} onClick={()=>handleModal(movie)}>
                    <ListItem button>
                    <Grid container>
                                    <Grid item xs style={{padding:"2%"}}>
                                    <img style={{width:"300px",height:"300px",paddingLeft:"100px"}} src={`${baseURL}${movie.backdrop_path}`}/>
                                    </Grid>
                                    <Grid item xs style={{padding:"7%"}}>
                                       <h1>{movie.name}</h1>
                                       <p>{movie.overview}</p>
                                    </Grid>
                        </Grid>
                        </ListItem>
                    </List>
                    <Dialog fullScreen open={open} onClose={handleClose}>
            <div className="nav_bar" style={{backgroundColor:"#111",color:"white",position:"fixed"}}>
            <Link style={{textDecoration:"none",color:"red",fontSize:"17px",paddingTop:"0.6%",paddingLeft:"1%"}} onClick={handleClose}>MOVIES TALK</Link>
            <AccountCircleIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClic} style={{paddingTop:"0.6%",paddingRight:"1%"}}/>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClos}
            >
                <MenuItem onClick={handleClos}><Link to="logout" style={{textDecoration:"none",color:"black"}}>Profile</Link></MenuItem>
                <MenuItem onClick={handleClos}><Link to="logout" style={{textDecoration:"none",color:"black"}}>My List</Link></MenuItem>
                <MenuItem onClick={handleClos}><Link to="/" style={{textDecoration:"none",color:"black"}} onClick={handleLogout} >Log-out</Link></MenuItem>
            </Menu>
            </div>
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
           
          
        </div>
    )
}

export default Lis
