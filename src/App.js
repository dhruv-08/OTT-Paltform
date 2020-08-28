import React from "react";
import Login from './components/Login';
import Main from './components/Main';
import Lis from './components/Lis';
import Change from './components/Change';
import Profile from './components/Profile';
import Forget from './components/Forget';
import Set from './components/Set';
import {Switch,Route} from 'react-router-dom'
function App() {

  return( 
      <div>
        {/* <Main/> */}
        <Switch>
                <Route exact path="/" component={()=><Login/>}/>
                <Route exact path="/home" component={()=><Main/>}/>
                <Route exact path="/logout" component={()=><Login/>}/>
                <Route exact path="/list" component={()=><Lis/>}/>
                <Route exact path="/profile" component={()=><Profile/>}/>
                <Route exact path="/change" component={()=><Change/>}/>
                <Route exact path="/forget" component={()=><Forget/>}/>
                <Route exact path="/set" component={()=><Set/>}/>
            </Switch>
      </div>
  );
}

export default App;
