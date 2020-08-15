import { List, ListItem } from '@material-ui/core'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Nav from './Nav'
function Profile() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    useEffect(() => {
        async function fun(){
            const val=await Axios.get("/profile");
            setname(val.data[0].username);
            setemail(val.data[0].email);
        }
        fun();
    }, [])
    return (
        <div style={{backgroundColor:"#111",color:"white",height:"100%",width:"100%"}}>
            <Nav/>
            <div style={{paddingTop:"50px"}}>
                <center><h1 style={{fontSize:"200px",padding:"3%"}}>HEY</h1></center>
            <List component="nav" style={{fontSize:"60px"}}>
                    <ListItem button>
                        Username: {name}
                    </ListItem>
                    <ListItem button>
                        Email: {email}
                    </ListItem>
                    <ListItem button>
                        <Link to="/change" style={{textDecoration:"none",color:"white"}}>Change Password ?</Link>
                    </ListItem>
                    
                    </List>
            </div>
        </div>
    )
}

export default Profile
