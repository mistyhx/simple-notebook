import React from "react";
import "./index.css";

const NoteEditor = ({ note }) => {
  return (
    <div className="note-editor">
      <h1>{note.title}</h1>
      <div className="content">{note.content}</div>
    </div>
  );
};

export default NoteEditor;
