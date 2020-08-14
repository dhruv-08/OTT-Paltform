import Axios from 'axios';
import React, { useState } from 'react'
import Icon from '@material-ui/icons/Send';
import "../App.css";
import { Button, Dialog,DialogContent, DialogContentText, DialogTitle, Grid, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
function Login() {
    const history = useHistory()
    const [loguser, setloguser] = useState("");
    const [logpass, setlogpass] = useState("");
    const [logemail, setlogemail] = useState("");
    const [user, setuser] = useState("");
    const [pass, setpass] = useState("");
    const [em, setem] = useState("");
    const [open, setOpen] = useState(false);
    const [success, setsuccess] = useState(false);
    const [sign, setsign] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
          }, 2000);
    };

    const handleSuc = () => {
        setsuccess(true);
        setTimeout(() => {
            setsuccess(false);
          }, 2000);
    };
    const handlesign = () => {
        setsign(true);
        setTimeout(() => {
            setsign(false);
          }, 2000);
    };
    function handleSignup(e){
        e.preventDefault();
        Axios.post("/signup",{username:user,password:pass,email:em})
        .then(res=>{
            console.log(res);
            setuser("");
            setpass("");
            setem("");
            handleSuc();
        }).catch((res)=>{
            setuser("");
            setpass("");
            setem("");
            handlesign();
        });
      console.log("hello");
    }
    async function handleLogin(e){
        e.preventDefault();
        
        await Axios.post("/login",{username:loguser,password:logpass,email:logemail})
        .then((res)=>{
            console.log(res);
            setlogpass("");
            setloguser("");
            setlogemail("");
            history.replace("/home",null);
        })
        .catch((res)=>{
            setlogpass("");
        setloguser("");
        setlogemail("");
        handleClickOpen();
        });    
      console.log("hel");
    }
    return (
         <div className="App" >
             {success===true && <Dialog
                    open={true}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <center><DialogTitle id="alert-dialog-title"><h1>Sign-Up Successfully</h1></DialogTitle></center>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    <center><img src="https://thumbs.gfycat.com/QuaintLikelyFlyingfish-size_restricted.gif" alt="success" style={{width:"250px",height:"200px"}}/></center>
                    </DialogContentText>
                    </DialogContent>
                </Dialog>}
            {sign===true &&<Dialog
                    open={true}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <center><DialogTitle id="alert-dialog-title"><h1>Already Registered</h1></DialogTitle></center>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    <center><img src="https://www.pngitem.com/pimgs/m/215-2158015_animated-cross-mark-gif-hd-png-download.png" alt="error" style={{width:"200px",height:"150px"}}/></center>
                    </DialogContentText>
                    </DialogContent>
                </Dialog>}
             {open===true &&<Dialog
                    open={true}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <center><DialogTitle id="alert-dialog-title">Invalid username or password</DialogTitle></center>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    <center><img src="https://www.pngitem.com/pimgs/m/215-2158015_animated-cross-mark-gif-hd-png-download.png" alt="error" style={{width:"200px",height:"150px"}}/></center>
                    </DialogContentText>
                    </DialogContent>
                </Dialog>}
                    <Grid container spacing={5} style={{paddingTop:"8%"}}>
                    <Grid item xs></Grid>
                        <Grid item xs>
                        <form noValidate autoComplete="off" onSubmit={(e)=>(handleLogin(e))} style={{paddingTop:"10%"}}>
                            <h1 className="log">Log-In</h1><br/>
                            <TextField id="outlined-basic" label="Username*" variant="outlined" value={loguser} name="username" onChange={(e)=>setloguser(e.target.value)} style={{width:"400px"}}/><br/><br/>
                            <TextField id="outlined-basic" label="Email*" variant="outlined" value={logemail} name="email" onChange={(e)=>setlogemail(e.target.value)} style={{width:"400px"}}/><br/><br/>
                            <TextField type="password" id="outlined-basic" label="Password*" variant="outlined" value={logpass} name="password" onChange={(e)=>setlogpass(e.target.value)} style={{width:"400px"}}/><br/><br/>
                            {/* <Button disabled={!user || !pass}type="submit" variant="contained">SUBMIT</Button> */}
                            <Button disabled={!loguser || !logpass} type="submit" variant="contained" color="primary" >Submit<Icon style={{padding:"2%"}}/></Button>
                            </form>
                        </Grid>
                        <Grid item xs><div className="outer">
                        <div className="inner"></div>
                        </div></Grid>
                    <Grid item xs>
                    <form noValidate autoComplete="off" onSubmit={(e)=>handleSignup(e)} style={{paddingTop:"10%"}}>
                        <h1 className="sign">Sign-Up</h1><br/>
                    <TextField id="outlined-basic" label="Username*" variant="outlined" value={user} name="username" onChange={(e)=>setuser(e.target.value)} style={{width:"400px"}}/><br/><br/>
                    <TextField id="outlined-basic" label="Email*" variant="outlined" value={em} name="email" onChange={(e)=>setem(e.target.value)} style={{width:"400px"}}/><br/><br/>
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
