import React, { lazy, Suspense } from 'react'
// import Row from "./Row"
import Fantasyreq from "../Fantasyreq";
import Nav from './Nav';
const Row=lazy(()=>import('./Row'));
function Fantasy() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Fantasy: </h1>
            <div className="main">
            <Suspense fallback={<div>Loading....</div>}><Row title="Suggested for you" large={true} fetch={Fantasyreq.Fantasy2}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="New release" large={true} fetch={Fantasyreq.Fantasy1}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Most Watched" large={true} fetch={Fantasyreq.Fantasy3}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Blockbuster Fantasy" large={true} fetch={Fantasyreq.Fantasy4}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Action Fantasy" large={true} fetch={Fantasyreq.Fantasy5}/></Suspense>
     </div>
        </div>
    )
}

export default Fantasy
