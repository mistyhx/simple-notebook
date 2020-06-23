import React, { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(JSON.parse(window.localStorage.getItem("notes")));
  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify({ key: "001", title: "Javascript", content: "My content" }));
    console.log(window.localStorage);
  }, [notes]);
  return (
    <div className="App">
      <div className="note">
        <NoteList notes={notes} />
        <NoteEditor />
      </div>
    </div>
  );
}

export default App;
