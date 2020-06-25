import React, { useState } from "react";
import "./index.css";

const NoteList = ({ notes, onSelect, noteIndex, keyword, onFilter }) => {
  return (
    <div className="sidebar">
      <div className="search">
        <input
          type="text"
          placeholder={`Search ${notes.length} notes...`}
          value={keyword}
          onChange={e => onFilter(e.target.value)}
        />
      </div>
      <div className="note-list">
        {notes.map((item, index) => (
          <div key={index} className={index == noteIndex ? `selected` : `unselected`} onClick={() => onSelect(index)}>
            <div className="note-list-item">
              <h4>{item.title}</h4>
              <span>{item.content.substring(0, 30)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
