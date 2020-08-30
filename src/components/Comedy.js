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
            <Row title="Suggested for you" large={true} fetch={Comedyreq.Comedy2}/>
            <Row title="New release" large={true} fetch={Comedyreq.Comedy1}/>
            <Row title="Wacky Comedies" large={true} fetch={Comedyreq.Comedy3}/>
            <Row title="Dark Comedies" large={true} fetch={Comedyreq.Comedy4}/>
            <Row title="Independent Comedies" large={true} fetch={Comedyreq.Comedy5}/>
            <Row title="Romantic Comedies" large={true} fetch={Comedyreq.Comedy6}/>
            <Row title="Satires" large={true} fetch={Comedyreq.Comedy7}/>
            <Row title="Slapstick" large={true} fetch={Comedyreq.Comedy8}/>
            <Row title="Action Comedies" large={true} fetch={Comedyreq.Comedy9}/>
            <Row title="Buddy Comedies" large={true} fetch={Comedyreq.Comedy10}/>
            <Row title="Road Comedies" large={true} fetch={Comedyreq.Comedy11}/>
            <Row title="Spoof Comedies" large={true} fetch={Comedyreq.Comedy12}/>
            <Row title="Parody" large={true} fetch={Comedyreq.Comedy13}/>
            <Row title="Sitcom" large={true} fetch={Comedyreq.Comedy14}/>
            <Row title="Sketch Comedies" large={true} fetch={Comedyreq.Comedy15}/>
            <Row title="Mockumentary" large={true} fetch={Comedyreq.Comedy16}/>
     </div>
        </div>
    )
}

export default Comedy
