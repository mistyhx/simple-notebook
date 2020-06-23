import React, { useState, useEffect } from "react";
import { Plus } from "react-feather";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
import "./App.css";

function App() {
  const initialState = JSON.parse(window.localStorage.getItem("notes")) || [
    { createdOn: new Date(), title: "Drat", content: "draft", edit: false },
  ];
  const [notes, setNotes] = useState(initialState);
  const [noteIndex, setNoteIndex] = useState(0);

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
    console.log(window.localStorage);
  }, [notes]);

  const newNote = () => {
    const temp = [...notes];
    const newNote = { createdOn: new Date(), title: "New note", content: "new note", edit: false };
    temp.push(newNote);
    setNotes(temp);
  };

  const deleteNote = index => {
    const temp = [...notes];
    temp.splice(index, 1);
    console.log(temp);
    setNotes(temp);
  };

  return (
    <div className="App">
      <div className="note">
        <NoteList notes={notes} onSelect={index => setNoteIndex(index)} />
        <NoteEditor note={notes[noteIndex]} onDelete={() => deleteNote(noteIndex)} />
        <div className="button-add" onClick={() => newNote()}>
          <Plus size={36} />
        </div>
      </div>
    </div>
  );
}

export default App;
