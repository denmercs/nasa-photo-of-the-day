import React from "react";
import "./App.css";
import Nasa from "./components/nasa";

function App() {
  return (
    <div className="App">
      <div className="proTitle">
        <h1>Photo of the Day</h1>
      </div>

      <div className="photoCard">
        <Nasa />
      </div>
    </div>
  );
}

export default App;
