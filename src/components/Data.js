import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import Axios from 'axios';
import React, { useState } from 'react'
import '../data.css'
function Data({movie}) {
    const [success,setsuccess]=useState(false);
    function handleList(){
        setsuccess(true);
        setTimeout(() => {
            setsuccess(false);
          }, 2000);
        var e=[
            {
                "id":movie.id,
                "name":movie?.title || movie?.name || movie?.original_name,
                "backdrop_path":movie.backdrop_path,
                "overview":movie.overview,
                "vote_average":movie.vote_average,
                "release_date":movie.release_date,
                "adult":movie.adult
            }
        ]
        console.log(e);
        Axios.post("/list",{e})
        .then(res=>{
            console.log(res);
        })
    }
    return (
            <header className="banne"  style={{
                backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center"
                }}>
                    {success===true && <Dialog
                    open={true}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">Added in list Successfully</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <img src="https://thumbs.gfycat.com/QuaintLikelyFlyingfish-size_restricted.gif" style={{width:"200px",height:"150px"}}/>
                    </DialogContentText>
                    </DialogContent>
                </Dialog>}
                <div className="banner_conten">
                    <h1 className="title">{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button" onClick={()=>handleList()}>My List</button>
                    </div>
                    <div className="description">
                        {movie.overview}
                    </div>
                </div>
            </header>
    )
}

export default Data
