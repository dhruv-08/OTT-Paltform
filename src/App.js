import React from "react";
import "./App.css";
import request from "./request";
import Row from "./components/Row"
function App() {
  return( 
  <div className="App">
    <Row title="Trending" fetch={request.Trending} large={true}/>
    <Row title="Netflix Original" fetch={request.NetflixOrg}/>
    <Row title="Top Rated" fetch={request.TopRated}/>
    <Row title="Action" fetch={request.Action}/>
    <Row title="Sci-fi" fetch={request.Sci_fi}/>
    <Row title="Comedy" fetch={request.Comedy}/>
    <Row title="Mystery" fetch={request.Mystery}/>
    <Row title="Crime" fetch={request.Crime}/>
    <Row title="Horror" fetch={request.Horror}/>
    <Row title="Romance" fetch={request.Romance}/>
    <Row title="Thriller" fetch={request.Thriller}/>
    <Row title="Animated" fetch={request.Animated}/>
    <Row title="Drama" fetch={request.Drama}/>
    <Row title="Family" fetch={request.Family}/>
    <Row title="Fantasy" fetch={request.Fantasy}/>
    <Row title="History" fetch={request.History}/>
    <Row title="War" fetch={request.War}/>
    <Row title="Adventure" fetch={request.Adventure}/>
  </div>
  );
}

export default App;
