import React, { useEffect, useState } from 'react'
import '../nav.css'
import { Link, useHistory} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Menu, MenuItem } from '@material-ui/core';
import Axios from 'axios';

function Nav({check}) {
  const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const [show, setshow] = useState(false);

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
        if(window.scrollY>50){
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
            <Link style={{textDecoration:"none",color:"red",paddingTop:"0.8%",paddingLeft:"1.5%",fontSize:"25px",fontWeight:"bold",fontFamily: 'Alata'}} to="/home">MOVIES TALK</Link>
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
                <MenuItem onClick={handleLogout}><Link to="/logout" style={{textDecoration:"none",color:"black"}}>Log-Out</Link></MenuItem>
            </Menu>            
        </div>
    )
}

export default Nav
