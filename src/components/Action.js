import React, { lazy, Suspense } from 'react'
// import Row from "./Row"
import Actionreq from "../Actionreq";
import Nav from './Nav';
const Row=lazy(()=>import('./Row'));
function Action() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Action & Adventure: </h1>
            <div className="main">
            <Suspense fallback={<div>Loading....</div>}><Row title="Suggested for you" large={true} fetch={Actionreq.Action2}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="New release" large={true} fetch={Actionreq.Action1}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Adventures" large={true} fetch={Actionreq.Action3}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Action comedy" large={true} fetch={Actionreq.Action4}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Action Thriller" large={true} fetch={Actionreq.Action5}/></Suspense>
     </div>
        </div>
    )
}

export default Action
