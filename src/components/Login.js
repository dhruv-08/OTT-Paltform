import Axios from 'axios';
import React, { useState } from 'react'
import Icon from '@material-ui/icons/Send';
import { Alert, AlertTitle } from '@material-ui/lab';
import "../App.css";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField } from '@material-ui/core';
function Login() {
    const [loguser, setloguser] = useState("");
    const [logpass, setlogpass] = useState("");
    const [user, setuser] = useState("");
    const [pass, setpass] = useState("");
    const [open, setOpen] = useState(false);
    const [success, setsuccess] = useState(false);
    const [sign, setsign] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
          }, 3000);
    };

    const handleSuc = () => {
        setsuccess(true);
        setTimeout(() => {
            setsuccess(false);
          }, 3000);
    };
    const handlesign = () => {
        setsign(true);
        setTimeout(() => {
            setsign(false);
          }, 3000);
    };
    function handleSignup(e){
        e.preventDefault();
        Axios.post("/signup",{username:user,password:pass})
        .then(res=>{
            console.log(res);
            setuser("");
            setpass("");
            handleSuc();
        }).catch((res)=>{
            setuser("");
            setpass("");
            handlesign();
        });
      console.log("hello");
    }
    async function handleLogin(e){
        e.preventDefault();
        await Axios.post("/login",{username:loguser,password:logpass})
        .then((res)=>{
            console.log(res);
            setlogpass("");
            setloguser("");
            window.location.href="/home";
        })
        .catch((res)=>{
            setlogpass("");
        setloguser("");
        handleClickOpen();
        });
        
      console.log("hel");
    }
    return (
         <div className="App" >
             {success===true && <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                <strong>Sign-up successfully</strong>
            </Alert>}
            {sign===true &&<div>
                <Alert severity="error" style={{transition:"ease-in"}}>
                <AlertTitle>Already registered</AlertTitle>
                <strong>check it out!</strong>
                </Alert>
                </div>}
             {open===true &&<div>
                <Alert severity="error" style={{transition:"ease-in"}}>
                <AlertTitle>Invalid usename or password</AlertTitle>
                <strong>check it out!</strong>
                </Alert>
                </div>}
                    <Grid container spacing={5} style={{paddingTop:"8%"}}>
                    <Grid item xs></Grid>
                        <Grid item xs>
                        <form noValidate autoComplete="off" onSubmit={(e)=>(handleLogin(e))} style={{paddingTop:"10%"}}>
                            <h1 className="log">Log-In</h1><br/>
                            <TextField id="outlined-basic" label="Username*" variant="outlined" value={loguser} name="username" onChange={(e)=>setloguser(e.target.value)} style={{width:"400px"}}/><br/><br/>
                            <TextField type="password" id="outlined-basic" label="Password*" variant="outlined" value={logpass} name="password" onChange={(e)=>setlogpass(e.target.value)} style={{width:"400px"}}/><br/><br/>
                            {/* <Button disabled={!user || !pass}type="submit" variant="contained">SUBMIT</Button> */}
                            <Button disabled={!loguser || !logpass} type="submit" variant="contained" color="primary" >Submit<Icon style={{padding:"2%"}}/></Button>
                            </form>
                        </Grid>
                        <Grid item xs><div class="outer">
                        <div class="inner"></div>
                        </div></Grid>
                    <Grid item xs>
                    <form noValidate autoComplete="off" onSubmit={(e)=>handleSignup(e)} style={{paddingTop:"10%"}}>
                        <h1 className="sign">Sign-Up</h1><br/>
                    <TextField id="outlined-basic" label="Username*" variant="outlined" value={user} name="username" onChange={(e)=>setuser(e.target.value)} style={{width:"400px"}}/><br/><br/>
                    <TextField type="password" id="outlined-basic" label="Password*" variant="outlined" value={pass} name="password" onChange={(e)=>setpass(e.target.value)} style={{width:"400px"}}/><br/><br/>
                    <Button disabled={!user || !pass} type="submit" variant="contained" color="primary" >Submit<Icon style={{padding:"2%"}}/></Button>
                    </form>
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>
                
                {/* {chec==true && <Main/>} */}
                
        </div>
    )
}

export default Login
