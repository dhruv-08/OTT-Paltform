import React from 'react'
import Row from "./Row"
import Crimereq from "../Crimereq";
import Nav from './Nav';
function Crime() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Crime: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Crimereq.Crime2}/>
            <Row title="New release" large={true} fetch={Crimereq.Crime1}/>
            <Row title="Most Watched" large={true} fetch={Crimereq.Crime3}/>
            <Row title="Caper" large={true} fetch={Crimereq.Crime4}/>
            <Row title="Heist" large={true} fetch={Crimereq.Crime5}/>
            <Row title="Gangster" large={true} fetch={Crimereq.Crime6}/>
            <Row title="Cop (Police)" large={true} fetch={Crimereq.Crime7}/>
            <Row title="Detective" large={true} fetch={Crimereq.Crime8}/>
            <Row title="Courtroom" large={true} fetch={Crimereq.Crime9}/>
            <Row title="Procedural" large={true} fetch={Crimereq.Crime10}/>
            <Row title="Action Crime" large={true} fetch={Crimereq.Crime11}/>
            <Row title="Crime Mystery" large={true} fetch={Crimereq.Crime12}/>
            <Row title="Crime Biography" large={true} fetch={Crimereq.Crime13}/>
            <Row title="Crime" large={true} fetch={Crimereq.Crime14}/>
            <Row title="Crime Fiction" large={true} fetch={Crimereq.Crime15}/>
            <Row title="True Crime" large={true} fetch={Crimereq.Crime16}/>
     </div>
        </div>
    )
}

export default Crime