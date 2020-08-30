import React from 'react'
import Row from "./Row"
import Mysteryreq from "../Mysteryreq";
import Nav from './Nav';
function Mystery() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Mystery: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Mysteryreq.Mystery2}/>
            <Row title="New release" large={true} fetch={Mysteryreq.Mystery1}/>
            <Row title="Most Watched" large={true} fetch={Mysteryreq.Mystery3}/>
            <Row title="Psychological" large={true} fetch={Mysteryreq.Mystery4}/>
            <Row title="Techno" large={true} fetch={Mysteryreq.Mystery5}/>
     </div>
        </div>
    )
}

export default Mystery
