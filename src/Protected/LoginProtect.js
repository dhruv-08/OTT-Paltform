import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Login from '../components/Login';

function LoginProtect() {
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
            {session===true && <Login/>}
        </div>
    )
}

export default LoginProtect
