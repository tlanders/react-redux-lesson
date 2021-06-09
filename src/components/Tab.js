import React from "react";
import classnames from "classnames";
import "./Tabs.css"

export const Tab = ({title, isActive, onSetActiveTab}) => {
    return (
        <>
            <li
                className={classnames('tabs__menu__tab', { 'tabs__menu__tab--active': isActive })}
                aria-label={title}
                role="button"
                onClick={onSetActiveTab}
            >
                {title}
            </li>
        </>
    );
}