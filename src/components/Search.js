import React, { useEffect, useState } from 'react'
import SearchBar from "material-ui-search-bar";
import { Helmet } from 'react-helmet';
import request from "../request";
import FlipMove from 'react-flip-move';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import StarsIcon from '@material-ui/icons/Stars';
import GradeIcon from '@material-ui/icons/Grade';
import Nav from './Nav'
import "../search.css";
import axios from '../Axios/axios'
import { Dialog, Grid } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import movieTrailer from 'movie-trailer';
import Data from './Data';
import ReactPlayer from 'react-player';
function Search() {
    const [movies, setmovies] = useState([]);
    const [bool, setbool] = useState([]);
    const [open, setOpen] =useState(false);
    const [trailer, settrailer] = useState("");
    const [value, setvalue] = useState("");
    const [search, setsearch] = useState([])
    const handleClose = () => {
        setOpen(false);
        settrailer("");
    };
    function handleModal(movie){
        setOpen(true);
        movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then((url)=>{
            settrailer(url);
        })
        .catch((err)=>{
            console.log("Done");
        })
        setbool(movie);
    }
    async function handlesearch(){
        // const vall=await axios.get((request.search+"&query="+value));
        // setsearch(vall.data.results);
        console.log("hel");
    }
    return (
        <div>
            
        </div>
    )
}

export default Search
