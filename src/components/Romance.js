import React from 'react'
import Row from "./Row"
import Romancereq from "../Romancereq";
import Nav from './Nav';
function Romance() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Romance: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Romancereq.Romance2}/>
            <Row title="New release" large={true} fetch={Romancereq.Romance1}/>
            <Row title="Most Watched" large={true} fetch={Romancereq.Romance3}/>
            <Row title="Steamy Romance" large={true} fetch={Romancereq.Romance4}/>
            <Row title="Romance Movies based on Books" large={true} fetch={Romancereq.Romance5}/>
     </div>
        </div>
    )
}

export default Romance
