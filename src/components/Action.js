import React, { useEffect } from 'react'
import Row from "./Row"
import request from "../request";
import Banner from './Banner';
import axios from '../Axios/axios'
import Nav from './Nav';
function Action() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={false}/>
             <Banner/>
            <div className="main">
            <ActionRow title="Trending" fetch={request.Trending} large={true}/>
            <ActionRow title="Netflix Original" fetch={request.NetflixOrg}/>
            <ActionRow title="Top Rated" fetch={request.TopRated}/>
            <ActionRow title="Action" fetch={request.Action}/>
            <ActionRow title="Sci-fi" fetch={request.Sci_fi}/>
            <ActionRow title="Comedy" fetch={request.Comedy}/>
            <ActionRow title="Mystery" fetch={request.Mystery}/>
            <ActionRow title="Crime" fetch={request.Crime}/>
            <ActionRow title="Tv Shows" fetch={request.TvShows}/>
            <ActionRow title="Thriller" fetch={request.Thriller}/>
            <ActionRow title="Documentaries" fetch={request.Documentaries}/>
            <ActionRow title="Horror" fetch={request.Horror}/>
            <ActionRow title="Romance" fetch={request.Romance}/>
            <ActionRow title="Animated" fetch={request.Animated}/>
            <ActionRow title="Drama" fetch={request.Drama}/>
            <ActionRow title="Family" fetch={request.Family}/>
            <ActionRow title="Fantasy" fetch={request.Fantasy}/>
            <ActionRow title="History" fetch={request.History}/>
            <ActionRow title="Western" fetch={request.Western}/>
            <ActionRow title="Music" fetch={request.Music}/>
            <ActionRow title="War" fetch={request.War}/>
            <ActionRow title="Adventure" fetch={request.Adventure}/>
     </div>
        </div>
    )
}

export default Action
