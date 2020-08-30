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
            <Row title="Critically Acclaimed Documentaries" large={true} fetch={Docreq.Doc6}/>
            <Row title="Travel & Adventure Documentaries" large={true} fetch={Docreq.Doc7}/>
            <Row title="Nature & Ecology Documentaries" large={true} fetch={Docreq.Doc8}/>
            <Row title="Science & Technology Documentaries" large={true} fetch={Docreq.Doc9}/>
            <Row title="Social & Curtural Documentaries" large={true} fetch={Docreq.Doc10}/>
            <Row title="Political Documentaries" large={true} fetch={Docreq.Doc11}/>
            <Row title="Psychology Documentaries" large={true} fetch={Docreq.Doc12}/>
            <Row title="Mystery Documentaries" large={true} fetch={Docreq.Doc13}/>
            <Row title="Paranoid Fiction" large={true} fetch={Docreq.Doc14}/>
            <Row title="Biography" large={true} fetch={Docreq.Doc15}/>
            <Row title="Military Documentaries" large={true} fetch={Docreq.Doc16}/>
     </div>
        </div>
    )
}

export default Doc
