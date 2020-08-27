import React from "react";
import Main from './components/Main';
import Lis from './components/Lis';
import {Switch,Route} from 'react-router-dom'
function App() {
  
  return( 
      <div>
        {/* <Main/> */}
        <Switch>
                <Route exact path="/home" component={()=><Main/>}/>
                <Route exact path="/list" component={()=><Lis/>}/>
            </Switch>
      </div>
  );
}

export default App;
