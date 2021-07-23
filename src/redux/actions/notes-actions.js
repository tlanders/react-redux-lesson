import actionTypes from "./action-types";
import uuid from 'react-uuid';
import {getLastEditedTime} from "../../util/get-last-edited-time";

const noteFactory = (tabId, initialContent = '') => {
    const {printed, raw} = getLastEditedTime();
    return {
        id: uuid(),
        tabId,
        content: initialContent,
        lastEdited: printed,
        lastEditedRaw: raw,
        title: 'Untitled',
        isActive: true
    }
};

export const addNote = (tabId, initialContent = '') => ({
    type: actionTypes.notes.addNote,
    ...noteFactory(tabId, initialContent),
});

export const updateNoteContent = (id, content) => ({
    type: actionTypes.notes.updateNote,
    id,
    content,
    lastEdited: getLastEditedTime(),
});

export const deleteNote = (id) => ({
    type: actionTypes.notes.deleteNote,
    id
});

export const setActiveNote = (id) => ({
    type: actionTypes.notes.setActiveNote,
    id
});