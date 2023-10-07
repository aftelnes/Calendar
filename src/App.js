import { useState, useMemo } from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import '../src/style.css'
import MyHeader from "./header/Myheader";
import MyButton from "./button/MyButton";
import MyInput from "./input/MyInput";
import Table from "./table/Table"
import { TextArea, } from "./TextArea";
import ModalWindow from "./ModalWindow/ModalWindow";
import CloseBtn from "./ModalWindow/CloseButton";
import BasicExample from "./ModalWindow/CloseButton";



const App = () => {


  const [fio, setFio] = useState(' ');
  const [note, setNote] = useState(' ');
  const [modal, setModal] = useState(false);

  const addAll = (event) => {
    event.preventDefault();
    console.log('note =',note, 'fio =', fio);
            localStorage.clear();

  }

  

  const showModalWindowInfo = (event) => {
    setModal(true);
    event.preventDefault();
  }
  const fio_and_note = [fio, note];

  return (
    <div style={{backgroundColor: '#c5c5c5'}}>
      <div style={{backgroundColor: 'white', width: 1200, height: 900, marginLeft: 200, marginTop: 50 }}>

      <ModalWindow visible={modal} setVisible={setModal}>
        {fio_and_note}
      </ModalWindow>

        <MyHeader>Календарь занятости</MyHeader>

        <MyInput 
        type='text' 
        value={fio} 
        placeholder='Фамилия Имя Отчество'
        onChange={event => setFio(event.target.value)}
        />

        <Table></Table>
        <TextArea onChange={event => setNote(event.target.value)} placeholder='Ваши примечания' style={{marginLeft: "2%", width: '92%'}}></TextArea>
        <MyButton onClick={showModalWindowInfo}>Отправить</MyButton>
        {/* <MyButton onClick={() => setModal(true)}>Modal</MyButton> */}



      </div>
    </div>
  );
};

export default App;