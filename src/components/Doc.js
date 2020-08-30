import React from 'react'
import Row from "./Row"
import Docreq from "../Docreq";
import Nav from './Nav';
function Doc() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Documentaries: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Docreq.Doc2}/>
            <Row title="New release" large={true} fetch={Docreq.Doc1}/>
            <Row title="Most Watched" large={true} fetch={Docreq.Doc3}/>
            <Row title="Biographical Documentaries" large={true} fetch={Docreq.Doc4}/>
            <Row title="Crime Documentaries" large={true} fetch={Docreq.Doc5}/>
     </div>
        </div>
    )
}

export default Doc
