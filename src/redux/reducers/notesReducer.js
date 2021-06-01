import initialState from "./initial-state";

const notesReducer = (state = initialState.notes, action) => {
    return state;
}

/*
        {
            id: uuid(),
            content: 'New Note',
            lastEdited: dayjs(),
            isActive:true,
            tabId: ''
        }
 */
export default notesReducer;