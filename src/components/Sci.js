import React from 'react'
import Row from "./Row"
import Scireq from "../Scireq.js"
import Nav from './Nav';
function Sci() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Science Fiction: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Scireq.Sci2}/>
            <Row title="New release" large={true} fetch={Scireq.Sci1}/>
            <Row title="Blockbuster Sci-Fi" large={true} fetch={Scireq.Sci3}/>
            <Row title="Action Sci-Fi" large={true} fetch={Scireq.Sci4}/>
            <Row title="Suspeneful Sci-Fi" large={true} fetch={Scireq.Sci5}/>
     </div>
        </div>
    )
}

export default Sci
