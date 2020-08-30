import React from 'react'
import Row from "./Row"
import Horrorreq from "../Horrorreq";
import Nav from './Nav';
function Horror() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Horror: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Horrorreq.Horror2}/>
            <Row title="New release" large={true} fetch={Horrorreq.Horror1}/>
            <Row title="Most Watched" large={true} fetch={Horrorreq.Horror3}/>
            <Row title="Horror comedy" large={true} fetch={Horrorreq.Horror4}/>
            <Row title="Gory Horror" large={true} fetch={Horrorreq.Horror5}/>
     </div>
        </div>
    )
}

export default Horror
