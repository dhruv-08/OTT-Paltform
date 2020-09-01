import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import History from '../components/History';

function HistoryProtect() {
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
            {session===true && <History/>}
        </div>
    )
}

export default HistoryProtect
