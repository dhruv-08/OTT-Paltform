import { Dialog,  DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../data.css'
function Data({movie}) {
    const [success,setsuccess]=useState(false);
    const [tt,settt]=useState(false);
    const [err,seterr]=useState(false);
    const [movies, setmovies] = useState([]);
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
        async function fun(){
            const val=await Axios.get("/movlist",{timeout:2000});
         //    console.log(val.data[0].list[0].name);
            setmovies(val.data[0].list);
        }
    fun();
},[]);
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
