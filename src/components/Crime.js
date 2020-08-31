import React, { lazy, Suspense } from 'react'
// import Row from "./Row"
import Crimereq from "../Crimereq";
import Nav from './Nav';
const Row=lazy(()=>import('./Row'));
function Crime() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Crime: </h1>
            <div className="main">
            <Suspense fallback={<div>Loading....</div>}><Row title="Suggested for you" large={true} fetch={Crimereq.Crime2}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="New release" large={true} fetch={Crimereq.Crime1}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Most Watched" large={true} fetch={Crimereq.Crime3}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Caper" large={true} fetch={Crimereq.Crime4}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Heist" large={true} fetch={Crimereq.Crime5}/></Suspense>
     </div>
        </div>
    )
}

export default Crime