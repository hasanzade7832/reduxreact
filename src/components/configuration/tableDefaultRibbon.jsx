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

  const dataRibbon = useSelector((state) => state.dataRibbon.dataRibbon);

  const dispatch = useDispatch();

  console.log("program", dataRibbon);

  const handleSelectionChange = (e) => {
    setSelectedRow(e.value);
    console.log("selectedRow", e.value.ID);
  };

  const handleSelect = () => {
    if (selectedRow) {
      console.log("selectedRow1", selectedRow);
      dispatch(mainSlice.actions.setDefaultRibbonSelectedRow(selectedRow));
      dispatch(mainSlice.actions.setShowDialogDefaultRibbon(false));
    }
  };

  const handleDoubleClick = () => {
    dispatch(mainSlice.actions.setDefaultRibbonSelectedRow(selectedRow));
    dispatch(mainSlice.actions.setShowDialogDefaultRibbon(false));
  };

  return (
    <>
      <div>
        <DataTable
          scrollable
          scrollHeight="30vh"
          size="small"
          value={dataRibbon}
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
