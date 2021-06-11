import initialState from "./initial-state";
import actionTypes from '../actions/action-types';

const tabsReducer = (state = initialState.tabs, action) => {
    console.log('state: ' + state + ', action: ' + action);
    switch(action.type) {
        case actionTypes.tabs.setActiveTab :
            return state.map(tab => ({
                ...tab,
                isActive: tab.id === action.id
            }));
        default:
            return state;
    }
}

export default tabsReducer;