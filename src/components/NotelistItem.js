import React from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import "./Notelist.css"

const NotelistItem = ({isActive, title, lastEdited, onSetActiveNote}) => {
    return (
        <li onClick={onSetActiveNote}
            role={"button"}
            className={classnames('notelist_list_item', {
                'notelist_list_item_active' : isActive,
            })}
        >
            <div>{title}</div>
            <div>{lastEdited}</div>
        </li>
    )
};

NotelistItem.propTypes = {
    isActive: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    lastEdited: PropTypes.string.isRequired,
    onSetActiveNote: PropTypes.func.isRequired
};

export default NotelistItem;