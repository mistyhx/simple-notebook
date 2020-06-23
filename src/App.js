import React, { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(JSON.parse(window.localStorage.getItem("notes")));
  const newNote = () => {
    const temp = [...notes];
    const newNote = { createOn: new Date(), title: "New note", content: "new note" };
    temp.push(newNote);
    setNotes(temp);
  };
  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
    console.log(window.localStorage);
  }, [notes]);
  return (
    <div className="App">
      <div className="note">
        <NoteList notes={notes} />
        <NoteEditor />
        <div className="button-add" onClick={() => newNote()}>
          +
        </div>
      </div>
    </div>
  );
}

export default App;
