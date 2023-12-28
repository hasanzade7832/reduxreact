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
    }
  };

  return (
    <>
      <div>
        <DataTable
          value={dataRibbon}
          showGridlines
          selectionMode="single"
          selection={selectedRow}
          onSelectionChange={handleSelectionChange}
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
