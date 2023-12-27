// TableComponent.jsx

import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TableComponent = () => {
  const dataProgram = useSelector(
    (state) => state.dataProgramTemplate.dataProgramTemplate
  );

  console.log("program", dataProgram);

  return (
    <div>
      <DataTable value={dataProgram}>
        <Column field="Name" header="Name" />
      </DataTable>
    </div>
  );
};

export default TableComponent;
