import {combineReducers} from 'redux';
import tabsReducer from "./tabsReducer";
import notesReducer from "./notesReducer";

export default combineReducers({
    tabs: tabsReducer,
    notes: notesReducer
});