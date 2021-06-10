import React from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import "./Notelist.css"

const NotelistItem = ({isActive, title, lastEdited, onSetActiveNote}) => {
    return (
        <li onClick={onSetActiveNote}
            role={"button"}
            className={classnames('notelist__list__item', {
                'notelist__list__item--active': isActive,
            })}
        >
            <div className="notelist__list__item__title">
                {title}
            </div>
            <div className="notelist__list__item__last-edited">
                {lastEdited}
            </div>
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