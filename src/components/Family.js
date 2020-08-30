import React from 'react'
import Row from "./Row"
import Familyreq from "../Familyreq";
import Nav from './Nav';
function Family() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Family: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Familyreq.Family2}/>
            <Row title="New release" large={true} fetch={Familyreq.Family1}/>
            <Row title="Most Watched" large={true} fetch={Familyreq.Family3}/>
            <Row title="Movies based on Childern's books" large={true} fetch={Familyreq.Family4}/>
            <Row title="Family Adventures" large={true} fetch={Familyreq.Family5}/>
     </div>
        </div>
    )
}

export default Family
