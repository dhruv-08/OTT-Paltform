import React from 'react'
import Row from "./Row"
import Historyreq from "../Historyreq";
import Nav from './Nav';
function History() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>History: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Historyreq.History2}/>
            <Row title="New release" large={true} fetch={Historyreq.History1}/>
            <Row title="Most Watched" large={true} fetch={Historyreq.History3}/>
            <Row title="Blockbuster movies" large={true} fetch={Historyreq.History4}/>
            <Row title="Historical Event" large={true} fetch={Historyreq.History5}/>
     </div>
        </div>
    )
}

export default History
