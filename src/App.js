import React, { useEffect, useState } from "react";
import Login from './components/Login';
import Main from './components/Main';
import Lis from './components/Lis';
import Change from './components/Change';
import Profile from './components/Profile';
import Forget from './components/Forget';
import Card from './components/Card';
import Set from './components/Set';
import {Switch,Route, Redirect} from 'react-router-dom'
import Search from "./components/Search";
import Action from "./components/Action";
import Sci from "./components/Sci";
import Comedy from "./components/Comedy";
import Tv from "./components/Tv";
import Mystery from "./components/Mystery";
import Crime from "./components/Crime";
import Thriller from "./components/Thriller";
import Doc from "./components/Doc";
import Horror from "./components/Horror";
import Romance from "./components/Romance";
import Animated from "./components/Animated";
import Drama from "./components/Drama";
import Family from "./components/Family";
import Fantasy from "./components/Fantasy";
import History from "./components/History";
import Checkout from "./Stripe/Checkout";
import Axios from "axios";
function App() {
  const [sess, setsess] = useState(false);
  useEffect(() => {
    async function fun(){
      await Axios.get("/ses")
    .then(res=>{
      if(res.data.user===undefined){
        console.log("empty");
      }
      else{
        setsess(true);
        console.log(res.data.user);
      }
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
    }
    fun();
  }, [])
  return( 
      <div>
        {/* <Main/> */}
        <Switch>
                <Route exact path="/" component={()=><Login/>}/>
                {sess===true?<Route exact path="/home" component={()=><Main/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/action" component={()=><Action/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/sci_fi" component={()=><Sci/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/comedy" component={()=><Comedy/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/tvShow" component={()=><Tv/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/mystery" component={()=><Mystery/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/crime" component={()=><Crime/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/thriller" component={()=><Thriller/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/doc" component={()=><Doc/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/horror" component={()=><Horror/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/romance" component={()=><Romance/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/animated" component={()=><Animated/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/drama" component={()=><Drama/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/family" component={()=><Family/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/fantasy" component={()=><Fantasy/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/history" component={()=><History/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/login" component={()=><Login/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/card" component={()=><Card/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/list" component={()=><Lis/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/profile" component={()=><Profile/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/change" component={()=><Change/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/forget" component={()=><Forget/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/set" component={()=><Set/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/search" component={()=><Search/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                {sess===true?<Route exact path="/checkout" component={()=><Checkout/>}/>:<div style={{backgroundImage:`url(${process.env.PUBLIC_URL + `/danger.jpg`})`,backgroundPosition:"center",height:"100vh",backgroundRepeat:"no-repeat"}}></div>}
                <Redirect to="/"/>
            </Switch>
      </div>
  );
}

export default App;
