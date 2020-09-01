import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Crime from '../components/Crime';

function CrimeProtect() {
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
            {session===true && <Crime/>}
        </div>
    )
}

export default CrimeProtect
