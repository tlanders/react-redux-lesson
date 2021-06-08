import React from "react";
import PropTypes from 'prop-types';
import classnames from "classnames";
import './Controls.css';

export const ControlsButton = ({alignRight, text, onClick}) => {
    return (
        <button
            className={classnames('controls__button', {
                'controls--button--right' : alignRight
            })}
            onClick={onClick}
            aria-label={text}
        >
            {text}
        </button>
    );
};

ControlsButton.propTypes = {
    alignRight: PropTypes.bool,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

ControlsButton.defaultProps = {
    alignRight: false
};

export default ControlsButton;