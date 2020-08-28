import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import Axios from 'axios';
import React, { useState } from 'react'
import Nav from './Nav'
import DoneIcon from '@material-ui/icons/Done';
function Change() {
    const [old, setold] = useState("");
    const [n, setn] = useState("");
    const [success,setsuccess]=useState(false);
    function handleSub(e){
        e.preventDefault();
        Axios.post("/updatePassword",({oldpass:old,newpass:n}))
        .then((res)=>{
            setold("");
            setn("");
        })
        .catch(err=>{
            console.log(err);
        })
        setold("");
        setn("");
        setsuccess(true);
            setTimeout(() => {
                setsuccess(false);
            }, 2000);
    }
    return (
        <div style={{textAlign:"center"}}>
            <Nav/>
            <div style={{paddingTop:"10%"}}>
           <h1>Want to Change you Password?</h1><br/><br/>
           <form noValidate autoComplete="off" onSubmit={(e)=>handleSub(e)}>
            <TextField type="password" id="standard-basic" label="Old Password" value={old} name="oldpass" onChange={(e)=>setold(e.target.value)} style={{width:"250px",height:"200px"}}/>
            <TextField type="password" id="standard-basic" label="New Password" value={n} name="newpass" onChange={(e)=>setn(e.target.value)} style={{width:"250px",height:"200px"}}/><br/>
            <Button type="submit" variant="outlined" color="primary">Change Password</Button>
            </form></div>
            {success===true && <Dialog
                    style={{color:"black"}}
                    open={true}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title" style={{backgroundColor:"black"}}><span style={{color:"white"}}>Password Changed Successfully</span></DialogTitle>
                    <DialogContent style={{backgroundColor:"black",textAlign:"center"}}>
                    <DialogContentText id="alert-dialog-description">
                    <DoneIcon style={{color:"white"}}/>
                    </DialogContentText>
                    </DialogContent>
                </Dialog>}
        </div>
    )
}

export default Change
