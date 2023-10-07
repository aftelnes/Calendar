import React from "react";
import classes from './ModalWindow.module.css'
import CloseBtn from "./CloseButton";

const ModalWindow = ({children, visible, setVisible}) => {

    const fio = children[0];
    const note = children[1];
    const rootClasses = [classes.Modal];
    if (visible) {
        rootClasses.push(classes.active);
    }

    let lesson_ary = []
    for (let i = 0; i < 100 ; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        if (value != ',') {
            lesson_ary.push(i);
        }
    }
    console.log(`lesson_ary = ${lesson_ary}`)
    

    return(
        <div className={rootClasses.join(' ')} onClick={() => setVisible(true)}>
            <div className={classes.ModalContent} onClick={(event => event.stopPropagation())}>
                <div className={classes.headerAndCloseBtn}>
                    <h3>Занятость <CloseBtn onClick={() => {setVisible(false); localStorage.clear()}} style={{marginLeft: '62%'}}/></h3>
                </div>
                <h5 style={{marginBottom: '0.5%'}}>Сотрудник:</h5>
                {fio}
                <h5 style={{marginBottom: '0.5%'}}>Примечание:</h5>
                {note}
            </div>
        </div>
    );

};

export default ModalWindow;