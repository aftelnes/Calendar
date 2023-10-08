import React, { useState } from "react";

import classes from  './MyHeader.module.css'

const MyHeader = ({children})  => {
    return(
        <h2 className={classes.myHeader}>
            {children}
        </h2>
    );
};

export default MyHeader;