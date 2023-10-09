import { useCallback, useState, useRef, useMemo } from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import '../style.css';

const Table = () => {

    const cellCLickedListener = useCallback(event => {
      console.log('cellClicked', event);
    })


    const [columnDefs] = useState([
      {
      headerName: "",
      field: "rowHeader",
      type: "editableColumn",
      weekDayNum: 0,
      width: 50,
      },
      {
      headerName: "Понедельник",
      field: "monday",
      type: "editableColumn",
      weekDayNum: '1',
      width: 190,
      },
      {
      headerName: "Вторник",
      field: "tuesday",
      type: "editableColumn",
      weekDayNum: '2',
      width: 190,

      },
      {
      headerName: "Среда",
      field: "wednesday",
      type: "editableColumn",
      weekDayNum: '3',
      width: 190,

      },
      {
      headerName: "Четверг",
      field: "thursday",
      type: "editableColumn",
      weekDayNum: '4',
      width: 190,

      },
      {
      headerName: "Пятница",
      field: "friday",
      type: "editableColumn",
      weekDayNum: '5',
      width: 190,

      },
      {
      headerName: "Суббота",
      field: "saturday",
      type: "editableColumn",
      weekDayNum: '6',
      width: 190,

      },
      {
      headerName: "Воскресенье",
      field: "sunday",
      type: "editableColumn",
      weekDayNum: '7',
      width: 190,
      },
    ]);
    
    const [rowData] = useState([
      {
      id: "les1",
      rowHeader: "1",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    },
    {
      id: "les2",
      rowHeader: "2",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    },
    {
      id: "les3",
      rowHeader: "3",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    },
    {
      id: "les4",
      rowHeader: "4",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    },
    {
      id: "les5",
      rowHeader: "5",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    },
    {
      id: "les6",
      rowHeader: "6",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    },
    {
      id: "les7",
      rowHeader: "7",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    },
    {
      id: "les8",
      rowHeader: "8",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    },
    {
      id: "les9",
      rowHeader: "9",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    },
    
    ]);


    function changeCellColor(params, color){
      const focusedCell =  params.api.getFocusedCell();
      const rowNode = params.api.getRowNode(focusedCell.rowIndex);
      const column = focusedCell.column.colDef.field;
      focusedCell.column.colDef.cellStyle = { 'background-color': `${color}` };
      params.api.refreshCells({
          force: true,
          columns: [column],
          rowNodes: [rowNode]
      });
    }



    function onCellClicked(params) {

      const weekDay = params.colDef.weekDayNum;
      const para = params.data.rowHeader;
      const data_key = `${weekDay}${para}`
      const ary_weekDay_para = `["${weekDay}","${para}"]`

      if (localStorage.length != 0){
        let tmp_ary = [];
        for (let i = 0; i < 100; i++) {

          tmp_ary.push(localStorage[i]);
        }
        if (tmp_ary.includes(ary_weekDay_para)) {
            
            const tmp_color = params.colDef.cellStyle['background-color']
            if (tmp_color == '#fff') {
              changeCellColor(params, '#ffcccc')
            } else 
            if (tmp_color == '#ffcccc') {
                changeCellColor(params, '#fff')

                for (let i = 0; i < 100 ; i++) {
                  const key = localStorage.key(i);
                  const value = localStorage.getItem(key);

                  if (value == ary_weekDay_para){
                    localStorage.removeItem(key)
                  }
                }
            }
            

        } else{
            localStorage.setItem(data_key, JSON.stringify([weekDay, para]));
            changeCellColor(params, '#ffcccc');
        }

      }else {
        localStorage.setItem(data_key, JSON.stringify([weekDay, para]));
        changeCellColor(params, '#ffcccc');
      }
    }

  return (
    <div className="ag-theme-alpine" style={{ height: 435, width: "93%", margin: '10px auto 15px', zIndex: 5, marginLeft: '2%'}}>
      <AgGridReact columnDefs={columnDefs} rowData={rowData} onCellClicked={onCellClicked}></AgGridReact>
    </div>
  );

};

export default Table;