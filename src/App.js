import React from "react";
import Header from "./Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Test from "./Test";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        
        <Route path="/chat" element={<h1>HEllo</h1>}/>
        <Route path="/" element={<><TinderCards/><SwipeButtons/></>}/>
       
       
      </Routes>

      
    </div>
  );
}


{/* Header */}
{/* Tinder Cards */}
          {/* Buttons */}

          {/* Chat Screen */}
          {/* Individual Chat Screen */}
export default App;
