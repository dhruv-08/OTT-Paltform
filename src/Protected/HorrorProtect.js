import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Horror from '../components/Horror';

function HorrorProtect() {
    const [session, setsession] = useState(false)
    useEffect(() => {
        Axios.get("/ses")
        .then(res=>{
          if(res.data.user===undefined){
            setsession(false);
          }
          else{
            setsession(true);
          }
          console.log(res);
        }).catch(err=>{
          console.log(err);
        })
        
      }, [])
    return (
        <div>
            {session===true && <Horror/>}
        </div>
    )
}

export default HorrorProtect
