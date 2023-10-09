import React from "react";
import classes from './ModalWindow.module.css'
import CloseBtn from "./CloseButton";
import ShowLessonAndWeekDayData from './ShowLessonAndWeeDayData';

const ModalWindow = ({children, visible, setVisible}) => {

    const fio = children[0];
    const note = children[1];
    const rootClasses = [classes.Modal];
    if (visible) {
        rootClasses.push(classes.active);
    }

    return(
        <div className={rootClasses.join(' ')} onClick={() => setVisible(true)}>
            <div className={classes.ModalContent} onClick={(event => event.stopPropagation())}>
                <div className={classes.headerAndCloseBtn}>
                    <h3>Занятость <CloseBtn onClick={() => {setVisible(false); localStorage.clear()}} style={{marginLeft: '62%'}}/></h3>
                </div>
                <h5 style={{marginBottom: '-1.5%'}}>Сотрудник:</h5>
                <p style={{marginTop: '0.5%', fontSize: '90%', marginBottom: '-5%'}}>{fio}</p>
                <h5 style={{marginBottom: '-5.5%'}}>Занятость:</h5>
                <ShowLessonAndWeekDayData></ShowLessonAndWeekDayData>
                <h5 style={{marginBottom: '4.5%'}}>Примечание:</h5>
                <p style={{marginTop: '-6%', fontSize: '90%'}}>{note}</p>
            </div>
        </div>
    );

};

export default ModalWindow;