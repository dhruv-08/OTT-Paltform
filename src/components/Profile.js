import { Grid } from '@material-ui/core'
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
        <div style={{backgroundColor:"white",height:"100vh",width:"100%"}}>
            <Nav/>
            <div style={{paddingTop:"8%"}}>
                <Grid container direction="row" >
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <h1>Account</h1><br/>
                        <hr/>
                        <br/>
                        <Grid container>
                            <Grid item xs={5}>
                                <span style={{fontSize:"20px",color:"grey"}}>MemberShip & Billing</span>
                            </Grid>
                            <Grid item xs={7}>
                                <div style={{lineHeight:"30px"}}>
                                <span style={{fontSize:"20px",fontWeight:"bold"}}>{name}</span><br/>
                                <span style={{fontSize:"20px",color:"grey"}}>{email}</span><br/>
                                <span style={{fontSize:"20px",color:"grey"}}>Password:********</span><br/>
                                </div><br/>
                                <hr/>
                                <br/>
                                <Grid container>
                                    <Grid item xs={2}>
                                    <img alt="hello" src={process.env.PUBLIC_URL + `/visa.png`} style={{width:"50px"}}/>
                                    </Grid>
                                    <Grid item xs={8} style={{paddingTop:"4%"}}>
                                        <span style={{fontWeight:"bold"}}>**** **** **** 4242</span>
                                    </Grid>
                                </Grid>
                            </Grid><br/>
                            <Grid item xs={5} style={{paddingTop:"9%"}}>
                            <span style={{fontSize:"20px",color:"grey"}}>Plan</span>
                            </Grid>
                            <Grid item xs={7}>
                                <br/>
                                <hr/><br/><br/>
                                <div><span style={{fontSize:"20px",fontWeight:"bold"}}>Premium  </span><span style={{border:"3px solid black",width:"30px"}}> <span style={{padding:"2%"}}>Plan</span></span></div>
                            </Grid>
                            <Grid item xs={5} style={{paddingTop:"10%"}}><br/>
                            <span style={{fontSize:"20px",color:"grey"}}>Setting</span>
                            </Grid>
                            <Grid item xs={7} style={{paddingTop:"1%"}}>
                                <br/><br/>
                                <hr/><br/><br/>
                                <Link to="/change" style={{color:"blue",textDecoration:"none"}}>Change Password</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Profile
