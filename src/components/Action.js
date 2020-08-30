import React from 'react'
import Row from "./Row"
import Actionreq from "../Actionreq";
import Nav from './Nav';
function Action() {
    const array=[
        "Suggested for you","New release","Adventures","Action comedy","Action Thriller"
    ]
    const data=[Actionreq.Action2,Actionreq.Action1,Actionreq.Action3,Actionreq.Action4,Actionreq.Action5];
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Action & Adventure: </h1>
            <div className="main">
            {array.map((res,i)=>(
                <Row title={array[i]} large={true} fetch={data[i]}/>
            ))}
            {/* <Row key={1} title="Suggested for you" large={true} fetch={Actionreq.Action2}/>
            <Row key={2} title="New release" large={true} fetch={Actionreq.Action1}/>
            <Row key={3} title="Adventures" large={true} fetch={Actionreq.Action3}/>
            <Row key={4} title="Action comedy" large={true} fetch={Actionreq.Action4}/>
            <Row key={5} title="Action Thriller" large={true} fetch={Actionreq.Action5}/> */}
     </div>
        </div>
    )
}

export default Action
