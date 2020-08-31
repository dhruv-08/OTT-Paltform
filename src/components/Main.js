import React, { useEffect } from 'react'
import Row from "./Row"
import request from "../request";
import Banner from './Banner';
import axios from '../Axios/axios'
import Nav from './Nav';
function Main() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={false}/>
             <Banner/>
            <div className="main">
            <Row title="Trending" fetch={request.Trending} large={true}/>
            <Row title="Netflix Original" fetch={request.NetflixOrg}/>
            <Row title="Top Rated" fetch={request.TopRated}/>
            <Row title="Action" fetch={request.Action}/>
            <Row title="Sci-fi" fetch={request.Sci_fi}/>
            <Row title="Comedy" fetch={request.Comedy}/>
            <Row title="Mystery" fetch={request.Mystery}/>
            <Row title="Crime" fetch={request.Crime}/>
            <Row title="Tv Shows" fetch={request.TvShows}/>
            <Row title="Thriller" large={true} fetch={request.Thriller}/>
            <Row title="Documentaries" fetch={request.Documentaries}/>
            <Row title="Horror" fetch={request.Horror}/>
            <Row title="Romance" fetch={request.Romance}/>
            <Row title="Animated" fetch={request.Animated}/>
            <Row title="Drama" fetch={request.Drama}/>
            <Row title="Family" fetch={request.Family}/>
            <Row title="Fantasy" fetch={request.Fantasy}/>
            <Row title="History" fetch={request.History}/>
            <Row title="Western" fetch={request.Western}/>
            <Row title="Music" fetch={request.Music}/>
            <Row title="War" fetch={request.War}/>
            <Row title="Adventure" fetch={request.Adventure}/>
     </div>
        </div>
    )
}

export default Main
