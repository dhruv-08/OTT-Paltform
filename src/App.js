import React from "react";
import Main from './components/Main';
import Lis from './components/Lis';
import Change from './components/Change';
import Profile from './components/Profile';
import Card from './components/Card';
import {Switch,Route,Redirect} from 'react-router-dom'
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
import LoginProtect from "./Protected/LoginProtect";
import HomeProtect from "./Protected/HomeProtect";
import ActionProtect from "./Protected/ActionProtect";
import SciProtect from "./Protected/SciProtect";
import ComedyProtect from "./Protected/ComedyProtect";
import TvShowProtect from "./Protected/TvShowProtect";
import MysteryProtect from "./Protected/MysteryProtect";
import CrimeProtect from "./Protected/CrimeProtect";
import ThrillerProtect from "./Protected/ThrillerProtect";
import DocProtect from "./Protected/DocProtect";
import HorrorProtect from "./Protected/HorrorProtect";
import RomanceProtect from "./Protected/RomanceProtect";
import AnimatedProtect from "./Protected/AnimatedProtect";
import DramaProtect from "./Protected/DramaProtect";
import FamilyProtect from "./Protected/FamilyProtect";
import FantasyProtect from "./Protected/FantasyProtect";
import HistoryProtect from "./Protected/HistoryProtect";
import LisProtect from "./Protected/LisProtect";
import ProfileProtect from "./Protected/ProfileProtect";
import ChangeProtect from "./Protected/ChangeProtect";
import SearchProtect from "./Protected/SearchProtect";
function App() {  
  return( 
      <div>
        {/* <Main/> */}
        <Switch>
                <Route exact path="/" component={()=><LoginProtect/>}/>
                <Route exact path="/home" component={()=><HomeProtect/>}/>
                <Route exact path="/action" component={()=><ActionProtect/>}/>
                <Route exact path="/sci_fi" component={()=><SciProtect/>}/>
                <Route exact path="/comedy" component={()=><ComedyProtect/>}/>
                <Route exact path="/tvShow" component={()=><TvShowProtect/>}/>
                <Route exact path="/mystery" component={()=><MysteryProtect/>}/>
                <Route exact path="/crime" component={()=><CrimeProtect/>}/>
                <Route exact path="/thriller" component={()=><ThrillerProtect/>}/>
                <Route exact path="/doc" component={()=><DocProtect/>}/>
                <Route exact path="/horror" component={()=><HorrorProtect/>}/>
                <Route exact path="/romance" component={()=><RomanceProtect/>}/>
                <Route exact path="/animated" component={()=><AnimatedProtect/>}/>
                <Route exact path="/drama" component={()=><DramaProtect/>}/>
                <Route exact path="/family" component={()=><FamilyProtect/>}/>
                <Route exact path="/fantasy" component={()=><FantasyProtect/>}/>
                <Route exact path="/history" component={()=><HistoryProtect/>}/>
                <Route exact path="/list" component={()=><LisProtect/>}/>
                <Route exact path="/profile" component={()=><ProfileProtect/>}/>
                <Route exact path="/change" component={()=><ChangeProtect/>}/>
                <Route exact path="/search" component={()=><SearchProtect/>}/>
                <Route exact path="/checkout" component={()=><Checkout/>}/>
                <Redirect to="/"/>
            </Switch>
      </div>
  );
}

export default App;
