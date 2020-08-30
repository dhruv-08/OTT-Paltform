import React from 'react'
import Row from "./Row"
import Tvreq from "../Tvreq";
import Nav from './Nav';
function Tv() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Tv Shows: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Tvreq.Tv2}/>
            <Row title="New release" large={true} fetch={Tvreq.Tv1}/>
            <Row title="Adventures" large={true} fetch={Tvreq.Tv3}/>
            <Row title="Action comedy" large={true} fetch={Tvreq.Tv4}/>
            <Row title="Action Thriller" large={true} fetch={Tvreq.Tv5}/>
            <Row title="Crime Action" large={true} fetch={Tvreq.Tv6}/>
            <Row title="Martial Art action" large={true} fetch={Tvreq.Tv7}/>
            <Row title="Spy Action" large={true} fetch={Tvreq.Tv8}/>
            <Row title="Action sci-fi" large={true} fetch={Tvreq.Tv9}/>
            <Row title="Action Mystery" large={true} fetch={Tvreq.Tv10}/>
            <Row title="Action Adventure" large={true} fetch={Tvreq.Tv11}/>
            <Row title="Action fantasy" large={true} fetch={Tvreq.Tv12}/>
            <Row title="Action fiction" large={true} fetch={Tvreq.Tv13}/>
            <Row title="Action Animated" large={true} fetch={Tvreq.Tv14}/>
            <Row title="Action Drama" large={true} fetch={Tvreq.Tv15}/>
            <Row title="Military Action" large={true} fetch={Tvreq.Tv16}/>
     </div>
        </div>
    )
}

export default Tv
