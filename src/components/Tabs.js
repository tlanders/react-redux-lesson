import React from 'react';
import Tab from "./Tab";
import PropTypes from 'prop-types';
import NotelistContainer from "../containers/NotelistContainer";
import "./Tabs.css";

export const Tabs = ({activeTabId, notes, tabs, onSetActiveTab, onSetActiveNote}) => {
    console.log('active tab: ' + activeTabId);
    return (
        <>
            <div className={"tabs"}>
                <ul className="tabs__menu">
                {tabs.map(tab => (
                    <Tab key={tab.id}
                        {...tab}
                        onSetActiveTab={onSetActiveTab(tab.id)}
                    />
                ))}
                </ul>
            </div>
            <NotelistContainer notes={notes}/>
        </>
    );
}

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        isActive: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
    onSetActiveTab: PropTypes.func.isRequired,
};

export default Tabs;