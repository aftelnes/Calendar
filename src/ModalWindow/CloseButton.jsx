import React from 'react';
import classes from './CloseButtonStyle.module.css'

const CloseBtn = ({...props}) => {
    return (
        <button {...props} className={classes.closeButton}>
        </button>
    );
};

export default CloseBtn;