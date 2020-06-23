import React from "react";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="note">
        <NoteList />
        <NoteEditor />
      </div>
    </div>
  );
}

export default App;
