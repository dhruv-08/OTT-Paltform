import React, { lazy, Suspense } from 'react'
// import Row from "./Row"
import Romancereq from "../Romancereq";
import Nav from './Nav';
const Row=lazy(()=>import('./Row'));
function Romance() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Romance: </h1>
            <div className="main">
            <Suspense fallback={<div>Loading....</div>}><Row title="Suggested for you" large={true} fetch={Romancereq.Romance2}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="New release" large={true} fetch={Romancereq.Romance1}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Most Watched" large={true} fetch={Romancereq.Romance3}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Steamy Romance" large={true} fetch={Romancereq.Romance4}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Romance Movies based on Books" large={true} fetch={Romancereq.Romance5}/></Suspense>
     </div>
        </div>
    )
}

export default Romance
