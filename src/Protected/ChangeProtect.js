import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Change from '../components/Change';

function ChangeProtect() {
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
            {session===true && <Change/>}
        </div>
    )
}

export default ChangeProtect
