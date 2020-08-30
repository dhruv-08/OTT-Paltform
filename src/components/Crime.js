import React from 'react'
import Row from "./Row"
import Crimereq from "../Crimereq";
import Nav from './Nav';
function Crime() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Crime: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Crimereq.Crime2}/>
            <Row title="New release" large={true} fetch={Crimereq.Crime1}/>
            <Row title="Most Watched" large={true} fetch={Crimereq.Crime3}/>
            <Row title="Caper" large={true} fetch={Crimereq.Crime4}/>
            <Row title="Heist" large={true} fetch={Crimereq.Crime5}/>
     </div>
        </div>
    )
}

export default Crime