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
            <Row title="Psychological Thriller" large={true} fetch={Thrillerreq.Thriller6}/>
            <Row title="Sci-Fi Thriller" large={true} fetch={Thrillerreq.Thriller7}/>
            <Row title="Mystery Thriller" large={true} fetch={Thrillerreq.Thriller8}/>
            <Row title="Techno" large={true} fetch={Thrillerreq.Thriller9}/>
            <Row title="Film Noir" large={true} fetch={Thrillerreq.Thriller10}/>
            <Row title="Political thriller" large={true} fetch={Thrillerreq.Thriller11}/>
            <Row title="Spy thriller" large={true} fetch={Thrillerreq.Thriller12}/>
            <Row title="Legal thriller" large={true} fetch={Thrillerreq.Thriller13}/>
            <Row title="Historic thriller" large={true} fetch={Thrillerreq.Thriller14}/>
            <Row title="Family Thriller" large={true} fetch={Thrillerreq.Thriller15}/>
            <Row title="Thriller" large={true} fetch={Thrillerreq.Thriller16}/>
     </div>
        </div>
    )
}

export default Thriller
