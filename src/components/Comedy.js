import React from 'react'
import Row from "./Row"
import Comedyreq from "../Comedyreq";
import Nav from './Nav';
function Comedy() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Comedy:  </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Comedyreq.Comedy2} e={1}/>
            <Row title="New release" large={true} fetch={Comedyreq.Comedy1} e={2}/>
            <Row title="Wacky Comedies" large={true} fetch={Comedyreq.Comedy3} e={3}/>
            <Row title="Dark Comedies" large={true} fetch={Comedyreq.Comedy4} e={4}/>
            <Row title="Independent Comedies" large={true} fetch={Comedyreq.Comedy5} e={5}/>
     </div>
        </div>
    )
}

export default Comedy
