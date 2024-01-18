// TableComponent.jsx

import React from "react";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { mainSlice } from "../../../redux/mainSlice";

const TableComponent = ({ value }) => {
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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <DataTable
          scrollable
          scrollHeight="30vh"
          size="small"
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
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button size="small" onClick={handleSelect}>
          <span>Select</span>
        </Button>
      </div>
    </div>
  );
};

export default TableComponent;
