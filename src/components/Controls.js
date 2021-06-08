import React from "react";
import PropTypes from 'prop-types';
import ControlsButton from "./ControlsButton";
import './Controls.css';

export const Controls = ({activeTabId, onAddNote, onDeleteNote}) => {
    return (
        <div className={"controls"}>
            <ControlsButton onClick={onAddNote(activeTabId)} text={"Add Note"}/>
            <ControlsButton onClick={onDeleteNote} text={"Delete Note"}/>
        </div>
    );
};

Controls.propTypes = {
    activeTabId: PropTypes.string.isRequired,
    onAddNote: PropTypes.func.isRequired,
    onDeleteNote: PropTypes.func.isRequired,
};

export default Controls;