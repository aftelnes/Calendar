import React from "react";
import getLessonsAndWeekDays from "../Functions/CountLessonsAndWeekDays";
import classes from './ShowLessonAndWeeDayData.module.css'

const ShowLessonAndWeekDayData = () => {

    let result_ary = [];
    result_ary = getLessonsAndWeekDays(); 
    
    const monday_lessons = result_ary[0].sort().toString();
    const tuesday_lessons = result_ary[1].sort().toString();
    const wednesday_lessons = result_ary[2].sort().toString();
    const thirsday_lessons = result_ary[3].sort().toString();
    const friday_lessons = result_ary[4].sort().toString();
    const saturday_lessons = result_ary[5].sort().toString();
    const sunday_lessons = result_ary[6].sort().toString();

    return(
        <div className={classes.mainDiv}>
            {result_ary[0].length != 0 ? <p style={{marginBottom: '-6%', fontSize: '90%'}}>&bull; Понедельник: {monday_lessons}</p> : <p></p>}
            {result_ary[1].length != 0 ? <p style={{marginBottom: '-6%', fontSize: '90%'}}>&bull; Вторник: {tuesday_lessons}</p> : <p></p>}
            {result_ary[2].length != 0 ? <p style={{marginBottom: '-6%', fontSize: '90%'}}>&bull; Среда: {wednesday_lessons}</p> : <p></p>}
            {result_ary[3].length != 0 ? <p style={{marginBottom: '-6%', fontSize: '90%'}}>&bull; Четверг: {thirsday_lessons}</p> : <p></p>}
            {result_ary[4].length != 0 ? <p style={{marginBottom: '-6%', fontSize: '90%'}}>&bull; Пятница: {friday_lessons}</p> : <p></p>}
            {result_ary[5].length != 0 ? <p style={{marginBottom: '-6%', fontSize: '90%'}}>&bull; Суббота: {saturday_lessons}</p> : <p></p>}
            {result_ary[6].length != 0 ? <p style={{marginBottom: '-6%', fontSize: '90%'}}>&bull; Воскресенье: {sunday_lessons}</p> : <p></p>}
        </div>
    );
};

export default ShowLessonAndWeekDayData;