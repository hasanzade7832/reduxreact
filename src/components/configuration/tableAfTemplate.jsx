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