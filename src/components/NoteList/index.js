import React from "react";
import "./index.css";

const NoteList = () => {
  return (
    <div className="note-list">
      <input type="text" placeholder="Search Note..." value="" />
      <div className="note-list-item">
        <h4>Javascipt fundamental</h4>
        <span>After resolving all sds ..</span>
      </div>
      <div>+</div>
    </div>
  );
};

export default NoteList;
