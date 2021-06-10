import React from 'react'
import "./Notelist.css"

const NotelistEmpty = () => (
    <div className="notelist__empty">
        <span role="img" aria-label="no-good-emoji">🙅‍♀️</span> No notes here!
    </div>
);

export default NotelistEmpty;