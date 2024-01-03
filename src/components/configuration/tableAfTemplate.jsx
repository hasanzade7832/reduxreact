// TableComponent.jsx
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useSelector, useDispatch } from "react-redux";
import { mainSlice } from "../../redux/mainSlice";

const TableComponent = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const dataWfTemplate = useSelector(
    (state) => state.dataWfTemplate.dataWfTemplate
  );

  const dispatch = useDispatch();

  const handleSelectionChange = (e) => {
    setSelectedRow(e.value);
  };

  const handleSelect = () => {
    if (selectedRow) {
      dispatch(mainSlice.actions.setAfTemplateSelectedRow(selectedRow));
      dispatch(mainSlice.actions.setShowDialogAfTemplate(false));
    }
  };

  const handleDoubleClick = () => {
    dispatch(mainSlice.actions.setAfTemplateSelectedRow(selectedRow));
    dispatch(mainSlice.actions.setShowDialogAfTemplate(false));
  };

  return (
    <>
      <div>
        <DataTable
          scrollable
          scrollHeight="30vh"
          size="small"
          value={dataWfTemplate}
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
        <Button onClick={handleSelect} >
          <span>Select</span>
        </Button>
      </div>
    </>
  );
};

export default TableComponent;
