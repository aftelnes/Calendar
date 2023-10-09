import { useState, useMemo } from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import '../src/style.css'
import classes from './App.module.css'
import MyHeader from "./header/Myheader";
import MyButton from "./button/MyButton";
import MyInput from "./input/MyInput";
import Table from "./table/Table"
import { TextArea, } from "./TextArea";
import ModalWindow from "./ModalWindow/ModalWindow";



const App = () => {


  const [fio, setFio] = useState('');
  const [note, setNote] = useState('');
  const [modal, setModal] = useState(false);


  const showModalWindowInfo = (event) => {
    setModal(true);
    event.preventDefault();
  }
  const fio_and_note = [fio, note];

  return (
    <div className={classes.mainDiv}>
      <div className={classes.tableDiv}>
        

      <ModalWindow visible={modal} setVisible={setModal}>
        {fio_and_note}
      </ModalWindow>

        <MyHeader>Календарь занятости</MyHeader>

        <h4 style={{marginLeft: '2%', marginBottom: '0.5%'}}>Сотрудник</h4>
        <MyInput type='text' 
        value={fio} 
        placeholder='Фамилия Имя Отчество'
        onChange={event => setFio(event.target.value)}></MyInput>


        <Table></Table>
        <h4 style={{marginLeft: '2%', marginBottom: '0.5%'}}>Примечание</h4>
        <TextArea onChange={event => setNote(event.target.value)} placeholder='Ваши примечания' style={{marginLeft: "2%", width: '92%'}}></TextArea>
        <MyButton onClick={showModalWindowInfo}>Отправить</MyButton>


      </div>
    </div>
  );
};

export default App;