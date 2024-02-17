import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "../styles/tableStyles.css"
import { useSelector, useDispatch } from "react-redux";

export default function TableBoxRole() {
  const dataTableValues = [
    { id: 1, Name: 'John Doe' },
    { id: 2, Name: 'Jane Smith' },
    { id: 3, Name: 'Mary Johnson'},
    { id: 4, Name: 'Michael Clark'}
  ];

  const dataAssignments = useSelector((state) => state.dataAssignment.dataAssignment);
  console.log("dataAssignments",dataAssignments)

  return (
    <div className="table-container">
      <h2>Employee Information</h2>
      <DataTable value={dataAssignments}>
        <Column field="Name" header="Name"></Column>
      </DataTable>
    </div>
  );
}
