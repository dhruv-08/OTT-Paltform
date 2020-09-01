import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Search from '../components/Search';

function SearchProtect() {
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
            {session===true && <Search/>}
        </div>
    )
}

export default SearchProtect
