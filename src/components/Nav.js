import React, { useEffect, useState } from 'react'
import '../nav.css'
import { Link, useHistory} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Grid, Menu, MenuItem } from '@material-ui/core';
import Axios from 'axios';
import ListIcon from '@material-ui/icons/List';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles({
  list: {
    width: 250,
    height:2220,
    color:"white",
    backgroundColor:"#111"
  },
  fullList: {
    width: 'auto',
  },
});
function Nav({check}) {
  const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const [show, setshow] = useState(false);


    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div className="sc" data-simplebar>
        <List>
        <Link to="/home" style={{textDecoration:"none",color:"white"}}><ListItem button>
            <ListItemText primary={"Home"} />
              </ListItem></Link>
              <Link to="/action" style={{textDecoration:"none",color:"white"}}><ListItem button>
                  <ListItemText primary={"Action"} />
              </ListItem></Link>
              <Link to="/sci_fi" style={{textDecoration:"none",color:"white"}}><ListItem button>
                  <ListItemText primary={"Sci-Fi"} />
              </ListItem></Link>
              <Link to="/comedy" style={{textDecoration:"none",color:"white"}}><ListItem button>
                  <ListItemText primary={"Comedy"} />
              </ListItem></Link>
              <Link to="/mystery" style={{textDecoration:"none",color:"white"}}><ListItem button>
                  <ListItemText primary={"Mystery"} />
              </ListItem></Link>
              <Link to="/crime" style={{textDecoration:"none",color:"white"}}><ListItem button>
                  <ListItemText primary={"Crime"} />
              </ListItem></Link>
              <Link to="/tvShow" style={{textDecoration:"none",color:"white"}}><ListItem button>
                  <ListItemText primary={"Tv Shows"} />
              </ListItem></Link>
              <Link to="/thriller" style={{textDecoration:"none",color:"white"}}><ListItem button>
                  <ListItemText primary={"Thriller"} />
              </ListItem></Link>
              <ListItem button>
                  <ListItemText primary={"Documentaries"} />
              </ListItem>
              <ListItem button>
                  <ListItemText primary={"Horror"} />
              </ListItem>
              <ListItem button>
                  <ListItemText primary={"Romance"} />
              </ListItem>
              <ListItem button>
                  <ListItemText primary={"Animated"} />
              </ListItem>
              <ListItem button>
                  <ListItemText primary={"Drama"} />
              </ListItem>
              <ListItem button>
                  <ListItemText primary={"Family"} />
              </ListItem>
              <ListItem button>
                  <ListItemText primary={"Fantasy"} />
              </ListItem>
              <ListItem button>
                  <ListItemText primary={"History"} />
              </ListItem>
              <ListItem button>
                  <ListItemText primary={"Western"} />
              </ListItem>
              <ListItem button>
                  <ListItemText primary={"Music"} />
              </ListItem>
              <ListItem button>
                  <ListItemText primary={"War"} />
              </ListItem>
              <ListItem button>
                  <ListItemText primary={"Adventure"} />
              </ListItem>      
        </List></div>
      </div>
    );



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  function handleLogout(){
    Axios.get("/logout")
          .then(res=>{
              history.replace("/",null);
          }).catch(err=>{
            console.log("Done");
        })
  }
  useEffect(() => {
    if(check===false){
    window.addEventListener("scroll",()=>{
      if(window.scrollY>50){
          setshow(true);
      }
      else{
          setshow(false);
      }
  });
  }
  else{
    setshow(true);
  }
  return()=>{
    if(check===false){
      window.removeEventListener("scroll",()=>{
        if(window.scrollY> 50){
            setshow(true);
        }
        else{
            setshow(false);
        }
        });
      }
  }
  }, [])
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <div className="nav_bar" style={show===true?{backgroundColor:"#111",color:"white",position:"fixed",transition:"0.2s ease-in"}:{backgroundColor:"transparent",color:"white",position:"fixed",transition:"0.2s ease-out"}}>
        <div style={{}}>
        <Grid container>
          <Grid item xs={3}>
          {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} ><ListIcon style={{color:"white",fontSize:"35px"}}/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
          </Grid>
          <Grid item xs={8}>
          <div style={{paddingTop:"3%"}}><Link style={{textDecoration:"none",color:"red",fontSize:"25px",fontWeight:"bold",fontFamily: 'Alata'}} to="/home">MOVIES TALK</Link>
          </div></Grid>
            </Grid></div>
            <AccountCircleIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{paddingTop:"0.8%",paddingRight:"1.5%",fontSize:"35px"}}/>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link to="/profile" style={{textDecoration:"none",color:"black"}}>My Account</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/list" style={{textDecoration:"none",color:"black"}}>My List</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/search" style={{textDecoration:"none",color:"black"}}>Search</Link></MenuItem>
                <MenuItem onClick={handleLogout}><Link to="/logout" style={{textDecoration:"none",color:"black"}}>Log-Out</Link></MenuItem>
            </Menu>
        </div>
    )
}

export default Nav
