import React from 'react'
import Row from "./Row"
import Familyreq from "../Familyreq";
import Nav from './Nav';
function Family() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Family: </h1>
            <div className="main">
            <Row title="Suggested for you" large={true} fetch={Familyreq.Family2}/>
            <Row title="New release" large={true} fetch={Familyreq.Family1}/>
            <Row title="Most Watched" large={true} fetch={Familyreq.Family3}/>
            <Row title="Movies based on Childern's books" large={true} fetch={Familyreq.Family4}/>
            <Row title="Family Adventures" large={true} fetch={Familyreq.Family5}/>
            <Row title="Family Comedies" large={true} fetch={Familyreq.Family6}/>
            <Row title="Family Features" large={true} fetch={Familyreq.Family7}/>
            <Row title="Family Sci-Fi" large={true} fetch={Familyreq.Family8}/>
            <Row title="Family fantasy" large={true} fetch={Familyreq.Family9}/>
            <Row title="Talking-Animal Childern" large={true} fetch={Familyreq.Family10}/>
            <Row title="Family Drama" large={true} fetch={Familyreq.Family11}/>
            <Row title="Family Mystery" large={true} fetch={Familyreq.Family12}/>
            <Row title="Family fiction" large={true} fetch={Familyreq.Family13}/>
            <Row title="Family Animated" large={true} fetch={Familyreq.Family14}/>
            <Row title="Family Movies" large={true} fetch={Familyreq.Family15}/>
            <Row title="Family Action" large={true} fetch={Familyreq.Family16}/>
     </div>
        </div>
    )
}

export default Family
