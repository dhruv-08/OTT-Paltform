import React from "react";
import Login from './components/Login';
import Main from './components/Main';
import Lis from './components/Lis';
import Change from './components/Change';
import Profile from './components/Profile';
import Forget from './components/Forget';
import Card from './components/Card';
import Set from './components/Set';
import {Switch,Route} from 'react-router-dom'
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
function App() {

  return( 
      <div>
        {/* <Main/> */}
        <Switch>
                <Route exact path="/" component={()=><Login/>}/>
                <Route exact path="/home" component={()=><Main/>}/>
                <Route exact path="/action" component={()=><Action/>}/>
                <Route exact path="/sci_fi" component={()=><Sci/>}/>
                <Route exact path="/comedy" component={()=><Comedy/>}/>
                <Route exact path="/tvShow" component={()=><Tv/>}/>
                <Route exact path="/mystery" component={()=><Mystery/>}/>
                <Route exact path="/crime" component={()=><Crime/>}/>
                <Route exact path="/thriller" component={()=><Thriller/>}/>
                <Route exact path="/doc" component={()=><Doc/>}/>
                <Route exact path="/horror" component={()=><Horror/>}/>
                <Route exact path="/romance" component={()=><Romance/>}/>
                <Route exact path="/animated" component={()=><Animated/>}/>
                <Route exact path="/drama" component={()=><Drama/>}/>
                <Route exact path="/family" component={()=><Family/>}/>
                <Route exact path="/fantasy" component={()=><Fantasy/>}/>
                <Route exact path="/history" component={()=><History/>}/>
                <Route exact path="/" component={()=><Login/>}/>
                <Route exact path="/card" component={()=><Card/>}/>
                <Route exact path="/list" component={()=><Lis/>}/>
                <Route exact path="/profile" component={()=><Profile/>}/>
                <Route exact path="/change" component={()=><Change/>}/>
                <Route exact path="/forget" component={()=><Forget/>}/>
                <Route exact path="/set" component={()=><Set/>}/>
                <Route exact path="/search" component={()=><Search/>}/>
                <Route exact path="/checkout" component={()=><Checkout/>}/>
            </Switch>
      </div>
  );
}

export default App;
