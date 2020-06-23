import React, { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
import "./App.css";

function App() {
  const [notes, setNotes] = useState("");
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
