import React, { lazy, Suspense } from 'react'
// import Row from "./Row"
import Comedyreq from "../Comedyreq";
import Nav from './Nav';
const Row=lazy(()=>import('./Row'));
function Comedy() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Comedy:  </h1>
            <div className="main">
            <Suspense fallback={<div>Loading....</div>}><Row title="Suggested for you" large={true} fetch={Comedyreq.Comedy2}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="New release" large={true} fetch={Comedyreq.Comedy1}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Wacky Comedies" large={true} fetch={Comedyreq.Comedy3}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Dark Comedies" large={true} fetch={Comedyreq.Comedy4}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Independent Comedies" large={true} fetch={Comedyreq.Comedy5}/></Suspense>
     </div>
        </div>
    )
}

export default Comedy
