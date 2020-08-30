import React from 'react'
import Row from "./Row"
import Thrillerreq from "../Thrillerreq";
import Nav from './Nav';
function Thriller() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Thriller: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Thrillerreq.Thriller2}/>
            <Row title="New release" large={true} fetch={Thrillerreq.Thriller1}/>
            <Row title="Most Watched" large={true} fetch={Thrillerreq.Thriller3}/>
            <Row title="Crime Thriller" large={true} fetch={Thrillerreq.Thriller4}/>
            <Row title="Action Thriller" large={true} fetch={Thrillerreq.Thriller5}/>
     </div>
        </div>
    )
}

export default Thriller
