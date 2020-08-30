import React from 'react'
import Row from "./Row"
import Tvreq from "../Tvreq";
import Nav from './Nav';
function Tv() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Tv Shows: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Tvreq.Tv2}/>
            <Row title="New release" large={true} fetch={Tvreq.Tv1}/>
            <Row title="Adventures" large={true} fetch={Tvreq.Tv3}/>
            <Row title="Action comedy" large={true} fetch={Tvreq.Tv4}/>
            <Row title="Action Thriller" large={true} fetch={Tvreq.Tv5}/>
     </div>
        </div>
    )
}

export default Tv
