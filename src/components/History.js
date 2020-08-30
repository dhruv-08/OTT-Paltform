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
            <Row title="Biography" large={true} fetch={Historyreq.History6}/>
            <Row title="Historical Epic" large={true} fetch={Historyreq.History7}/>
            <Row title="Historical Fiction" large={true} fetch={Historyreq.History8}/>
            <Row title="Period Piece" large={true} fetch={Historyreq.History9}/>
            <Row title="Alternate History" large={true} fetch={Historyreq.History10}/>
            <Row title="Fantasy History" large={true} fetch={Historyreq.History11}/>
            <Row title="Fictional History" large={true} fetch={Historyreq.History12}/>
            <Row title="Horror History" large={true} fetch={Historyreq.History13}/>
            <Row title="Historic Mystery" large={true} fetch={Historyreq.History14}/>
            <Row title="Historic Drama" large={true} fetch={Historyreq.History15}/>
            <Row title="Historic movies" large={true} fetch={Historyreq.History16}/>
     </div>
        </div>
    )
}

export default History
