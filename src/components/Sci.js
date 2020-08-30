import React, { useEffect } from 'react'
import Row from "./Row"
import Scireq from "../Scireq.js"
import axios from '../Axios/axios'
import Nav from './Nav';
function Action() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Science Fiction: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Scireq.Sci2}/>
            <Row title="New release" large={true} fetch={Scireq.Sci1}/>
            <Row title="Blockbuster Sci-Fi" large={true} fetch={Scireq.Sci3}/>
            <Row title="Action Sci-Fi" large={true} fetch={Scireq.Sci4}/>
            <Row title="Suspeneful Sci-Fi" large={true} fetch={Scireq.Sci5}/>
            <Row title="Supernatural Sci-Fi" large={true} fetch={Scireq.Sci6}/>
            <Row title="Fantasy Sci-Fi" large={true} fetch={Scireq.Sci7}/>
            <Row title="Sci-Fi Adventure" large={true} fetch={Scireq.Sci8}/>
            <Row title="Sci-Fi Thriller" large={true} fetch={Scireq.Sci9}/>
            <Row title="Sci-Fi Mystery" large={true} fetch={Scireq.Sci10}/>
            <Row title="Sci-Fi Comedy" large={true} fetch={Scireq.Sci11}/>
            <Row title="Sci-Fi Drama" large={true} fetch={Scireq.Sci12}/>
            <Row title="Sci-Fi Space" large={true} fetch={Scireq.Sci13}/>
            <Row title="Animated Sci-Fi" large={true} fetch={Scireq.Sci14}/>
            <Row title="Apocalyptic" large={true} fetch={Scireq.Sci15}/>
            <Row title="Cyberpunk" large={true} fetch={Scireq.Sci16}/>
     </div>
        </div>
    )
}

export default Action
