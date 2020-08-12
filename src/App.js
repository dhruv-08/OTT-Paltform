import React from "react";
import Login from './components/Login';
import Main from './components/Main';
import Lis from './components/Lis';
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
            </Switch>
      </div>
  );
}

export default App;
