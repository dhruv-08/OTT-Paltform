import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Family from '../components/Family';

function FamilyProtect() {
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
            {session===true && <Family/>}
        </div>
    )
}

export default FamilyProtect
