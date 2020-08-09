import React, { useEffect, useState } from 'react'
import Banner from './Banner';
import axios from 'axios';
import Nav from './Nav';
import Main from "./Main"
import "../App.css";
import {Switch,Route,Redirect} from 'react-router-dom'
import Icon from '@material-ui/icons/Send';
import { Button, Grid, Link, TextField } from '@material-ui/core';
// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//           margin: theme.spacing(1),
//           width: '25ch',
//         },
//       },
    
//   }));
function Form() {
    // const classes = useStyles();
    const [user, setuser] = useState("");
    const [pass, setpass] = useState("");
    const [loguser, setloguser] = useState("");
    const [logpass, setlogpass] = useState("");
    const [bool, setbool] = useState(false);
    const [log, setlog] = useState(false);
      function handleSignup(e){
          e.preventDefault();
          axios.post("/signup",{username:user,password:pass})
          .then(res=>{
              console.log(res);
              setbool(true);
          })
        console.log("hello");
      }
      function handleLogin(e){
        e.preventDefault();
        axios.post("/login",{username:loguser,password:logpass})
        .then(res=>{
            console.log(res);
            setlog(true);
        })
        .catch((err)=>console.log(err));
      console.log("hel");
    }
    
    //   function handleUser(e){
    //     setuser(e);
    // }
    // function handlePass(e){
    //     setpass(e);
    // }
    return (
        <div>
            {bool==false && <form noValidate autoComplete="off" onSubmit={(e)=>handleSignup(e)} style={{paddingTop:"10%",paddingLeft:"5%"}}>
                <Grid container spacing={2}>
                    <Grid item xs></Grid>
                    <Grid item xs>
                        <h1 className="sign">Sign-Up</h1><br/>
                    <TextField id="outlined-basic" label="Username*" variant="outlined" value={user} name="username" onChange={(e)=>setuser(e.target.value)} style={{width:"400px"}}/><br/><br/>
                    <TextField id="outlined-basic" label="Password*" variant="outlined" value={pass} name="password" onChange={(e)=>setpass(e.target.value)} style={{width:"400px"}}/><br/><br/>
                    <Button disabled={!user || !pass} type="submit" variant="contained" color="primary" >Submit<Icon style={{padding:"2%"}}/></Button><Link onClick={(e)=>setbool(true)}>Already have an account?</Link>
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>
                </form>
                }
                {log==false && bool==true &&
                <form noValidate autoComplete="off" onSubmit={(e)=>handleLogin(e)} style={{paddingTop:"10%",paddingLeft:"5%"}}>
                    <Grid container spacing={2}>
                    <Grid item xs></Grid>
                    <Grid item xs>
                        <h1 className="log">Log-In</h1><br/>
                <TextField id="outlined-basic" label="Username*" variant="outlined" value={loguser} name="username" onChange={(e)=>setloguser(e.target.value)} style={{width:"400px"}}/><br/><br/>
                <TextField id="outlined-basic" label="Password*" variant="outlined" value={logpass} name="password" onChange={(e)=>setlogpass(e.target.value)} style={{width:"400px"}}/><br/><br/>
                {/* <Button disabled={!user || !pass}type="submit" variant="contained">SUBMIT</Button> */}
                <Button disabled={!loguser || !logpass} type="submit" variant="contained" color="primary" >Submit<Icon style={{padding:"2%"}}/></Button>
                </Grid>
                    <Grid item xs></Grid>
                </Grid>
                </form>
                }  
                {
                log==true &&
                <div className="App">
                     <Nav/>
                        <Banner/>
                        <Switch>
                            <Route exact path="/home" component={Main}/>
                            <Route exact path="/logout" component={Main}/>
                            <Redirect to="/home"/>
                        </Switch>
                </div>   }              
        </div>
    )
}

export default Form
