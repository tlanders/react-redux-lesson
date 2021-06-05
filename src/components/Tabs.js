import React from 'react';
import {Tab} from "./Tab";
// import Notelist from "./Notelist";
import NotelistContainer from "../containers/NotelistContainer";

export const Tabs = ({activeTabId, notes, tabs, onSetActiveTab, onSetActiveNote}) => {
    console.log('active tab: ' + activeTabId);
    return (
        <>
            <h1>Tabs</h1>
            <div className={"tabs"}>
                {tabs.map(tab => (
                    <Tab key={tab.id}
                        {...tab}
                        onSetActiveTab={onSetActiveTab(tab.id)}
                    />
                ))}
            </div>
            <NotelistContainer notes={notes}/>
        </>
    );
}

export default Tabs;