import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import Axios from 'axios';
import React, { useState } from 'react'
import Nav from './Nav'
function Forgot() {
    const [n, setn] = useState("");
    const [success,setsuccess]=useState(false);
    function handleSub(e){
        e.preventDefault();
        Axios.post("/forgot",({email:n}))
        .then((res)=>{
            console.log(res);
            setn("");
        })
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
           <h1>Forget Password ? Get email to reset password</h1><br/><br/>
           <form noValidate autoComplete="off" onSubmit={(e)=>handleSub(e)}>
            <TextField type="email" id="standard-basic" label="Email" value={n} name="newpass" onChange={(e)=>setn(e.target.value)} style={{width:"250px",height:"200px"}}/><br/>
            <Button type="submit" variant="outlined" color="primary">Reset Password</Button>
            </form></div>
            {success===true && <Dialog
                    open={true}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <center><DialogTitle id="alert-dialog-title">Email sent Successfully</DialogTitle></center>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    <center><img src="https://thumbs.gfycat.com/QuaintLikelyFlyingfish-size_restricted.gif" alt="success" style={{width:"250px",height:"200px"}}/></center>
                    </DialogContentText>
                    </DialogContent>
                </Dialog>}
        </div>
    )
}

export default Forgot
