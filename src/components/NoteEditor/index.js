import React, { useState } from "react";
import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";
import { Trash, Edit } from "react-feather";
import "./index.css";

const NoteEditor = ({ note, onDelete }) => {
  const initialTitle = note.title || "Title";
  const initialContent = note.content || "This is my note";
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [edit, setEdit] = useState(false);
  return (
    <div className="note-editor">
      {edit ? (
        <div>
          <div>
            <input value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div>
            <textarea defaultValue={content} onChange={e => setContent(e.target.value)} />
          </div>
        </div>
      ) : (
        <div>
          <h1>{note.title}</h1>
          <div>{unified().use(parse).use(remark2react).processSync(content).result}</div>
        </div>
      )}
      <div className="note-editor-footer">
        <div className="date">{note.createdOn}</div>
        <div className="action-buttons">
          <Edit className="action-button-icon" size={18} onClick={() => setEdit(!edit)} />
          <Trash className="action-button-icon" size={18} onClick={() => onDelete()} />
        </div>
      </div>
    </div>
  );
};

export default NoteEditor;
