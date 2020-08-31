import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import Login from '../components/Login';

function HomeProtect() {
    const history = useHistory();
    const [session, setsession] = useState(false)
    useEffect(() => {
        Axios.get("/ses")
        .then(res=>{
          if(res.data.user===undefined){
            setsession(false);
          }
          else{
            history.push("/home",null);
          }
          console.log(res);
        }).catch(err=>{
          console.log(err);
        })
        
      }, [])
    return (
        <div>
            {session===false && <Login/>}
        </div>
    )
}

export default HomeProtect
