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
            <Row title="Claymation" large={true} fetch={Animatedreq.Animated6}/>
            <Row title="Cutout" large={true} fetch={Animatedreq.Animated7}/>
            <Row title="Computer Generated Imagery" large={true} fetch={Animatedreq.Animated8}/>
            <Row title="Puppetry" large={true} fetch={Animatedreq.Animated9}/>
            <Row title="Live-Action" large={true} fetch={Animatedreq.Animated10}/>
            <Row title="Pixar" large={true} fetch={Animatedreq.Animated11}/>
            <Row title="Childern Animated" large={true} fetch={Animatedreq.Animated12}/>
            <Row title="Family Animated" large={true} fetch={Animatedreq.Animated13}/>
            <Row title="Mickey" large={true} fetch={Animatedreq.Animated14}/>
            <Row title="Cartoon" large={true} fetch={Animatedreq.Animated15}/>
            <Row title="Movies for all ages" large={true} fetch={Animatedreq.Animated16}/>
     </div>
        </div>
    )
}

export default Animated
