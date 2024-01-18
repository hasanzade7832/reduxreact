// TableComponent.jsx
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useSelector, useDispatch } from "react-redux";
import { mainSlice } from "../../../redux/mainSlice";

const TableComponent = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const dataFormTemplate = useSelector(
    (state) => state.dataEntityType.dataEntityType
  );

  const dispatch = useDispatch();

  //console.log("program", dataFormTemplate);

  const handleSelectionChange = (e) => {
    setSelectedRow(e.value);
  };

  const handleSelect = () => {
    if (selectedRow) {
      dispatch(mainSlice.actions.setCommentFormSelectedRow(selectedRow));
      dispatch(mainSlice.actions.setShowDialogCommentForm(false));
    }
  };

  const handleDoubleClick = () => {
    dispatch(mainSlice.actions.setCommentFormSelectedRow(selectedRow));
    dispatch(mainSlice.actions.setShowDialogCommentForm(false));
  };

  return (
    <>
      <div>
        <DataTable
          scrollable
          scrollHeight="30vh"
          size="small"
          value={dataFormTemplate}
          showGridlines
          selectionMode="single"
          selection={selectedRow}
          onSelectionChange={handleSelectionChange}
          onRowDoubleClick={handleDoubleClick}
        >
          <Column field="Name" header="Name" />
          <Column field="IsDoc" header="IsDoc" />
          <Column field="EntityCateAName" header="CatA" />
          <Column field="EntityCateBName" header="CatB" />
        </DataTable>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button onClick={handleSelect}>
          <span>Select</span>
        </Button>
      </div>
    </>
  );
};

export default TableComponent;
