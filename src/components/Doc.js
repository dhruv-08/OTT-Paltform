import React, { lazy, Suspense } from 'react'
// import Row from "./Row"
import Docreq from "../Docreq";
import Nav from './Nav';
const Row=lazy(()=>import('./Row'));
function Doc() {
    return (
        <div style={{backgroundColor:"#111"}}>
            <Nav check={true}/>
             <h1 style={{color:"white",paddingTop:"50px",paddingLeft:"1%",paddingBottom:"1%"}}>Documentaries: </h1>
            <div className="main">
            <Suspense fallback={<div>Loading....</div>}><Row title="Suggested for you" large={true} fetch={Docreq.Doc2}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="New release" large={true} fetch={Docreq.Doc1}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Most Watched" large={true} fetch={Docreq.Doc3}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Biographical Documentaries" large={true} fetch={Docreq.Doc4}/></Suspense>
            <Suspense fallback={<div>Loading....</div>}><Row title="Crime Documentaries" large={true} fetch={Docreq.Doc5}/></Suspense>
     </div>
        </div>
    )
}

export default Doc
