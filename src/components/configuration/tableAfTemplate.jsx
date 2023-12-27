// TableComponent.jsx

import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TableComponent = () => {
  const dataWfTemplate = useSelector(
    (state) => state.dataWfTemplate.dataWfTemplate
  );

  console.log("program", dataWfTemplate);

  return (
    <div>
      <DataTable value={dataWfTemplate}>
        <Column field="Name" header="Name" />
      </DataTable>
    </div>
  );
};

export default TableComponent;
