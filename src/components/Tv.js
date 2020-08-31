import React, { lazy, Suspense } from 'react'
// import Row from "./Row"
import Tvreq from "../Tvreq";
import Nav from './Nav';
const Row=lazy(()=>import('./Row'));
function Tv() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Tv Shows: </h1>
            <div className="main">
            <Suspense fallback={<div>Loading....</div>}><Row title="Suggested for you" large={true} fetch={Tvreq.Tv2}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="New release" large={true} fetch={Tvreq.Tv1}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Adventures" large={true} fetch={Tvreq.Tv3}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Action comedy" large={true} fetch={Tvreq.Tv4}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Action Thriller" large={true} fetch={Tvreq.Tv5}/></Suspense>
     </div>
        </div>
    )
}

export default Tv
