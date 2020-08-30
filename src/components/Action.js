import React, { useEffect } from 'react'
import Row from "./Row"
import Actionreq from "../Actionreq";
import axios from '../Axios/axios'
import Nav from './Nav';
function Action() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Action & Adventure: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Actionreq.Action2}/>
            <Row title="New release" large={true} fetch={Actionreq.Action1}/>
            <Row title="Adventures" large={true} fetch={Actionreq.Action3}/>
            <Row title="Action comedy" large={true} fetch={Actionreq.Action4}/>
            <Row title="Action Thriller" large={true} fetch={Actionreq.Action5}/>
            <Row title="Crime Action" large={true} fetch={Actionreq.Action6}/>
            <Row title="Martial Art action" large={true} fetch={Actionreq.Action7}/>
            <Row title="Spy Action" large={true} fetch={Actionreq.Action8}/>
            <Row title="Action sci-fi" large={true} fetch={Actionreq.Action9}/>
            <Row title="Action Mystery" large={true} fetch={Actionreq.Action10}/>
            <Row title="Action Adventure" large={true} fetch={Actionreq.Action11}/>
            <Row title="Action fantasy" large={true} fetch={Actionreq.Action12}/>
            <Row title="Action fiction" large={true} fetch={Actionreq.Action13}/>
            <Row title="Action Animated" large={true} fetch={Actionreq.Action14}/>
            <Row title="Action Drama" large={true} fetch={Actionreq.Action15}/>
            <Row title="Military Action" large={true} fetch={Actionreq.Action16}/>
     </div>
        </div>
    )
}

export default Action
