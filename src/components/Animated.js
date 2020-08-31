import React from 'react'
import Row from "./Row"
import Animatedreq from "../Animatedreq";
import Nav from './Nav';
function Animated() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Animated: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Animatedreq.Animated2}/>
            <Row title="New release" large={true} fetch={Animatedreq.Animated1}/>
            <Row title="Most Watched" large={true} fetch={Animatedreq.Animated3}/>
            <Row title="Traditional" large={true} fetch={Animatedreq.Animated4}/>
            <Row title="Stop Motion" large={true} fetch={Animatedreq.Animated5}/>
     </div>
        </div>
    )
}

export default Animated
