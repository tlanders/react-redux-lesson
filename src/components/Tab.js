import React from "react";
import "./Tabs.css"

export const Tab = ({id, title, isActive, onSetActiveTab}) => {
    return (
        <>
            <h2 role={"button"} onClick={onSetActiveTab}>
                {title}{isActive && <span> - active</span>}
            </h2>
        </>
    );
}