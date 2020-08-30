import React from 'react'
import Row from "./Row"
import Horrorreq from "../Horrorreq";
import Nav from './Nav';
function Horror() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Horror: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Horrorreq.Horror2}/>
            <Row title="New release" large={true} fetch={Horrorreq.Horror1}/>
            <Row title="Most Watched" large={true} fetch={Horrorreq.Horror3}/>
            <Row title="Horror comedy" large={true} fetch={Horrorreq.Horror4}/>
            <Row title="Gory Horror" large={true} fetch={Horrorreq.Horror5}/>
            <Row title="Supernatural Horror" large={true} fetch={Horrorreq.Horror6}/>
            <Row title="Action Horror" large={true} fetch={Horrorreq.Horror7}/>
            <Row title="Horror Mystery" large={true} fetch={Horrorreq.Horror8}/>
            <Row title="Horror Documentary" large={true} fetch={Horrorreq.Horror9}/>
            <Row title="Suspense Horror" large={true} fetch={Horrorreq.Horror10}/>
            <Row title="Crime Horror" large={true} fetch={Horrorreq.Horror11}/>
            <Row title="Historic Horror" large={true} fetch={Horrorreq.Horror12}/>
            <Row title="Horror fiction" large={true} fetch={Horrorreq.Horror13}/>
            <Row title="Horror Zombie" large={true} fetch={Horrorreq.Horror14}/>
            <Row title="Horror Drama" large={true} fetch={Horrorreq.Horror15}/>
            <Row title="Horror adventure" large={true} fetch={Horrorreq.Horror16}/>
     </div>
        </div>
    )
}

export default Horror
