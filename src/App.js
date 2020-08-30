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
                <Route exact path="/logout" component={()=><Login/>}/>
                <Route exact path="/card" component={()=><Card/>}/>
                <Route exact path="/list" component={()=><Lis/>}/>
                <Route exact path="/profile" component={()=><Profile/>}/>
                <Route exact path="/change" component={()=><Change/>}/>
                <Route exact path="/forget" component={()=><Forget/>}/>
                <Route exact path="/set" component={()=><Set/>}/>
                <Route exact path="/search" component={()=><Search/>}/>
            </Switch>
      </div>
  );
}

export default App;
