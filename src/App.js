import React from "react";
import "./App.css";
import Banner from './components/Banner';
import Nav from './components/Nav';
import Main from "./components/Main"
import {Switch,Route,Redirect, Link} from 'react-router-dom'
function App() {
  function HomePage(){
    return <h1>hello</h1>
  }
  return( 
  <div className="App">
    <Nav/>
    <Banner/>
    <Switch>
          <Route exact path="/home" component={Main}/>
          <Route exact path="/logout" component={Main}/>
          <Redirect to="/home"/>
        </Switch>
  </div>
  );
}

export default App;
