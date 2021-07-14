import { createSelector } from "reselect";
import {getActiveTabId} from "./tabs-selectors";
import truncate from "../../util/truncate";
import dayjs from "dayjs";

const getNotes = (state) => state.notes;

const getNotesList = createSelector(
    getNotes,
    notes => notes.map(note => ({
        id: note.id,
        isActive: note.isActive,
        title: truncate(note.content) || 'Untitled note',
        lastEdited: note.lastEdited,
        lastEditedRaw: note.lastEditedRaw,
        tabId: note.tabId
    }))
);

export const getNotesSorted = createSelector(
    getNotesList,
    notes => notes.sort((n1, n2) => dayjs(n2.lastEditedRaw).diff(dayjs(n1.lastEditedRaw)))
);

export const getActiveNote = createSelector(
    getNotes,
    notes => notes.find(note => note.isActive) || null,
);

export const getActiveId = createSelector(
    getActiveNote,
    note => note ? note.id : ''
);

export const getActiveContent = createSelector(
    getActiveNote,
    note => note ? note.content : ''
);

export const getActiveLastEdited = createSelector(
    getActiveNote,
    note => note ? note.lastEdited : ''
);

export const getNotesForActiveTab = createSelector(
    getActiveTabId,
    getNotesSorted,
    (activeTabId, notes) => notes.reduce((activeNotes, note) => {
        return note.tabId === activeTabId ? activeNotes.concat([note]) : activeNotes;
    }, [])
);

export const getNoteIdsForActiveTab = createSelector(
    getNotesForActiveTab,
    (activeNotes) => (activeNotes.map(note => note.id))
);

export const getNoteById = createSelector(
    getNotesForActiveTab,
    (ownProps) => ownProps.id,
    (notes, id) => notes.find(note => note.id === id)
);