import React, { useState, useEffect } from "react";
import { Plus } from "react-feather";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
import "./App.css";

function App() {
  const tempNote = [
    { key: 1, title: "my note", content: "my note1" },
    { key: 2, title: "my 2 note", content: "my note 2" },
  ];
  const [notes, setNotes] = useState(JSON.parse(window.localStorage.getItem("notes")));
  const newNote = () => {
    const temp = notes;
    const newNote = { createOn: new Date(), title: "New note", content: "new note" };
    temp.push(newNote);
    console.log(temp);
    setNotes(temp);
  };
  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(tempNote));
    console.log(window.localStorage);
  }, [notes]);
  return (
    <div className="App">
      <div className="note">
        <NoteList notes={notes} />
        <NoteEditor />
        <div className="button-add" onClick={() => newNote()}>
          <Plus size={36} />
        </div>
      </div>
    </div>
  );
}

export default App;
