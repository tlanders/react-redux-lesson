import initialState from "./initial-state";
import actionTypes from "../actions/action-types";

const notesReducer = (state = initialState.notes, action) => {
    console.log('notes reducer - state: ', state, ', action: ' + action);
    switch (action.type) {
        case actionTypes.notes.addNote :
            const {type, ...newNote} = action;
            console.log('adding new note: ', newNote);
            return state
                .map(note => ({...note, isActive: false}))
                .concat([newNote]);
        case actionTypes.notes.deleteNote :
        case actionTypes.notes.setActiveNote :
        case actionTypes.notes.updateNote :
        case actionTypes.tabs.setActiveTab :
        default:
            return state;
    }
}

export default notesReducer;