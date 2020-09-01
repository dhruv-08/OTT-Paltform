import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Thriller from '../components/Thriller';

function ThrillerProtect() {
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
            {session===true && <Thriller/>}
        </div>
    )
}

export default ThrillerProtect
