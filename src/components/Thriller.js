import React, { lazy, Suspense } from 'react'
// import Row from "./Row"
import Thrillerreq from "../Thrillerreq";
import Nav from './Nav';
const Row=lazy(()=>import('./Row'));
function Thriller() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Thriller: </h1>
            <div className="main">
            <Suspense fallback={<div>Loading....</div>}><Row title="Suggested for you" large={true} fetch={Thrillerreq.Thriller2}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="New release" large={true} fetch={Thrillerreq.Thriller1}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Most Watched" large={true} fetch={Thrillerreq.Thriller3}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Crime Thriller" large={true} fetch={Thrillerreq.Thriller4}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Action Thriller" large={true} fetch={Thrillerreq.Thriller5}/></Suspense>
     </div>
        </div>
    )
}

export default Thriller
