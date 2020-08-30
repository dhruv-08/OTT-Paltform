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
            <Row title="Film Noir" large={true} fetch={Mysteryreq.Mystery6}/>
            <Row title="Action Mystery" large={true} fetch={Mysteryreq.Mystery7}/>
            <Row title="Horror Mystery" large={true} fetch={Mysteryreq.Mystery8}/>
            <Row title="Sci-Fi Mystery" large={true} fetch={Mysteryreq.Mystery9}/>
            <Row title="Suspence Mystery" large={true} fetch={Mysteryreq.Mystery10}/>
            <Row title="Adventure Mystery" large={true} fetch={Mysteryreq.Mystery11}/>
            <Row title="Puzzle Mystery" large={true} fetch={Mysteryreq.Mystery12}/>
            <Row title="Historic Mystery" large={true} fetch={Mysteryreq.Mystery13}/>
            <Row title="Fantasy Mystery" large={true} fetch={Mysteryreq.Mystery14}/>
            <Row title="Mystery Drama" large={true} fetch={Mysteryreq.Mystery15}/>
            <Row title="Mystery" large={true} fetch={Mysteryreq.Mystery16}/>
     </div>
        </div>
    )
}

export default Mystery
