import React from 'react'
import Row from "./Row"
import Dramareq from "../Dramareq";
import Nav from './Nav';
function Drama() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Drama: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Dramareq.Drama2}/>
            <Row title="New release" large={true} fetch={Dramareq.Drama1}/>
            <Row title="Most watched" large={true} fetch={Dramareq.Drama3}/>
            <Row title="Crime Drama" large={true} fetch={Dramareq.Drama4}/>
            <Row title="Drama Based on Nooks" large={true} fetch={Dramareq.Drama5}/>
            <Row title="Drama Based on Real Life" large={true} fetch={Dramareq.Drama6}/>
            <Row title="Family Drama" large={true} fetch={Dramareq.Drama7}/>
            <Row title="Independent Dramas" large={true} fetch={Dramareq.Drama8}/>
            <Row title="Sci-fi Drama" large={true} fetch={Dramareq.Drama9}/>
            <Row title="Drama Mystery" large={true} fetch={Dramareq.Drama10}/>
            <Row title="Drama Adventure" large={true} fetch={Dramareq.Drama11}/>
            <Row title="Drama fantasy" large={true} fetch={Dramareq.Drama12}/>
            <Row title="Drama fiction" large={true} fetch={Dramareq.Drama13}/>
            <Row title="Drama Animated" large={true} fetch={Dramareq.Drama14}/>
            <Row title="Romantic Drama" large={true} fetch={Dramareq.Drama15}/>
            <Row title="Military Dramas" large={true} fetch={Dramareq.Drama16}/>
     </div>
        </div>
    )
}

export default Drama
