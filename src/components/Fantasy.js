import React from 'react'
import Row from "./Row"
import Fantasyreq from "../Fantasyreq";
import Nav from './Nav';
function Fantasy() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Fantasy: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Fantasyreq.Fantasy2}/>
            <Row title="New release" large={true} fetch={Fantasyreq.Fantasy1}/>
            <Row title="Most Watched" large={true} fetch={Fantasyreq.Fantasy3}/>
            <Row title="Blockbuster Fantasy" large={true} fetch={Fantasyreq.Fantasy4}/>
            <Row title="Action Fantasy" large={true} fetch={Fantasyreq.Fantasy5}/>
            <Row title="Sci-Fi Fantasy" large={true} fetch={Fantasyreq.Fantasy6}/>
            <Row title="Drama Fantasy" large={true} fetch={Fantasyreq.Fantasy7}/>
            <Row title="Mystery Fantasy" large={true} fetch={Fantasyreq.Fantasy8}/>
            <Row title="Horror Fantasy" large={true} fetch={Fantasyreq.Fantasy9}/>
            <Row title="Family Fantasy" large={true} fetch={Fantasyreq.Fantasy10}/>
            <Row title="Fiction Fantasy" large={true} fetch={Fantasyreq.Fantasy11}/>
            <Row title="Animated Fantasy" large={true} fetch={Fantasyreq.Fantasy12}/>
            <Row title="Supernatural Fantasy" large={true} fetch={Fantasyreq.Fantasy13}/>
            <Row title="Suspenseful Fantasy" large={true} fetch={Fantasyreq.Fantasy14}/>
            <Row title="Adventure Fantasy" large={true} fetch={Fantasyreq.Fantasy15}/>
            <Row title="Thriller Fantasy" large={true} fetch={Fantasyreq.Fantasy16}/>
     </div>
        </div>
    )
}

export default Fantasy
