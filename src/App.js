import React from "react";
import "./App.css";
import ProjectsList from "./components/Project-List";

function App() {
  return (
    <>
      <h2>React Projects</h2>
      <div className="App">
        <ProjectsList />
      </div>
    </>
  );
}

export default App;
