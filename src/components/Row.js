import { AppBar, Button, Dialog, Divider, IconButton, List, ListItem, ListItemText, makeStyles, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useEffect, useState } from 'react'
import Data from './Data'
import axios from '../Axios/axios'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../row.css';
import { Link } from 'react-router-dom';
const baseURL="https://image.tmdb.org/t/p/original";
const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));
function Row({title,fetch,large}) {
    const [movies, setmovies] = useState([]);
    const [bool, setbool] = useState([]);
    const classes = useStyles();
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
    };
    useEffect(() => {
        async function Data(){
            const val=await axios.get(fetch);
            // console.log(val.data.results);
            setmovies(val.data.results);
        }
        Data();
    }, [fetch]);
    function handleModal(movie){
        setOpen(true);
        setbool(movie);
    }
    return(
        <div className="row">
            <h1 className="heading">{title}</h1>
            <div className="row_posters">
            {movies.map(movie=>(
                    <img key={movie.id} src={`${baseURL}${large==true?movie.poster_path:movie.backdrop_path}`} alt={movie.title} className={large==true?"row_large":"row_poster"} onClick={()=>handleModal(movie)}/>
            ))}
            </div>
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
                <MenuItem onClick={handleClos}><Link to="logout" style={{textDecoration:"none",color:"black"}}>Log-out</Link></MenuItem>
            </Menu>
            </div>
                <Data movie={bool}/>
            </Dialog>
        </div>
    );
}

export default Row
