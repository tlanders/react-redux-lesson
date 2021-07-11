import actionTypes from "./action-types";
import uuid from 'react-uuid';

const noteFactory = (tabId, initialContent = '') => ({
    id: uuid(),
    tabId,
    content: initialContent,
    lastEdited: Date.now(),
    title: 'Untitled',
    isActive: true
});

export const addNote = (tabId, initialContent = '') => ({
    type: actionTypes.notes.addNote,
    ...noteFactory(tabId, initialContent),
});

export const deleteNote = (id) => ({
    type: actionTypes.notes.deleteNote,
    id
});

export const setActiveNote = (id) => ({
    type: actionTypes.notes.setActiveNote,
    id
});