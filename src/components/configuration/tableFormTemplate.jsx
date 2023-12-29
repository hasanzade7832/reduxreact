// TableComponent.jsx
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import CustomButton from "../globalComponents/buttonComp";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useSelector, useDispatch } from "react-redux";
import { mainSlice } from "../../redux/mainSlice";

const TableComponent = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const dataFormTemplate = useSelector(
    (state) => state.dataEntityType.dataEntityType
  );

  const dispatch = useDispatch();

  console.log("program", dataFormTemplate);

  const handleSelectionChange = (e) => {
    setSelectedRow(e.value);
  };

  const handleSelect = () => {
    if (selectedRow) {
      dispatch(mainSlice.actions.setFormTemplateSelectedRow(selectedRow));
      dispatch(mainSlice.actions.setShowDialogFormTemplate(false));
    }
  };

  const handleDoubleClick = () => {
    dispatch(mainSlice.actions.setFormTemplateSelectedRow(selectedRow));
    dispatch(mainSlice.actions.setShowDialogFormTemplate(false));
  };

  return (
    <>
      <div>
        <DataTable
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
