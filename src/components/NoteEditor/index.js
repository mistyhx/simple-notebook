import React from "react";
import { Trash, Edit } from "react-feather";
import "./index.css";

const NoteEditor = ({ note, onDelete }) => {
  return (
    <div className="note-editor">
      <h1>{note.title}</h1>
      <div className="content">{note.content}</div>
      <div className="note-editor-footer">
        <div className="date">{note.createdOn}</div>
        <div className="action-buttons">
          <Edit className="action-button-icon" size={18} />
          <Trash className="action-button-icon" size={18} onClick={() => onDelete()} />
        </div>
      </div>
    </div>
  );
};

export default NoteEditor;
