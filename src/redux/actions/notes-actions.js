import actionTypes from "./action-types";

const noteFactory = (tabId, initialContent = '') => ({
    tabId,
    content: initialContent,
    lastEdited: Date.now(),
    title: 'Untitled'
});

export const addNote = (tabId, initialContent = '') => ({
    type: actionTypes.notes.addNote,
    ...noteFactory(tabId, initialContent),
});

export const setActiveNote = (id) => ({
    type: actionTypes.notes.setActiveNote,
    id
});