import React, { useState, useEffect } from "react";
import { Plus, Book } from "react-feather";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
import "./App.css";

function App() {
  const initialState = JSON.parse(window.localStorage.getItem("notes")) || [
    { title: "Tutorial", content: "You can write your own markdown and the browser will remember" },
  ];
  const [notes, setNotes] = useState(initialState);
  const [noteIndex, setNoteIndex] = useState(0);

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const newNote = () => {
    const temp = [...notes];
    const newNote = { title: "Title", content: "Write your notes" };
    temp.push(newNote);
    setNotes(temp);
  };

  const deleteNote = index => {
    const temp = [...notes];
    temp.splice(index, 1);
    setNotes(temp);
    if (index > 0) {
      setNoteIndex(noteIndex - 1);
    }
  };

  const updateNote = note => {
    const temp = [...notes];
    temp[noteIndex] = note;
    setNotes(temp);
  };

  return (
    <div className="App">
      <div className="logo">
        <Book size={24} /> <span className="logo-name">SIMPLE NOTE</span>
      </div>
      <div className="note">
        <NoteList notes={notes} noteIndex={noteIndex} onSelect={index => setNoteIndex(index)} />
        <NoteEditor note={notes[noteIndex]} onDelete={() => deleteNote(noteIndex)} />
        <div className="button-add" onClick={() => newNote()}>
          <Plus size={36} />
        </div>
      </div>

      <svg className="illustration" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#fffaf0" points="0,100 100,0 100,100" />
      </svg>
    </div>
  );
}

export default App;
