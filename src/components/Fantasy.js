import React from 'react'
import Row from "./Row"
import Fantasyreq from "../Fantasyreq";
import Nav from './Nav';
function Fantasy() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Fantasy: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Fantasyreq.Fantasy2}/>
            <Row title="New release" large={true} fetch={Fantasyreq.Fantasy1}/>
            <Row title="Most Watched" large={true} fetch={Fantasyreq.Fantasy3}/>
            <Row title="Blockbuster Fantasy" large={true} fetch={Fantasyreq.Fantasy4}/>
            <Row title="Action Fantasy" large={true} fetch={Fantasyreq.Fantasy5}/>
     </div>
        </div>
    )
}

export default Fantasy
