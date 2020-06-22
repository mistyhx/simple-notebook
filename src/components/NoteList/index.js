import React from "react";
import "./index.css";

const NoteList = () => {
  return (
    <div className="note-list">
      <input type="text" placeholder="Search Note..." value="" />
      <div className="note-list-item">Title-My note</div>
    </div>
  );
};

export default NoteList;
