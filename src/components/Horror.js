import React, { lazy, Suspense } from 'react'
// import Row from "./Row"
import Horrorreq from "../Horrorreq";
import Nav from './Nav';
const Row=lazy(()=>import('./Row'));
function Horror() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Horror: </h1>
            <div className="main">
            <Suspense fallback={<div>Loading....</div>}><Row title="Suggested for you" large={true} fetch={Horrorreq.Horror2}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="New release" large={true} fetch={Horrorreq.Horror1}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Most Watched" large={true} fetch={Horrorreq.Horror3}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Horror comedy" large={true} fetch={Horrorreq.Horror4}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Gory Horror" large={true} fetch={Horrorreq.Horror5}/></Suspense>
     </div>
        </div>
    )
}

export default Horror
