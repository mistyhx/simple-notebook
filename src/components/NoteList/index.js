import React, { useState } from "react";
import "./index.css";

const NoteList = ({ notes, onSelect }) => {
  const [filterednotes, setFilterednotes] = useState(notes);
  const [keyword, setKeyword] = useState("");
  const filterNote = keyword => {
    setKeyword(keyword);
    if (keyword) {
      const temp = filterednotes.filter(item => item.title.includes(keyword) || item.content.includes(keyword));
      setFilterednotes(temp);
    } else {
      setFilterednotes(notes);
    }
  };

  return (
    <div className="note-list">
      <input
        type="text"
        placeholder={`Search ${notes.length} notes...`}
        value={keyword}
        onChange={e => filterNote(e.target.value)}
      />
      {filterednotes.map((item, index) => (
        <div key={index} className="note-list-item" onClick={() => onSelect(index)}>
          <h4>{item.title}</h4>
          <span>{item.content.substring(0, 30)}</span>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
