import React from 'react';
import { TextArea } from "./TextArea";

const NoteInput = (props) => {
    return (
        <input className={classes.myInput} {...props} />
    );
};

export default NoteInput;