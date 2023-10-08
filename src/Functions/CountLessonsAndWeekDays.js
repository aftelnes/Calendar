import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

function getLessonsAndWeekDays(){

    const monday_ary = [];
    const tuesday_ary = [];
    const thirsday_ary = [];
    const wednesday_ary = [];
    const friday_ary = [];
    const saturday_ary = [];
    const sunday_ary = [];

    let lesson_ary = []
    for (let i = 0; i < 100 ; i++) {
        const key = localStorage.key(i);
        if (key != null) {
            lesson_ary.push(key);
        }
    }
    console.log(`lesson_ary = ${lesson_ary}`)
    for (let i = 0; i < lesson_ary.length; i++) {

        let les_and_week_data = lesson_ary[i];

        if (les_and_week_data[0] === '1') {
            monday_ary.push(les_and_week_data[1]);
        }
        else if (les_and_week_data[0] === '2') {
            tuesday_ary.push(les_and_week_data[1]);
        }
        else if (les_and_week_data[0] === '3') {
            wednesday_ary.push(les_and_week_data[1]);
        }
        else if (les_and_week_data[0] === '4') {
            thirsday_ary.push(les_and_week_data[1]);
        }
        else if (les_and_week_data[0] === '5') {
            friday_ary.push(les_and_week_data[1]);
        }
        else if (les_and_week_data[0] === '6') {
            saturday_ary.push(les_and_week_data[1]);
        }
        else if (les_and_week_data[0] === '7') {
            sunday_ary.push(les_and_week_data[1]);
        }
    };
    const result_ary = [monday_ary, tuesday_ary, wednesday_ary, thirsday_ary, friday_ary, saturday_ary, sunday_ary];
    return result_ary;
}

export default getLessonsAndWeekDays;