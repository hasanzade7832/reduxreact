// TableComponent.jsx

import React from "react";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../globalComponents/buttonComp";
import { mainSlice } from "../../redux/mainSlice";

const TableComponent = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const dispatch = useDispatch();

  const dataProgram = useSelector(
    (state) => state.dataProgramTemplate.dataProgramTemplate
  );

  const handleSelectionChange = (e) => {
    setSelectedRow(e.value);
  };

  const handleSelect = () => {
    if (selectedRow) {
      dispatch(mainSlice.actions.setprogramTemplateSelectedRow(selectedRow));
      dispatch(mainSlice.actions.setshowDialogProgramTemplate(false));
    }
  };

  const handleDoubleClick = () => {
    dispatch(mainSlice.actions.setprogramTemplateSelectedRow(selectedRow));
    dispatch(mainSlice.actions.setshowDialogProgramTemplate(false));
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <DataTable
          value={dataProgram}
          showGridlines
          selectionMode="single"
          selection={selectedRow}
          onSelectionChange={handleSelectionChange}
          onRowDoubleClick={handleDoubleClick}
        >
          <Column field="Name" header="Name" />
        </DataTable>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          width: "100%",
        }}
      >
        <CustomButton label="select" onClick={handleSelect} />
      </div>
    </>
  );
};

export default TableComponent;
