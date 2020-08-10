import React, { useState } from 'react'
import '../nav.css'
import { Link} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Menu, MenuItem } from '@material-ui/core';
import Axios from 'axios';
function Nav() {
    const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  function handleLogout(){
    Axios.get("/logout")
          .then(res=>{
              console.log(res);
              window.location.href = "/";
          })
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <div className="nav_bar" style={{backgroundColor:"#111",color:"white",position:"fixed"}}>
            <Link style={{textDecoration:"none",color:"red",fontSize:"17px",paddingTop:"0.6%",paddingLeft:"1%"}} to="/home">MOVIES TALK</Link>
            <AccountCircleIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{paddingTop:"0.6%",paddingRight:"1%"}}/>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link to="logout" style={{textDecoration:"none",color:"black"}}>Profile</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="logout" style={{textDecoration:"none",color:"black"}}>My List</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/" style={{textDecoration:"none",color:"black"}} onClick={handleLogout}>Log-out</Link></MenuItem>
            </Menu>            
        </div>
    )
}

export default Nav
