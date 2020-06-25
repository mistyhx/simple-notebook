import React, { useState, useEffect } from "react";
import { Plus, Book } from "react-feather";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
import "./App.css";

function App() {
  const defaultNote = [{ title: "Welcome", content: "This is a simple notebook for markdowns" }];
  const initialState = JSON.parse(window.localStorage.getItem("notes")) || defaultNote;
  const [keyword, setKeyword] = useState("");
  const [notes, setNotes] = useState(initialState);
  const [noteIndex, setNoteIndex] = useState(0);
  const [filterednotes, setFilterednotes] = useState(notes);

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const newNote = () => {
    const temp = [...notes];
    const newNote = { title: "New Title", content: "Write your markdown" };
    temp.push(newNote);
    setNotes(temp);
    setFilterednotes(temp);
    setNoteIndex(temp.length - 1);
  };

  const deleteNote = index => {
    const temp = [...notes];
    console.log(temp);
    console.log(temp.length);
    if (temp.length - 1 > 0) {
      temp.splice(index, 1);
      setNotes(temp);
      setFilterednotes(temp);
      if (index > 0) {
        setNoteIndex(noteIndex - 1);
      }
    } else {
      setNotes(defaultNote);
      setFilterednotes(defaultNote);
    }
  };

  const updateContent = note => {
    const temp = [...notes];
    temp[noteIndex].content = note;
    setNotes(temp);
    setFilterednotes(temp);
  };

  const updateTitle = title => {
    const temp = [...notes];
    temp[noteIndex].title = title;
    setNotes(temp);
    setFilterednotes(temp);
  };

  const filterNotes = keyword => {
    setKeyword(keyword);
    if (keyword) {
      const temp = filterednotes.filter(
        item =>
          item.title.toLowerCase().includes(keyword.toLowerCase()) ||
          item.content.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilterednotes(temp);
    } else {
      setFilterednotes(notes);
    }
  };

  return (
    <div className="App">
      <div className="logo">
        <Book size={24} /> <span className="logo-name">SIMPLE NOTE</span>
      </div>
      <div className="note">
        <NoteList
          keyword={keyword}
          notes={filterednotes}
          noteIndex={noteIndex}
          onSelect={index => setNoteIndex(index)}
          onFilter={value => filterNotes(value)}
        />
        <NoteEditor
          note={notes[noteIndex]}
          onUpdateContent={note => updateContent(note)}
          onUpdateTitle={title => updateTitle(title)}
          onDelete={() => deleteNote(noteIndex)}
        />
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
