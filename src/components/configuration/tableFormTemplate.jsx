// TableComponent.jsx

import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TableComponent = () => {
  const dataFormTemplate = useSelector(
    (state) => state.dataEntityType.dataEntityType
  );

  console.log("program", dataFormTemplate);

  return (
    <div>
      <DataTable value={dataFormTemplate}>
        <Column field="Name" header="Name" />
        <Column field="IsDoc" header="IsDoc" />
        <Column field="EntityCateAName" header="CatA" />
        <Column field="EntityCateBName" header="CatB" />
      </DataTable>
    </div>
  );
};

export default TableComponent;
