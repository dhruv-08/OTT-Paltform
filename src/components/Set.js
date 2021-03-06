import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import Axios from 'axios';
import React, { useState } from 'react'
import DoneIcon from '@material-ui/icons/Done';
function Set() {
    const [n, setn] = useState("");
    const [success,setsuccess]=useState(false);
    function handleSub(e){
        e.preventDefault();
        Axios.post("/set",({newpass:n}),{timeout:2000})
        .then((res)=>{
            setn("");
        }).catch(err=>{
            console.log("Done");
        })
        setn("");
        setsuccess(true);
            setTimeout(() => {
                setsuccess(false);
            }, 2000);
    }
    return (
        <div style={{textAlign:"center"}}>
            <div style={{paddingTop:"10%"}}>
           <h1>Reset password</h1><br/><br/>
           <form noValidate autoComplete="off" onSubmit={(e)=>handleSub(e)}>
            <TextField type="password" id="standard-basic" label="New Password" value={n} name="newpass" onChange={(e)=>setn(e.target.value)} style={{width:"250px",height:"200px"}}/><br/>
            <Button type="submit" variant="outlined" color="primary">Reset Password</Button>
            </form></div>
            {success===true && <Dialog
                    style={{color:"black"}}
                    open={true}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title" style={{backgroundColor:"black"}}><span style={{color:"white"}}>Reset Successfully</span></DialogTitle>
                    <DialogContent style={{backgroundColor:"black",textAlign:"center"}}>
                    <DialogContentText id="alert-dialog-description">
                    <DoneIcon style={{color:"white"}}/>
                    </DialogContentText>
                    </DialogContent>
                </Dialog>}
        </div>
    )
}

export default Set
