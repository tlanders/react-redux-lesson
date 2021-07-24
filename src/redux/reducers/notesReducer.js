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
            // console.log('deleteNote reducer - id=' + action.id + 'pre state=', state);
            return state.filter(note => !note.isActive);
        case actionTypes.notes.setActiveNote :
            console.log('set active note, id=', action.id);
            return state.map(note => ({...note, isActive: note.id === action.id}));
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
            // set first tab note as active?
        default:
            return state;
    }
}

export default notesReducer;