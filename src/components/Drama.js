import React from 'react'
import Row from "./Row"
import Dramareq from "../Dramareq";
import Nav from './Nav';
function Drama() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Drama: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Dramareq.Drama2}/>
            <Row title="New release" large={true} fetch={Dramareq.Drama1}/>
            <Row title="Most watched" large={true} fetch={Dramareq.Drama3}/>
            <Row title="Crime Drama" large={true} fetch={Dramareq.Drama4}/>
            <Row title="Drama Based on Nooks" large={true} fetch={Dramareq.Drama5}/>
     </div>
        </div>
    )
}

export default Drama
