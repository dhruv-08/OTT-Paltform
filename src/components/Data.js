import { Dialog,  DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../data.css'
function Data({movie}) {
    const [success,setsuccess]=useState(false);
    const [tt,settt]=useState(false);
    const [err,seterr]=useState(false);
    const [movies, setmovies] = useState([])
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
                    <img src="https://thumbs.gfycat.com/QuaintLikelyFlyingfish-size_restricted.gif" alt="Success" style={{width:"250px",height:"200px"}}/>
                    </DialogContentText>
                    </DialogContent>
                </Dialog>}
                {err===true && <Dialog
                    open={true}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">Already present in your list</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    <img src="https://www.jonmgomes.com/wp-content/uploads/2020/03/Bell-Icon.gif" alt="success" style={{width:"250px",height:"250px"}}/>
                    </DialogContentText>
                    </DialogContent>
                </Dialog>}
                <div className="banner_conten">
                    <h1 className="title">{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button" >My List</button>
                    
                    </div>
                    <div className="description">
                        {movie.overview}
                    </div>
                </div>
            </header>
    )
}

export default Data
