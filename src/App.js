import React from "react";
import "./App.css";
import Nasa from "./components/nasa";

function App() {
  return (
    <div className="App">
      <Nasa limit={5} />
    </div>
  );
}

export default App;
