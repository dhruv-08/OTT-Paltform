import React, { lazy, Suspense } from 'react'
// import Row from "./Row"
import Dramareq from "../Dramareq";
import Nav from './Nav';
const Row=lazy(()=>import('./Row'));
function Drama() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Drama: </h1>
            <div className="main">
                <Suspense fallback={<div>Loading....</div>}>
            <Row title="Suggested for you" large={true} fetch={Dramareq.Drama2}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="New release" large={true} fetch={Dramareq.Drama1}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Most watched" large={true} fetch={Dramareq.Drama3}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Crime Drama" large={true} fetch={Dramareq.Drama4}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Drama Based on Nooks" large={true} fetch={Dramareq.Drama5}/></Suspense>
     </div>
        </div>
    )
}

export default Drama
