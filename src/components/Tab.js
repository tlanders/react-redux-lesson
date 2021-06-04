import React from "react";

export const Tab = ({id, title, isActive}) => {
    return (
        <>
            <h2>{title}{isActive && <span> - active</span>}</h2>
        </>
    );
}