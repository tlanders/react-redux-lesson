import initialState from "./initial-state";
import actionTypes from "../actions/action-types";

const notesReducer = (state = initialState.notes, action) => {
    console.log('notes reducer - state: ', state, ', action: ' + action);
    switch (action.type) {
        case actionTypes.notes.addNote :
            const {type, ...newNote} = action;
            // console.log('adding new note: ', newNote);
            return state
                .map(note => ({...note, isActive: false}))
                .concat([newNote]);
        case actionTypes.notes.deleteNote :
        case actionTypes.notes.setActiveNote :
        case actionTypes.notes.updateNote :
            // console.log('updateNode, pre state=', state);
            state = state.map(note => note.id !== action.id
                ? note
                : ({
                    ...note,
                    content: action.content,
                    lastEdited: action.lastEdited.printed,
                    lastEditedRaw: action.lastEdited.raw,
                }));
            // console.log('updateNote reducer - id=' + action.id + ', content=', action.content);
            // console.log('updateNode, post state=', state);
            return state;
        case actionTypes.tabs.setActiveTab :
        default:
            return state;
    }
}

export default notesReducer;