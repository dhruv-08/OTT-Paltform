import React from 'react'
import Row from "./Row"
import Romancereq from "../Romancereq";
import Nav from './Nav';
function Romance() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Romance: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Romancereq.Romance2}/>
            <Row title="New release" large={true} fetch={Romancereq.Romance1}/>
            <Row title="Most Watched" large={true} fetch={Romancereq.Romance3}/>
            <Row title="Steamy Romance" large={true} fetch={Romancereq.Romance4}/>
            <Row title="Romance Movies based on Books" large={true} fetch={Romancereq.Romance5}/>
            <Row title="Romance Independent movies" large={true} fetch={Romancereq.Romance6}/>
            <Row title="Romance Comedy" large={true} fetch={Romancereq.Romance7}/>
            <Row title="Romance Drama" large={true} fetch={Romancereq.Romance8}/>
            <Row title="Romance Thriller" large={true} fetch={Romancereq.Romance9}/>
            <Row title="Period Romance" large={true} fetch={Romancereq.Romance10}/>
            <Row title="Erotic Romance" large={true} fetch={Romancereq.Romance11}/>
            <Row title="Romantic Suspense" large={true} fetch={Romancereq.Romance12}/>
            <Row title="Contemporary Romance" large={true} fetch={Romancereq.Romance13}/>
            <Row title="Young Adult Romance" large={true} fetch={Romancereq.Romance14}/>
            <Row title="Religious/Spiritual Romance" large={true} fetch={Romancereq.Romance15}/>
            <Row title="Fantasy Romance" large={true} fetch={Romancereq.Romance16}/>
     </div>
        </div>
    )
}

export default Romance
