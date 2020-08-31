import React, { lazy, Suspense } from 'react'
// import Row from "./Row"
import Scireq from "../Scireq.js"
import Nav from './Nav';
const Row=lazy(()=>import('./Row'));
function Sci() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Science Fiction: </h1>
            <div className="main">
            <Suspense fallback={<div>Loading....</div>}><Row title="Suggested for you" large={true} fetch={Scireq.Sci2}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="New release" large={true} fetch={Scireq.Sci1}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Blockbuster Sci-Fi" large={true} fetch={Scireq.Sci3}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Action Sci-Fi" large={true} fetch={Scireq.Sci4}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Suspeneful Sci-Fi" large={true} fetch={Scireq.Sci5}/></Suspense>
     </div>
        </div>
    )
}

export default Sci
