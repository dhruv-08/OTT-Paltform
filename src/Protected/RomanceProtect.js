import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Romance from '../components/Romance';

function RomanceProtect() {
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
        }).catch(err=>{
          console.log(err);
        })
        
      }, [])
    return (
        <div>
            {session===true && <Romance/>}
        </div>
    )
}

export default RomanceProtect
