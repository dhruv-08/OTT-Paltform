import React, { useEffect, useState } from 'react'
import axios from '../Axios/axios'
import request from "../request";
import '../banner.css'
import Axios from 'axios';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
function Banner() {
    const [movie,setMovie]=useState([]);
    const [movies,setmovies]=useState([]);
    const [success,setsuccess]=useState(false);
    const [err,seterr]=useState(false);
    const [tt,settt]=useState(false);
    function handleList(){
        console.log(movies);
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
        var array=[];
        for(var i=0;i<movies.length;i++){
            array[i]=movies[i].id;
        }
        if(!array.includes(movie.id) && tt===false){
            settt(true);
            setsuccess(true);
            setTimeout(() => {
                setsuccess(false);
            }, 2000);
            Axios.post("/list",{e},{timeout:2000})
            .then(res=>{
                console.log("DONE!!");
            }).catch(err=>{
                console.log("ERROR");
            })
            // window.location.reload(false);
        }
        else{
            seterr(true);
            setTimeout(() => {
                seterr(false);
            }, 2000);
        }
    }
    useEffect(()=>{
        async function req(){
            const mov=await axios.get(request.Trending);
            setMovie(mov.data.results[Math.floor(Math.random()*(mov.data.results.length-1))]);
            return request;
        }
        async function fun(){
            const val=await Axios.get("/movlist",{timeout:2000});
         //    console.log(val.data[0].list[0].name);
            setmovies(val.data[0].list);

        }
        req();
        fun();
    },[]);
    return (
            <header className="banner"  style={movie.backdrop_path!==undefined?{
                backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center"
                }:{ backgroundSize:"cover",backgroundPosition:"center center"}}>
            {success===true && <Dialog
                    style={{color:"black"}}
                    open={true}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title" style={{backgroundColor:"black"}}><span style={{color:"white"}}>Added in list Successfully</span></DialogTitle>
                    <DialogContent style={{backgroundColor:"black",textAlign:"center"}}>
                    <DialogContentText id="alert-dialog-description">
                    <DoneIcon style={{color:"white"}}/>
                    </DialogContentText>
                    </DialogContent>
                </Dialog>}
                {err===true && <Dialog
                    style={{color:"black"}}
                    open={true}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title" style={{backgroundColor:"black"}}><span style={{color:"white"}}>Already present in your list</span></DialogTitle>
                    <DialogContent style={{backgroundColor:"black",textAlign:"center"}}>
                    <DialogContentText id="alert-dialog-description">
                    <CloseIcon style={{color:"white"}}/>
                    </DialogContentText>
                    </DialogContent>
                </Dialog>}
                <div className="banner_content">
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

export default Banner
