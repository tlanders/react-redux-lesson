import actionTypes from "./action-types";

export const setActiveTab = (tabId) => ({
    type: actionTypes.tabs.setActiveTab,
    id: tabId
});

